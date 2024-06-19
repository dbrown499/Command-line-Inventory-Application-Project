const inform = console.log;
const { create, indexOfAllFruit, showOneFruit, updateFruitInfo, destroyFruits, cart, cancelCart } = require('./src/fruitController');
const { readJSONFile, writeJSONFile } = require('./src/helper');


function run() {
    const action = process.argv[2];
    const nameOffruit = process.argv[3];
    const price = process.argv[4];
    const stockValue = process.argv[5]
    let data = readJSONFile("./data", "data.json");
    let writeToFile = false;
    let theUpdatedFruitsList = [];



    switch (action) {
        case "index":
            const veiwFruits = indexOfAllFruit(data);
            inform(veiwFruits);
            break;
        case "create":
            theUpdatedFruitsList = create(data, nameOffruit, price, stockValue);
            writeToFile = true;
            break;
        case "show":
            inform(showOneFruit(data, nameOffruit));
            break;
        case "update":
            theUpdatedFruitsList = updateFruitInfo(data, nameOffruit, 99, "priceInCents");
            writeToFile = true;
            break;
        case "destroy":
            theUpdatedFruitsList = destroyFruits(data, nameOffruit);
            writeToFile = true;            
            break;
        case "cart":
            inform(cart(data, nameOffruit));
            break;
        case "cancel":
            inform(cancelCart());
            break;
        default:
            inform("There was an error.");
    }
    if (writeToFile) {
        writeJSONFile('./data', 'data.json', theUpdatedFruitsList);
    }
}
run();
