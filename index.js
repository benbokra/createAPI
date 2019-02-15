//this is the new
const database = {
    1:{
        id: '1',
        name: 'product1',
        price: '10$',
        stock: '5',
        image: 'image here',
        description: 'this is the description of this product'
    },
    2:{
        id: '2',
        name: 'product2',
        price: '1144$',
        stock: '55',
        image: 'image here',
        description: 'this is the description of this product'
    },
    3:{
        id: '3',
        name: 'product3',
        price: '20$',
        stock: '10',
        image: 'image here',
        description: 'this is the description of this product'
    }
}
const express = require('express');
const app = express();
const port = 2500;

app.get('/', (req, res) => res.send('Hello World!'));

//this is get products for show all products
app.get('/products', (req, res) => {
    let keys = Object.keys(database);
    let valueObject = keys.map(function(key) {
        let = object = {
            name:database[key].name,
            price:database[key].price,
            image:database[key].image
        }
        return object;
    });
    res.send(valueObject);
});

app.get('/products/:id', (req, res) => {
    // show the products by id
    res.send(database[req.params.id]);
});

app.use(express.json());

app.post('/products/', function(req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let price = req.body.price;
    let stock = req.body.stock;
    let description = req.body.description;
    res.send(name + ' ' + image + ' ' + price);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));