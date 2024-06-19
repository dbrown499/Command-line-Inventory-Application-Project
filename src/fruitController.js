const { nanoid } = require('nanoid');

function indexOfAllFruit(fruitData) {
    return fruitData.map((fruit) => fruit.name + ":" + ` $${(fruit.priceInCents / 100)} ${!fruit.inStock ? 'OUT OF STOCK' : ''}`);
}

function create(fruits, fruitName, price, stockNum) {
    const fruit = {
        "id": nanoid(5),
        "name": fruitName,
        "priceInCents": price,
        "inStock": false
    };

    if (stockNum > 0) {
        fruit.inStock = true;
    };

    fruits.push(fruit);

    return fruits;
}

function showOneFruit(fruitData, fruitName) {
    let fruitFound = fruitData.find(fruit => fruit.name === fruitName);
    return fruitFound.name + ":" + ` $${(fruitFound.priceInCents / 100)} ${!fruitFound.inStock ? 'OUT OF STOCK' : ''}`

}

function updateFruitInfo(fruitData, fruitName, newInfo, nameOfKey) {
    let fruitFound = fruitData.find(fruit => fruit.name === fruitName);

    for (let k in fruitFound) {
        if (k === nameOfKey) {
            fruitFound[nameOfKey] = newInfo;
        }
    }

    return fruitData;
}



module.exports = { create, indexOfAllFruit, showOneFruit, updateFruitInfo }