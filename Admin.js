food_data = [];
drink_data = [];
dressing_data = [];
topper_data = [];
window.onload = function()
{
	fetch('http://localhost/Will-Co-Cafe/getMenu.php')
    .then(function(response) {
    	return response.json();
    })
    .then(function(myJson) {
    	food_data = myJson;
    	

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
		    	});

	    	});

	  	});

  	});
}

function changeCategory()
{
	$('#nameInput').val('');
	$('#price1Input').val('');
	$('#price2Input').val('');
	$('#headingInput').val('');
	$('#subheadingInput').val('');
	$('#descInput').val('');
	$('#vegetarian').prop( "checked", false );
	$('#vegan').prop( "checked", false );
	$('#gluten').prop( "checked", false );


	$('#nameLabel').show();
	$('#price1Label').show();
	$('#price2Label').show();
	$('#headingLabel').show();
	$('#subheadingLabel').show();
	$('#descLabel').show();

	$('#nameInput').show();
	$('#price1Input').show();
	$('#price2Input').show();
	$('#headingInput').show();
	$('#subheadingInput').show();
	$('#descInput').show();
	$('#vegetarian').hide();
	$('#vegan').hide();
	$('#gluten').hide();
	$('#vegetarianLabel').hide();
	$('#veganLabel').hide();
	$('#glutenLabel').hide();

	$('#subcategory')
	    .find('option')
	    .remove()
	;
	if($('#category').val() == 'food')
	{
		$('#subheadingLabel').hide();
		$('#subheadingInput').hide();
		$('#vegetarian').show();
		$('#vegan').show();
		$('#gluten').show();
		$('#vegetarianLabel').show();
		$('#veganLabel').show();
		$('#glutenLabel').show();
		var subcategories = {'breakfast':'Breakfast', 'lunch':'Lunch'};
		$('#subcategory').append('<option value="" selected disabled hidden>Choose a subcategory</option>')
		$.each(subcategories, function(key, value) {  
	     	$('#subcategory')
         		.append($("<option></option>")
            	.attr("value",key)
            	.text(value))
            ; 
		});
	}
	else
	{
		$('#subcategory')
     		.append($("<option></option>")
        	.attr("value",'none')
        	.text('N/A'))
        ; 
        if($('#category').val() == 'drinks')
        {
        	$('#price2Label').hide();
			$('#price2Input').hide();
        	$('#item')
			    .find('option')
			    .remove()
			;
			$('#item').append('<option value="" selected disabled hidden>Choose an item</option>')
        	$.each(drink_data, function(i) {
        		$('#item')
	         		.append($("<option></option>")
	            	.attr("value",drink_data[i].Drink_Name)
	            	.text(drink_data[i].Drink_Name.slice(0, -1)))
	            ; 
        	});
        }
        else if($('#category').val() == 'dressings')
        {
        	$('#price1Label').hide();
			$('#price2Label').hide();
			$('#headingLabel').hide();
			$('#subheadingLabel').hide();
			$('#descLabel').hide();

			$('#price1Input').hide();
			$('#price2Input').hide();
			$('#headingInput').hide();
			$('#subheadingInput').hide();
			$('#descInput').hide();

        	$('#item')
			    .find('option')
			    .remove()
			;
			$('#item').append('<option value="" selected disabled hidden>Choose an item</option>')
        	$.each(dressing_data, function(i) {
        		$('#item')
	         		.append($("<option></option>")
	            	.attr("value",dressing_data[i].Dressing)
	            	.text(dressing_data[i].Dressing))
	            ; 
        	});
        }
        else if($('#category').val() == 'toppers')
        {
			$('#price2Label').hide();
			$('#headingLabel').hide();
			$('#subheadingLabel').hide();
			$('#descLabel').hide();

			$('#price2Input').hide();
			$('#headingInput').hide();
			$('#subheadingInput').hide();
			$('#descInput').hide();

        	$('#item')
			    .find('option')
			    .remove()
			;
			$('#item').append('<option value="" selected disabled hidden>Choose an item</option>')
        	$.each(topper_data, function(i) {
        		$('#item')
	         		.append($("<option></option>")
	            	.attr("value",topper_data[i].Topper_Name)
	            	.text(topper_data[i].Topper_Name.slice(0, -1)))
	            ; 
        	});
        }
	}
}

function changeSubcategory()
{
	$('#item')
	    .find('option')
	    .remove()
	;
	$('#item').append('<option value="" selected disabled hidden>Choose an item</option>')
	$.each(food_data, function(i) {  
		if($('#subcategory').val() == 'breakfast')
		{
			if(food_data[i].Is_Breakfast == 1)
			{
				$('#item')
	         		.append($("<option></option>")
	            	.attr("value",food_data[i].Food_Item)
	            	.text(food_data[i].Food_Item.slice(0, -1)))
	            ; 
			}
		}
		else if($('#subcategory').val() == 'lunch')
		{
			if(food_data[i].Is_Lunch == 1)
			{
				$('#item')
	         		.append($("<option></option>")
	            	.attr("value",food_data[i].Food_Item)
	            	.text(food_data[i].Food_Item.slice(0, -1)))
	            ; 
			}
		}
     	
	});
}

function changeItem()
{
	if($('#category').val() == 'food')
	{
		$.each(food_data, function(i) 
		{  
			if($('#item').val() == food_data[i].Food_Item)
			{
				$('#nameInput').val(food_data[i].Food_Item.slice(0, -1));
				$('#price1Input').val(food_data[i].Food_Price1);
				$('#price2Input').val(food_data[i].Food_Price2);
				$('#headingInput').val(food_data[i].Food_Category1);
				$('#descInput').val(food_data[i].Food_Desc);
				$('#vegetarian').prop( "checked", food_data[i].Is_Vegetarian=="1" ? true : false );
				$('#vegan').prop( "checked", food_data[i].Is_Vegan=="1" ? true : false );
				$('#gluten').prop( "checked", food_data[i].Is_GlutenFree=="1" ? true : false );
			}
		});
	}
	else if($('#category').val() == 'drinks')
	{
		$.each(drink_data, function(i) 
		{  
			if($('#item').val() == drink_data[i].Drink_Name)
			{
				$('#nameInput').val(drink_data[i].Drink_Name.slice(0, -1));
				$('#price1Input').val(drink_data[i].Drink_Price);
				$('#headingInput').val(drink_data[i].Drink_Category1);
				$('#subheadingInput').val(drink_data[i].Drink_Category2);
				$('#descInput').val(drink_data[i].Food_Desc);
			}
		});
	}
	else if($('#category').val() == 'dressings')
	{
		$.each(dressing_data, function(i) 
		{  
			if($('#item').val() == dressing_data[i].Dressing)
			{
				$('#nameInput').val(dressing_data[i].Dressing);
			}
		});
	}
	else if($('#category').val() == 'toppers')
	{
		$.each(topper_data, function(i) 
		{  
			if($('#item').val() == topper_data[i].Topper_Name)
			{
				$('#nameInput').val(topper_data[i].Topper_Name.slice(0, -1));
				$('#price1Input').val(topper_data[i].Topper_Price);
			}
		});
	}
}

function addItem()
{
	var bfast = $('#subcategory').val() == 'breakfast' ? 1 : 0;
	var lunch = $('#subcategory').val() == 'lunch' ? 1 : 0;
	var vege = $('#vegetarian').is(':checked') ? 1 : 0;
	var vegan = $('#vegan').is(':checked') ? 1 : 0;
	var gluten = $('#gluten').is(':checked') ? 1 : 0;
	var name = $('#category').val() == 'dressings' ? $('#nameInput').val() : $('#nameInput').val()+':';
	values = {
		'action': 'add',
		'category': $('#category').val(),
		'breakfast': bfast,
		'lunch': lunch,
		'name': name, 
		'price1': $('#price1Input').val(),
		'price2': $('#price2Input').val(),
		'heading': $('#headingInput').val(),
		'subheading': $('#subheadingInput').val(),
		'description': $('#descInput').val(),
		'vegan': vegan,
		'vegetarian': vege,
		'gluten': gluten,
	}
  	fetch('http://localhost/Will-Co-Cafe/admin.php', {
		method: 'POST', 
		body: JSON.stringify(values)
	}).then(res => {
  		location.reload();
	});
}

function updateItem()
{
	var bfast = $('#subcategory').val() == 'breakfast' ? 1 : 0;
	var lunch = $('#subcategory').val() == 'lunch' ? 1 : 0;
	var vege = $('#vegetarian').is(':checked') ? 1 : 0;
	var vegan = $('#vegan').is(':checked') ? 1 : 0;
	var gluten = $('#gluten').is(':checked') ? 1 : 0;
	var name = $('#category').val() == 'dressings' ? $('#nameInput').val() : $('#nameInput').val()+':';
	values = {
		'action': 'update',
		'category': $('#category').val(),
		'breakfast': bfast,
		'lunch': lunch,
		'name': name, 
		'price1': $('#price1Input').val(),
		'price2': $('#price2Input').val(),
		'heading': $('#headingInput').val(),
		'subheading': $('#subheadingInput').val(),
		'description': $('#descInput').val(),
		'vegan': vegan,
		'vegetarian': vege,
		'gluten': gluten,
	}
  	fetch('http://localhost/Will-Co-Cafe/admin.php', {
		method: 'POST', 
		body: JSON.stringify(values)
	}).then(res => {
  		location.reload();
	});
}

function deleteItem()
{
	var name = $('#category').val() == 'dressings' ? $('#nameInput').val() : $('#nameInput').val()+':';
	var values = {
		'action': 'delete',
		'category': $('#category').val(),
		'name': name
	}
	fetch('http://localhost/Will-Co-Cafe/admin.php', {
		method: 'POST', 
		body: JSON.stringify(values)
	}).then(res => {
  		location.reload();
	});
}