const product2 = {
    name: 'shift',
    'delivery-time': '1 day',
    rating: {
        stars: 4.8,
        count: 500
    },
    fun: function function1() {
        console.log('This product is fun.');
    }
}

console.log(typeof console.log);
product2.fun();
JSON.stringify(product2)
console.log(JSON.stringify(product2));


const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString))
