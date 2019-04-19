<?php
	$servername = "localhost";
	$username = "root";
	$password = "password1";
	$dbname = "wcc_menu";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}   

	$inputJSON = file_get_contents('php://input');
	$input = json_decode($inputJSON, TRUE);
	if($input['action'] == 'add')
	{
		addItem($conn, $input);
	}
	else if($input['action'] == 'update')
	{
		updateItem($conn, $input);
	}
	else if($input['action'] == 'delete')
	{
		deleteItem($conn, $input);
	}

	function addItem($conn, $data)
	{
		$sql = '';
		if($data['category'] == 'food')
		{
			$sql = 'INSERT INTO menu VALUES("'.$data['name'].'","'.$data['price1'].'","'.$data['price2'].'","'.$data['heading'].'","",'.$data['vegan'].','.$data['vegetarian'].','.$data['gluten'].','.$data['breakfast'].','.$data['lunch'].',"'.$data['description'].'");';
		}
		else if($data['category'] == 'drinks')
		{
			$sql = 'INSERT INTO drinks VALUES("'.$data['name'].'","'.$data['price1'].'","'.$data['heading'].'","'.$data['subheading'].'","'.$data['description'].'");';
		}
		else if($data['category'] == 'dressings')
		{
			$sql = 'INSERT INTO salad_dressing VALUES("'.$data['name'].'","");';
		}
		else if($data['category'] == 'toppers')
		{
			$sql = 'INSERT INTO salad_toppers VALUES("'.$data['name'].'","'.$data['price1'].'");';
		}
		
		$result = $conn->query($sql);
	}

	function updateItem($conn, $data)
	{
		$sql = '';
		if($data['category'] == 'food')
		{
			$sql = 'REPLACE INTO menu VALUES("'.$data['name'].'","'.$data['price1'].'","'.$data['price2'].'","'.$data['heading'].'","",'.$data['vegan'].','.$data['vegetarian'].','.$data['gluten'].','.$data['breakfast'].','.$data['lunch'].',"'.$data['description'].'");';
		}
		else if($data['category'] == 'drinks')
		{
			$sql = 'REPLACE INTO drinks VALUES("'.$data['name'].'","'.$data['price1'].'","'.$data['heading'].'","'.$data['subheading'].'","'.$data['description'].'");';
		}
		else if($data['category'] == 'dressings')
		{
			$sql = 'REPLACE INTO salad_dressing VALUES("'.$data['name'].'","");';
		}
		else if($data['category'] == 'toppers')
		{
			$sql = 'REPLACE INTO salad_toppers VALUES("'.$data['name'].'","'.$data['price1'].'");';
		}
		
		$result = $conn->query($sql);
	}

	function deleteItem($conn, $data)
	{
		$sql = '';
		if($data['category'] == 'food')
		{
			$sql = 'DELETE FROM menu WHERE Food_Item = "'.$data['name'].'"';
		}
		else if($data['category'] == 'drinks')
		{
			$sql = 'DELETE FROM drinks WHERE Drink_Name = "'.$data['name'].'"';
		}
		else if($data['category'] == 'dressings')
		{
			$sql = 'DELETE FROM salad_dressing WHERE Dressing = "'.$data['name'].'"';
		}
		else if($data['category'] == 'toppers')
		{
			$sql = 'DELETE FROM salad_toppers WHERE Topper_Name = "'.$data['name'].'"';
		}
		
		$result = $conn->query($sql);
	}
?>