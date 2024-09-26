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
addItem(cakes, 'Pineapple Cake');

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