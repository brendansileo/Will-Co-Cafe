data = [];
drink_data = [];
dressing_data = [];
topper_data = [];
meal_filter = 'all';
window.onload = function()
{
	fetch('http://localhost/Will-Co-Cafe/getMenu.php')
    .then(function(response) {
    	return response.json();
    })
    .then(function(myJson) {
    	data = myJson;
    	

    	fetch('http://localhost/Will-Co-Cafe/getDrinks.php')
	    .then(function(response) {
	    	return response.json();
	    })
	    .then(function(myJson2) {
	    	drink_data = myJson2;
	    	

	    	fetch('http://localhost/Will-Co-Cafe/getDressings.php')
	    	.then(function(response) {
	    		return response.json();
	    	})
	    	.then(function(myJson3) {
	    		dressing_data = myJson3;
	    		

	    		fetch('http://localhost/Will-Co-Cafe/getToppers.php')
		    	.then(function(response) {
		    		return response.json();
		    	})
		    	.then(function(myJson4) {
		    		topper_data = myJson4;
		    		writeMenu(data);
		    	});

	    	});

	  	});

  	});
}

function writeMenu(data)
{
	menu = document.getElementById('menu')
	menu.innerHTML = ""

	vals = meal_filter;
	if(vals != 'all')
	{
		if(vals == 'drinks')
		{
			writeDrinks();
		}
		if(vals == 'breakfast')
		{
			writeBreakfast(data);
		}

		if(vals == 'lunch')
		{
			writeLunch(data);
		}
	}
	else
	{
		writeDrinks();
		writeBreakfast(data);
		writeLunch(data);
	}
}

function writeDrinks()
{
	menu.innerHTML += "<u><h3>Drinks</h3></u>"
	var drinkItems = {};
	var categories = ['Coffee', 'Not Coffee', 'Tea'];
	var coffeeCategories = ['Cozy Coffee', 'Chilly Coffee', 'Creative Coffee'];
	for(var i=0;i<drink_data.length;i++)
	{
		if(!Object.keys(drinkItems).includes(drink_data[i]['Drink_Category1']))
		{
			drinkItems[drink_data[i]['Drink_Category1']] = {};
			drinkItems[drink_data[i]['Drink_Category1']][drink_data[i]['Drink_Category2']] = [drink_data[i]]
		}
		else
		{
			if(!Object.keys(drinkItems[drink_data[i]['Drink_Category1']]).includes(drink_data[i]['Drink_Category2']))
			{
				drinkItems[drink_data[i]['Drink_Category1']][drink_data[i]['Drink_Category2']] = [drink_data[i]];
			}
			else
			{
				drinkItems[drink_data[i]['Drink_Category1']][drink_data[i]['Drink_Category2']].push(drink_data[i]);
			}
			
		}
	}
	for(var i=0;i<categories.length;i++)
	{
		if(Object.keys(drinkItems).includes(categories[i]))
		{
			menu.innerHTML += '<u><h5>'+categories[i]+'</h5></u>';
			if(categories[i] == 'Coffee')
			{
				for(var x=0;x<Object.keys(drinkItems['Coffee']).length;x++)
				{
					menu.innerHTML += '<h6>'+Object.keys(drinkItems['Coffee'])[x]+'</h6>';
					for(var f=0;f<drinkItems['Coffee'][Object.keys(drinkItems['Coffee'])[x]].length;f++)
					{
						if(drinkItems['Coffee'][Object.keys(drinkItems['Coffee'])[x]][f]['Food_Desc'] != '')
						{
							menu.innerHTML += '<b>'+drinkItems['Coffee'][Object.keys(drinkItems['Coffee'])[x]][f]['Drink_Name']+' '+drinkItems['Coffee'][Object.keys(drinkItems['Coffee'])[x]][f]['Drink_Price']+'</b><br>'+drinkItems['Coffee'][Object.keys(drinkItems['Coffee'])[x]][f]['Food_Desc']+'<br><br>';
						}
						else
						{
							menu.innerHTML += '<b>'+drinkItems['Coffee'][Object.keys(drinkItems['Coffee'])[x]][f]['Drink_Name']+' '+drinkItems['Coffee'][Object.keys(drinkItems['Coffee'])[x]][f]['Drink_Price']+'</b><br><br>';
						}
					}
				}
			}
			else
			{
				for(var f=0;f<drinkItems[categories[i]][''].length;f++)
				{
					if(drinkItems[categories[i]][''][f]['Food_Desc'] != '')
					{
						menu.innerHTML += '<b>'+drinkItems[categories[i]][''][f]['Drink_Name']+' '+drinkItems[categories[i]][''][f]['Drink_Price']+'</b><br>'+drinkItems[categories[i]][''][f]['Food_Desc']+'<br><br>';
					}
					else
					{
						menu.innerHTML += '<b>'+drinkItems[categories[i]][''][f]['Drink_Name']+' '+drinkItems[categories[i]][''][f]['Drink_Price']+'</b><br><br>';
					}
				}
			}
		}
	}
}

function writeBreakfast(data)
{
	menu.innerHTML += "<u><h3>Breakfast</h3></u>"
	var breakfastItems = {};
	var categories = ['', 'A La Carte'];
	for(var i=0;i<data.length;i++)
	{
		if(data[i]['Is_Breakfast'] == 1)
		{
			if(!Object.keys(breakfastItems).includes(data[i]['Food_Category1']))
			{
				breakfastItems[data[i]['Food_Category1']] = [data[i]];
			}
			else
			{
				breakfastItems[data[i]['Food_Category1']].push(data[i]);
			}
		}
	}
	for(var i=0;i<categories.length;i++)
	{
		if(Object.keys(breakfastItems).includes(categories[i]))
		{
			menu.innerHTML += "<u><h5>"+categories[i]+"</h5></u>";
			for(var z=0;z<breakfastItems[categories[i]].length;z++) 
			{
				if(breakfastItems[categories[i]][z]['Food_Desc'] != '')
				{
					if(breakfastItems[categories[i]][z]['Food_Price2'] != '')
					{
						menu.innerHTML += '<b>'+breakfastItems[categories[i]][z]['Food_Item']+' '+breakfastItems[categories[i]][z]['Food_Price1']+' '+breakfastItems[categories[i]][z]['Food_Price2']+'</b><br>'+breakfastItems[categories[i]][z]['Food_Desc']+'<br><br>';
					}
					else
					{
						menu.innerHTML += '<b>'+breakfastItems[categories[i]][z]['Food_Item']+' '+breakfastItems[categories[i]][z]['Food_Price1']+'</b><br>'+breakfastItems[categories[i]][z]['Food_Desc']+'<br><br>';
					}
				}
				else
				{
					if(breakfastItems[categories[i]][z]['Food_Price2'] != '')
					{
						menu.innerHTML += '<b>'+breakfastItems[categories[i]][z]['Food_Item']+' '+breakfastItems[categories[i]][z]['Food_Price1']+' '+breakfastItems[categories[i]][z]['Food_Price2']+'</b><br><br>';
					}
					else
					{
						menu.innerHTML += '<b>'+breakfastItems[categories[i]][z]['Food_Item']+' '+breakfastItems[categories[i]][z]['Food_Price1']+'</b><br><br>';
					}
				}
			}
		}
	}
}

function writeLunch(data)
{
	menu.innerHTML += "<u><h3>Lunch</h3><u/>"
	var lunchItems = {};
	var categories = ['Starter', 'Salads', 'Specialty Salads', 'Sandwiches', 'Rollups', 'From The Grill'];
	for(var i=0;i<data.length;i++)
	{
		if(data[i]['Is_Lunch'] == 1)
		{
			if(!Object.keys(lunchItems).includes(data[i]['Food_Category1']))
			{
				lunchItems[data[i]['Food_Category1']] = [data[i]];
			}
			else
			{
				lunchItems[data[i]['Food_Category1']].push(data[i]);
			}
		}
	}
	for(var i=0;i<categories.length;i++)
	{
		if(Object.keys(lunchItems).includes(categories[i]))
		{
			diets = document.getElementsByName('diet');
			vals_diet = getChecked(diets);
			if(vals_diet.includes('gluten-free'))
			{
				if(categories[i] == 'Sandwiches')
				{
					menu.innerHTML += "<u><h5>"+categories[i]+"</h5></u>";
					menu.innerHTML += "<i><h6>Only Gluten-free if the bread is substituted</h6></i>";
				}
				else
				{
					menu.innerHTML += "<u><h5>"+categories[i]+"</h5></u>";
				}
			}
			else
			{
				menu.innerHTML += "<u><h5>"+categories[i]+"</h5></u>";
			}
			for(var z=0;z<lunchItems[categories[i]].length;z++) 
			{
				if(lunchItems[categories[i]][z]['Food_Desc'] != '')
				{
					if(lunchItems[categories[i]][z]['Food_Price2'] != '')
					{
						menu.innerHTML += '<b>'+lunchItems[categories[i]][z]['Food_Item']+' '+lunchItems[categories[i]][z]['Food_Price1']+' '+lunchItems[categories[i]][z]['Food_Price2']+'</b><br>'+lunchItems[categories[i]][z]['Food_Desc']+'<br><br>';
					}
					else
					{
						menu.innerHTML += '<b>'+lunchItems[categories[i]][z]['Food_Item']+' '+lunchItems[categories[i]][z]['Food_Price1']+'</b><br>'+lunchItems[categories[i]][z]['Food_Desc']+'<br><br>';
					}
				}
				else
				{
					if(lunchItems[categories[i]][z]['Food_Price2'] != '')
					{
						menu.innerHTML += '<b>'+lunchItems[categories[i]][z]['Food_Item']+' '+lunchItems[categories[i]][z]['Food_Price1']+' '+lunchItems[categories[i]][z]['Food_Price2']+'</b><br><br>';
					}
					else
					{
						menu.innerHTML += '<b>'+lunchItems[categories[i]][z]['Food_Item']+' '+lunchItems[categories[i]][z]['Food_Price1']+'</b><br><br>';
					}
				}
			}
		}
		if(categories[i] == 'Sandwiches')
		{
			menu.innerHTML += "<h5><u>The Better Half</u> 9.50</h5>"
			menu.innerHTML += "Why choose? Get the better half of two with chips.<br><u>Pick 2</u>:<br> <b>1/2 sandwich, salad, fruit, or soup</b><br> sandwich choices: chicken salad, cape cod, waldorf, tuna salad, or turkey<br>salad choices: garden, caesar, greek<br><br>"
		}
		else if(categories[i] == 'Salads')
		{
			dressings = "";
			for(var f=0;f<dressing_data.length;f++)
			{
				if(f != dressing_data.length-1)
				{
					dressings += dressing_data[f]['Dressing']+', ' 
				}
				else
				{
					dressings += dressing_data[f]['Dressing']
				}
			}
			menu.innerHTML += "<div style=\"text-align: center; margin-top: -25px\"><b><u>Dressings:</u></b><br>"+dressings+"</div><br>"
		}

		if(categories.includes('Salads') || categories.includes('Specialty Salads'))
		{
			if(categories.includes('Specialty Salads'))
			{
				if(categories[i] == 'Specialty Salads')
				{
					writeToppers();
				}
			}
			else
			{
				if(categories[i] == 'Salads')
				{
					writeToppers();
				}
			}
		}
	}
}

function writeToppers()
{
	menu.innerHTML += "<u><h5>Salad Toppers</h5><u/>"
	for(var t=0;t<topper_data.length;t++)
	{
		menu.innerHTML += topper_data[t]['Topper_Name'] + ' ' + topper_data[t]['Topper_Price'] + '<br>';
	}
	menu.innerHTML += '<br>'
}

function callFilter(meal)
{
	document.getElementsByName('drinks')[0].id = '';
	document.getElementsByName('breakfast')[0].id = '';
	document.getElementsByName('lunch')[0].id = '';
	if(meal_filter == 'all' || meal_filter != meal)
	{
		meal_filter = meal
		document.getElementsByName(meal)[0].id = 'selected';
	}
	else
	{
		meal_filter = 'all'
	}
	filterMenu();
}

function filterMenu()
{
	$('#ModalCenter').modal('hide');
	diets = document.getElementsByName('diet');
	vals_diet = getChecked(diets);
	
	if(vals_diet.length > 0)
	{
		new_data = [];
		for(var i=0;i<data.length;i++)
		{
			var inc = true
			if(vals_diet.includes('vegetarian'))
			{
				if(data[i]['Is_Vegetarian'] == 0)
				{
					inc = false;
				}
			}
			if(vals_diet.includes('vegan'))
			{
				if(data[i]['Is_Vegan'] == 0)
				{
					inc = false;
				}
			}
			if(vals_diet.includes('gluten-free'))
			{
				if(data[i]['Is_GlutenFree'] == 0)
				{
					inc = false;
				}
			}

			if(inc)
			{
				new_data.push(data[i]);
			}
		}
		writeMenu(new_data);
	}
	else
	{
		writeMenu(data);
	}
}

function getChecked(filters)
{
	var vals = []
	for(var i=0;i<filters.length;i++)
	{
		if(filters[i].checked)
		{
			vals.push(filters[i].value);
		}
	}
	return vals
}
