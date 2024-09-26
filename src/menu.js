let menu = document.createElement('div');
menu.classList.add('menu-content');

let breads = [];
let pastries = [];
let cakes = [];
let cookies = [];
addItem(breads, 'Breads:');
addItem(breads, 'Sourdough Bread');
addItem(breads, 'Whole Wheat Bread');
addItem(breads, 'Rye Bread');
addItem(breads, 'Focaccia');
addItem(breads, 'Ciabatta');

addItem(pastries, 'Pastries:')
addItem(pastries, 'Croissant');
addItem(pastries, 'Danish Pastry');
addItem(pastries, 'Eclair');
addItem(pastries, 'Baklava');
addItem(pastries, 'Cinnamon Roll');

addItem(cakes, 'Cakes:');
addItem(cakes, 'Chocolate Cake');
addItem(cakes, 'Vanilla Bean Cake');
addItem(cakes, 'Carrot Cake');
addItem(cakes, 'Red Velvet Cake');
addItem(cakes, 'Lemon Drizzle Cake');

addItem(cookies, 'Cookies:')
addItem(cookies, 'Chocolate Chip Cookies');
addItem(cookies, 'Oatmeal Raisin Cookies');
addItem(cookies, 'Peanut Butter Cookies');
addItem(cookies, 'Macarons');
addItem(cookies, 'Sugar Cookies');

let categories = []
categories.push(breads);
categories.push(pastries);
categories.push(cakes);
categories.push(cookies);

categories.forEach((category) => {
    let category_card = document.createElement('div');
    category_card.classList.add('category-card');
    category.forEach((item) => {
        let item_name = document.createElement('p');
        item_name.textContent = item;
        category_card.appendChild(item_name);
    })
    console.log(category_card);
    menu.appendChild(category_card);
})

function addItem(heading, item) {
    heading.push(item);
}
export { menu };

// Sure! Here’s a delightful bakery menu featuring a variety of items, organized into different categories.

// # **Bakery Menu**

// ## **Breads**
// 1. **Sourdough Bread**  
//    - A tangy, crusty loaf made with natural fermentation.
   
// 2. **Whole Wheat Bread**  
//    - Nutritious and hearty, perfect for sandwiches.

// 3. **Rye Bread**  
//    - Dense and flavorful, with a hint of caraway.

// 4. **Focaccia**  
//    - Italian flatbread, topped with olive oil and herbs.

// 5. **Ciabatta**  
//    - Rustic bread with a crispy crust and soft interior.

// ## **Pastries**
// 1. **Croissant**  
//    - Flaky and buttery, a classic French pastry.

// 2. **Danish Pastry**  
//    - Sweet and layered, often filled with fruit or cream cheese.

// 3. **Eclair**  
//    - Choux pastry filled with cream and topped with chocolate.

// 4. **Baklava**  
//    - Rich, sweet pastry layered with nuts and honey syrup.

// 5. **Cinnamon Roll**  
//    - Soft dough rolled with cinnamon and sugar, topped with icing.

// ## **Cakes**
// 1. **Chocolate Cake**  
//    - Moist and rich, layered with chocolate frosting.

// 2. **Vanilla Bean Cake**  
//    - Classic vanilla flavor, perfect for any occasion.

// 3. **Carrot Cake**  
//    - Spiced cake with grated carrots and cream cheese frosting.

// 4. **Red Velvet Cake**  
//    - Distinctive red color with a hint of cocoa and cream cheese icing.

// 5. **Lemon Drizzle Cake**  
//    - Zesty and refreshing, topped with a sweet lemon glaze.

// ## **Cookies**
// 1. **Chocolate Chip Cookies**  
//    - Chewy and loaded with chocolate chips.

// 2. **Oatmeal Raisin Cookies**  
//    - Heartfelt cookies with oats and plump raisins.

// 3. **Peanut Butter Cookies**  
//    - Rich and nutty, with a classic crisscross pattern.

// 4. **Macarons**  
//    - Delicate French meringue cookies with various fillings.

// 5. **Sugar Cookies**  
//    - Soft and sweet, often decorated with icing.

// ## **Muffins**
// 1. **Blueberry Muffins**  
//    - Bursting with fresh blueberries and topped with a crumbly streusel.

// 2. **Banana Nut Muffins**  
//    - Moist muffins packed with ripe bananas and walnuts.

// 3. **Chocolate Muffins**  
//    - Decadent chocolate muffins with a rich flavor.

// 4. **Lemon Poppy Seed Muffins**  
//    - Zesty muffins filled with lemon flavor and crunchy poppy seeds.

// 5. **Pumpkin Spice Muffins**  
//    - Fall-inspired muffins with warm spices and pumpkin puree.

// Feel free to mix and match or customize any items for your bakery menu!