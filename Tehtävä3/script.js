// Kohta B 

const products = [
    { id: "P001", name: "Keyboard", price: 50, category: "Accessories" },
    { id: "P002", name: "Mouse", price: 20, category: "Accessories" },
    { id: "P003", name: "Monitor", price: 200, category: "Displays" },
    { id: "P004", name: "Laptop", price: 950, category: "Computers" },
    { id: "P005", name: "Webcam", price: 75, category: "Accessories" }
];

p => p.price > 50

const expensiveProducts = products.filter(p => p.price > 50);
console.log("Products over €50:", expensiveProducts.map(formatProduct));

const productNames = products.map(p => p.name);
console.log("Product names:", productNames);

const totalValue = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total value: €" + totalValue);

const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / products.length;
console.log("Average price: €" + averagePrice);

// Kohta C



function formatProduct(product) {
    return product.name + " - €" + product.price;
}

function getMostExpensiveProduct(products) {
    return products.reduce((most, p) => p.price > most.price ? p : most);
}

function calculateTotal(...prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}

console.log(formatProduct(products[0]));

const mostExpensive = getMostExpensiveProduct(products);
console.log("Most expensive product:", formatProduct(mostExpensive));

console.log("calculateTotal(10, 20, 30) =", calculateTotal(10, 20, 30));

const allPrices = products.map(p => p.price);
console.log("Total of all prices:", calculateTotal(...allPrices));


