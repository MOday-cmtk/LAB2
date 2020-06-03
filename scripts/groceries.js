	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "Vegan cookies",
		vegetarian: false,
		glutenFree: false,
		Vegan: true,
		Organic: false,
		price: 2.99
	},
	{
		name: "chicken breast",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Organic: false,
		price: 4.99
	},
	{
		name: "chicken thighs",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Organic: false,
		price: 3.99
	},
	{
		name: "Eggplant",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		Vegan: false,
		Organic:false,
		price: 0.99
	},
	
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: false,
		price: 2.00
	},
	{
		name: "burger",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Organic: false,
		price: 2.99
	},
	{
		name: "burger bread",
		vegetarian: false,
		glutenFree: false,
		Vegan: true,
		Organic: false,
		price: 1.99
	},
	{
		name: "cucumber",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		Vegan: true,
		Organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Orgnanic: false,
		price: 10.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegan") && (prods[i].Vegan == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}