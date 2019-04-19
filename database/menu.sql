CREATE DATABASE WCC_Menu

Drop table if exists A_La_Carte;
Drop table if exists Drinks;
Drop table if exists Menu;
Drop table if exists Salad_Dressing;
Drop table if exists Salad_Toppers;

CREATE TABLE Drinks
(
      Drink_Name varchar(100) NOT NULL,
      Drink_Price varchar(30) NOT NULL,
      Drink_Category1 varchar(40) NOT NULL,
      Drink_Category2 varchar(40) NOT NULL,
      Food_Desc varchar(1000) NOT NULL,
      CONSTRAINT       Drink_PK
      PRIMARY KEY (Drink_Name)
);

CREATE TABLE Menu
(
      Food_Item varchar(100) NOT NULL,
      Food_Price1 varchar(30) NOT NULL,
      Food_Price2 varchar(30) NOT NULL,
      Food_Category1 varchar(40) NOT NULL,
      Food_Category2 varchar(40) NOT NULL,
      Is_Vegan bit NOT NULL,
      Is_Vegetarian bit NOT NULL,
      Is_GlutenFree bit NOT NULL,
      Is_Breakfast bit NOT NULL,
      Is_Lunch bit NOT NULL,
      Food_Desc varchar(500) NOT NULL,
      CONSTRAINT       Food_PK
      PRIMARY KEY (Food_Item)
);


CREATE TABLE Salad_Dressing
(
      Dressing varchar(50) NOT NULL,
      Description varchar(1000) NOT NULL,
      CONSTRAINT       SD_PK
      PRIMARY KEY (Dressing)
);


CREATE TABLE Salad_Toppers
(
      Topper_Name varchar(100) NOT NULL,
      Topper_Price varchar(10) NOT NULL,
      CONSTRAINT       ST_PK
      PRIMARY KEY (Topper_Name)

);


INSERT INTO Drinks VALUES('Bottomless Mug (hot):','3','Coffee','Cozy Coffee','Brooke\'s Brew (medium-dark blend)\n<br>Jamaican Me Crazy\n<br>Smores\n<br>Wicked Wolf (dark roast)\n<br>Decaf');
INSERT INTO Drinks VALUES('Flavored Iced coffee:','3','Coffee','Cozy Coffee','Jamaican  Me Crazy \n<br> Smores \n<br> Wicked Wolf (dark)');
INSERT INTO Drinks VALUES('Chocolate Delight:','3.50','Coffee','Cozy Coffee','Half hot chocolate half coffee topped with whip cream and chocolate sauce');
INSERT INTO Drinks VALUES('Organic Nitro:','4.50','Coffee','Chilly Coffee', 'Nobl\'s nitro infused organic cold brew. Pours from the tap with a cascade effect and a thick foam top');
INSERT INTO Drinks VALUES('Organic Cold Brew:','3.50','Coffee','Chilly Coffee','Nobl\'s handcrafted organic cold brew coffee');
INSERT INTO Drinks VALUES('White Walker:','3.50','Coffee','Creative Coffee', 'White mocha base topped with cold brew coffee');
INSERT INTO Drinks VALUES('Cinnsation:','3.50','Coffee','Creative Coffee', 'Cold brew coffee with a caramel and cinnamon sugar base with an unsweetened vanilla almond milk float');
INSERT INTO Drinks VALUES('Campfire:','3.50','Coffee','Creative Coffee','Smores iced coffee shaken with chocolate, caramel, whip cream, and vanilla sugar');
INSERT INTO Drinks VALUES('Coffee Sundae:','3.50','Coffee','Creative Coffee','Jamaican Me Crazy shaken with the works: chocolate, whip cream, caramel, and vanilla');
INSERT INTO Drinks VALUES('Organic Iced Matcha:','4','Not Coffee','', 'A delicious blend of organic matcha, organic cane sugar, and unsweetened vanilla almond milk');
INSERT INTO Drinks VALUES('Kombucha on tap:','4','Not Coffee','','A Raw Organic fermented tea. Kombucha contains beneficial enzymes, organic acids, and probiotics. When eating with a meal can aid in digestion and nutrient absorption. Served over ice.');
INSERT INTO Drinks VALUES('Spiced Chai:','4','Not Coffee','', 'Hot or iced');
INSERT INTO Drinks VALUES('Soda:','3','Not Coffee','','Coke, Diet Coke, Ginger Ale, Orange, Barq\'s Root beer, HIC Pink Lemonade');
INSERT INTO Drinks VALUES('Small Juice:','1.75','Not Coffee','','');
INSERT INTO Drinks VALUES('Large Juice:','3','Not Coffee','','Apple, Cranberry, Grapefruit, V8, OJ');
INSERT INTO Drinks VALUES('Small Milk:','1.75','Not Coffee','','');
INSERT INTO Drinks VALUES('Large Milk:','3','Not Coffee','','Whole, chocolate, or almond');
INSERT INTO Drinks VALUES('Hot Chocolate:','3.50','Not Coffee','','');
INSERT INTO Drinks VALUES('Raspberry Lime Rickey:','4','Not Coffee','','Soda water, ginger ale, raspberry, and fresh lime');
INSERT INTO Drinks VALUES('Republic of tea:','3','Tea','','<u>Black Tea</u>: Irish Breakfast, British Breakfast, Earl Greyer, British Breakfast Decaf, Cranberry Orange, Blueberry \n<br><u>Green Tea</u>: Honey ginseng, Pomegranate, Acai Green, The People\'s Green \n<br><u>Herbal</u>: Chamomile Lemon, Ginseng Peppermint');
INSERT INTO Drinks VALUES('Unsweetened Brewed Iced Tea:','3','Tea','','');
INSERT INTO Drinks VALUES('Raspberry Iced Tea:','3','Tea','','');
INSERT INTO Drinks VALUES('Iced Tea of The Day:','3','Tea','','');


INSERT INTO Menu VALUES('Grandpa\'s Red Flannel Hash:','13','','','', 0, 0, 1, 1, 0,'Grandpa Tom\'s secret corn beef hash recipe served with two poached eggs, cornbread, home fries, and baked beans');
INSERT INTO Menu VALUES('Mayflower Benedict:','MP','','','', 0, 0, 0, 1, 0,'Wild caught lobster meat saut&eacuteed in garlic butter sauce paired with grilled steak tips on a croissant topped with two poached eggs and drizzled with hollandaise sauce served with home fries');
INSERT INTO Menu VALUES('Benedict:','12','','','', 0, 0, 0, 1, 0,'Homemade specialty hollandaise sauce drizzled over two poached eggs, Canadian bacon, and a buttery flaky croissant served with home fries and baked beans');
INSERT INTO Menu VALUES('Southern Bell with a Twist:','14','','','', 0, 0, 0, 1, 0,'Two fried green tomatoes with our avocado spread, Canadian bacon, and two poached eggs. Drizzled in hollandaise served with homefries and baked beans.');
INSERT INTO Menu VALUES('Florentine:','12','','','', 0, 1, 1, 1, 0,'Marinated portobello mushroom saut&eacuteed with spinach, garlic, cheese, and onion with two poached eggs nestled on top drizzled with hollandaise sauce served with home fries and baked beans');
INSERT INTO Menu VALUES('Steak and Eggs:','18','','','', 0, 0, 1, 1, 0,'Angus grass fed marinated beef tips with two eggs your way, choice of toast, home fries, and baked beans');
INSERT INTO Menu VALUES('Farmhouse:','10','','','', 0, 0, 1, 1, 0,'Traditional two eggs your way with your choice of meat, corn bread, home fries, and baked beans');
INSERT INTO Menu VALUES('Wildflower Pancakes:','11','','','', 0, 1, 0, 1, 0,'Don\'t miss the best pancake in town. Our famous monster sized fluffy pancake. Option to add in: blueberries, bananas, apples, strawberries, cinnamon, or chocolate chips. Served with your choice of meat');
INSERT INTO Menu VALUES('Cinnamon Swirl Pancake:','12','','','', 0, 1, 0, 1, 0,'A magical creation where fried dough meets cinnamon bun and is stuffed in one of our fluffy pancakes. Served with your choice of meat.');
INSERT INTO Menu VALUES('Protein Pancake:','13','','','', 0, 1, 0, 1, 0,'Who says pancakes can\'t be good for you? Try our healthy protein pancake. Served with your choice of meat');
INSERT INTO Menu VALUES('Lost Bread:','11','','','', 0, 0, 0, 1, 0,'Choose any three slices of our fresh homemade bread (white, honey oatmeal, raisin, corn, raspberry, or blueberry) and lose yourself in the flavors of our delicious French toast served with your choice of meat');
INSERT INTO Menu VALUES('Sharon\'s Favorite:','8','','','', 0, 1, 0, 1, 0,'One slice of our amazing raspberry French toast and one slice of our white bread French toast served with our homemade warm raspberry Chambord syrup and a slice of sausage');
INSERT INTO Menu VALUES('Gluten Free French Toast:','12','','','', 0, 1, 1, 1, 0, 'Gluten free bread French toast style served with your choice of meat');
INSERT INTO Menu VALUES('Jason\'s Breakfast:','12','','','', 0, 0, 0, 1, 0,'When you just can\'t decide. Why choose...Two eggs your way, choice of meat, home fries, and a side pancake or French toast');
INSERT INTO Menu VALUES('Avocado Toast:','7','','','', 0, 1, 1, 1, 0,'Two slices of our fresh baked honey oatmeal toast with a avocado spread topped with two eggs over easy');
INSERT INTO Menu VALUES('Caprese Avocado Toast:','10','','','', 1, 1, 1, 1, 0,'Two slices of our honey oatmeal toast with our avocado spread. Topped with RAW spinach, mozzarella, tomatoes, basil, and balsamic vinegar.');
INSERT INTO Menu VALUES('Scurvy Fighter:','8','','','', 0, 1, 0, 1, 0,'A scoop of Greek vanilla yogurt topped with fresh fruit and sprinkled with granola');
INSERT INTO Menu VALUES('Chickens on Strike:','8','','','', 0, 1, 1, 1, 0,'Don\'t like eggs? A cup of fruit, choice of toast, and home fries');
INSERT INTO Menu VALUES('Cheese Omelet:','9','','','', 0, 0, 1, 1, 0,'Make it your way: American, cheddar, Swiss, feta, dairy free, or goat. Don\'t stop there add in: onion, tomato, mushroom, spinach, olive, broccoli, pepper, jalape&ntildeo, bacon, turkey bacon, Canadian bacon, sausage, chicken sausage, or linguica (add 0.50 for each additional item) served with corn bread, home fries and baked beans');
INSERT INTO Menu VALUES('Jack and Jill:','11','','','', 0, 0, 0, 1, 0,'Two eggs fell down and got scrambled around bacon and cheddar got sprinkled after. Then they all got stuffed in a delicious roll up and served with home fries and baked beans. (choice of white or chili wrap)');
INSERT INTO Menu VALUES('Buddha Bowl:','12','','','', 1, 1, 1, 1, 0,'Quinoa placed on top of our avocado spread that\'s posed over nourishing saut&eacuteed vegetables and a bed of our home fries. Served with an egg your way.\n<br>(make it VEGAN substitute the eggs for our baked beans)');
INSERT INTO Menu VALUES('Quiche:','12','','','', 0, 1, 0, 1, 0,'A delectable flaky crust filled with melty cheese and egg served with corn bread and fresh fruit.');
INSERT INTO Menu VALUES('Zone:','12','','','', 0, 0, 1, 1, 0,'Get in the zone with two egg whites scrambled, a cup of fresh fruit, lean Canadian bacon, and oat toast');
INSERT INTO Menu VALUES('Humpty Dumpty:','7','','','', 0, 1, 1, 1, 0,'1 egg fallen any way you like with your choice of toast served with home fries and baked beans');
INSERT INTO Menu VALUES('Vegan Quinoa Hash:','14','','','', 1, 1, 0, 1, 0,'Kale, spinach, sweet potato, onion, and quinoa saut&eacuteed in spices served with a cup of fruit.(*Vegetarian version is hash topped with goat cheese two poached eggs served with toast and baked beans.)');

INSERT INTO Menu VALUES('Basket of Fries:','Sm 3','Lg 5','Starter','', 0, 1, 0, 0, 1,'Choice of sweet potato or waffle');
INSERT INTO Menu VALUES('Mozzarella Sticks:','7','','Starter','', 0, 1, 0, 0, 1,'Served with marinara');
INSERT INTO Menu VALUES('Coconut Shrimp:','9','','Starter','', 0, 0, 0, 0, 1,'With our homemade apple chutney');
INSERT INTO Menu VALUES('Boneless Chicken Tender Platter:','10','','Starter','', 0, 0, 0, 0, 1,'4 chicken tenders served with fries');
INSERT INTO Menu VALUES('Avocado Fries:','9','','Starter','', 0, 1, 0, 0, 1,'Battered and then fried avocado slices served with a side of house made sriracha ranch dressing');
INSERT INTO Menu VALUES('Buffalo Cauliflower Bites:','8','','Starter','', 0, 1, 0, 0, 1,'Spicy fried cauliflower \'wings\' served with a side of blue cheese');
INSERT INTO Menu VALUES('Clam Chowder:','Cup 4','Bowl 7','Starter','', 0, 0, 0, 0, 1,'');

INSERT INTO Menu VALUES('Garden:','8','','Salads','', 1, 1, 1, 0, 1,'Mixed greens topped with tomato, onion, and our vegetable medley');
INSERT INTO Menu VALUES('Caesar:','8','','Salads','', 0, 1, 1, 0, 1,'Crisp romaine lettuce tossed in Caesar dressing with parmesan cheese and croutons');
INSERT INTO Menu VALUES('Greek:','9','','Salads','', 0, 1, 1, 0, 1,'Mixed greens topped with tomato, onion, vegetable medley, feta, and olives');

INSERT INTO Menu VALUES('Bog Salad:','10','','Specialty Salads','', 0, 1, 1, 0, 1,'Dried Cranberries, feta cheese, spiced pecans, fresh vegetable medley on a bed of mixed greens. Served with our homemade cranberry vinaigrette.');
INSERT INTO Menu VALUES('Superfood Salad:','12','','Specialty Salads','', 1, 1, 1, 0, 1,'Baby spinach and mixed greens topped with fresh vegetables, almonds, hemp seed hearts, strawberries, and goji berries with our antioxidant strawberry balsamic dressing.');
INSERT INTO Menu VALUES('Sriracha Avocado Salad:','13','','Specialty Salads','', 0, 0, 0, 0, 1,'Raw spinach topped with tomato, cheddar cheese, bacon, black sesame seeds, quinoa crisps, and finish with fried avocado slices served with sriracha ranch dressing.');

INSERT INTO Menu VALUES('Lobster Grilled Cheese:','MP','','Sandwiches','', 0, 0, 1, 0, 1,'Lobster meat grilled in between two slices of our fresh baked bread with a trio of cheeses (American, Swiss, and a garlic boursin) served with a cup of chowder');
INSERT INTO Menu VALUES('Emily\'s Grilled Cheese:','7','','Sandwiches','', 0, 0, 1, 0, 1,'A traditional grilled cheese sandwich\n<br>add bacon and/or tomato 2');
INSERT INTO Menu VALUES('Chicken Salad:','10','','Sandwiches','', 0, 0, 1, 0, 1,'Fresh all white meat antibiotic free traditional chicken salad');
INSERT INTO Menu VALUES('Cape Cod:','11','','Sandwiches','', 0, 0, 1, 0, 1,'Our chicken salad topped with cranberries, candied pecans, and lettuce');
INSERT INTO Menu VALUES('Waldorf Chicken:','11','','Sandwiches','', 0, 0, 1, 0, 1,'Our chicken salad topped with golden raisins, almonds, apples, and lettuce');
INSERT INTO Menu VALUES('Tuna Croissant:','11','','Sandwiches','', 0, 0, 1, 0, 1,'All white albacore tuna salad with mayonnaise and celery served on a flaky croissant with lettuce');
INSERT INTO Menu VALUES('Pilgrim:','11','','Sandwiches','', 0, 0, 0, 0, 1,'Hand carved turkey, warm apple cornbread stuffing, grandma\'s cranberry sauce, lettuce, and mayonnaise');

INSERT INTO Menu VALUES('BLT:','10','','Sandwiches','', 0, 0, 1, 0, 1,'Smoked apple wood bacon, lettuce, tomato, and mayonnaise');
INSERT INTO Menu VALUES('California BLT:','11','','Sandwiches','', 0, 0, 1, 0, 1,'Turkey bacon, guacamole, sweet red onion, lettuce, and tomato');
INSERT INTO Menu VALUES('Jordan\'s BLT:','12','','Sandwiches','', 0, 0, 1, 0, 1,'Fried green tomatoes, bacon, lettuce, and mayonnaise');

INSERT INTO Menu VALUES('The Better Half:','10','','','', 0, 0, 0, 0, 1,'Why choose? Get the better half of two with chips.\n<br><u>Pick 2</u>:\n<br> 1/2 sandwich, salad, fruit, or soup\n<br> sandwich choices: chicken salad, cape cod, waldorf, tuna salad, or turkey\n<br>salad choices: garden, caesar, greek');

INSERT INTO Menu VALUES('Buffalo Chicken Rollup:','11','','Rollups','', 0, 0, 0, 0, 1,'Grilled buffalo chicken with cheddar cheese and lettuce served with blue cheese');
INSERT INTO Menu VALUES('Southwestern Rollup:','11','','Rollups','', 0, 0, 0, 0, 1,'Marinated grilled chicken, raw spinach, salsa, cheddar cheese, and sour cream');
INSERT INTO Menu VALUES('Quinoa Greek Wrap:','10','','Rollups','', 0, 1, 0, 0, 1,'All our fresh vegetables, with green leaf lettuce, feta, olives, quinoa, and zinfandel');
INSERT INTO Menu VALUES('Caesar Rollup:','11','','Rollups','', 0, 0, 0, 0, 1,'Grilled chicken, romaine, Saratoga Caesar dressing, parmesan cheese, and croutons');

INSERT INTO Menu VALUES('Dr.Joe\'s Organic Double Burger:','12','','From The Grill','', 0, 0, 1, 0, 1,'Just what the Doctor ordered. 30 generation grass fed organic beef from Plymouth\'s very own Dr.Clauss\'s farm in NY. A 6 ounce burger with lettuce, tomato, and onion on a bulkie roll');
INSERT INTO Menu VALUES('Vegan Burger:','11','','From The Grill','', 1, 1, 1, 0, 1,'Chipotle black bean and sweet potato burger with lettuce, tomato, and onion on a bulkie roll. Add avocado fries on top 3');

INSERT INTO Menu VALUES('Uncle Jacks Sugar Shacks Old Fashioned pure maple syrup:','2', '', 'A La Carte', '', 0, 1, 0, 1, 0, '');
INSERT INTO Menu VALUES('1 Egg:','1.25', 'Cage Free 1.75', 'A La Carte', '', 0, 1, 0, 1, 0,'');
INSERT INTO Menu VALUES('Bread:','2.50', '', 'A La Carte', '', 0, 1, 0, 1, 0,'Honey Oatmeal, White, Cinnamon Raisin, Marble Rye, Croissant, Bagel');
INSERT INTO Menu VALUES('Tea Bread:','1.50 (1 slice)', '', 'A La Carte', '', 0, 1, 0,1, 0,'Raspberry, Blueberry, Corn');
INSERT INTO Menu VALUES('Gluten Free Toast:','3.50', '', 'A La Carte', '', 0, 1, 1,1, 0,'');
INSERT INTO Menu VALUES('Meat:','3.50', '', 'A La Carte', '', 0, 0, 0,1, 0,'');
INSERT INTO Menu VALUES('Home fries:','3', '', 'A La Carte', '', 0, 1, 0,1, 0,'');
INSERT INTO Menu VALUES('Sweet Potato Home fries:','4', '', 'A La Carte', '', 0, 1, 0, 1, 0,'');
INSERT INTO Menu VALUES('Baked Beans:','Cup 1', 'Crock 3', 'A La Carte', '', 0, 1, 0,1, 0,'');
INSERT INTO Menu VALUES('Hash:','7', '', 'A La Carte', '', 0, 1, 0, 1, 0,'');
INSERT INTO Menu VALUES('Vegetable Hash:','7', '', 'A La Carte', '', 0, 1, 0,1, 0,'');
INSERT INTO Menu VALUES('Fruit:','Cup 4 Bowl 7', '', 'A La Carte', '', 0, 1, 0,1, 0,'');
INSERT INTO Menu VALUES('Small Pancake:','4', '', 'A La Carte', '', 0, 1, 0, 1, 0,'');
INSERT INTO Menu VALUES('Small Protein Pancake:','5', '', 'A La Carte', '', 0, 0, 0, 1, 0,'');
INSERT INTO Menu VALUES('Slice French toast:','3', '', 'A La Carte', '', 0, 1, 0, 1, 0,'');
INSERT INTO Menu VALUES('Slice Gluten Free French Toast:','3.50', '', 'A La Carte', '', 0, 1, 1, 1, 0,'');
INSERT INTO Menu VALUES('Hollandaise:','1.25', '', 'A La Carte', '', 0, 1, 0,1, 0,'');


INSERT INTO Salad_Dressing VALUES('Zinfandel' , '');
INSERT INTO Salad_Dressing VALUES('Blue Cheese' , '');
INSERT INTO Salad_Dressing VALUES('Ranch' , '');
INSERT INTO Salad_Dressing VALUES('Honey Mustard' , '');
INSERT INTO Salad_Dressing VALUES('Greek' , '');
INSERT INTO Salad_Dressing VALUES('Caesar' , '');

INSERT INTO Salad_Toppers VALUES('Chicken salad, tuna salad, grilled chicken:' , '4');
INSERT INTO Salad_Toppers VALUES('Coconut shrimp, Vegan Burger, Avocado Fries:' , '5');
INSERT INTO Salad_Toppers VALUES('Grass fed Steak tips:' , '9');
