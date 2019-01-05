const shoppinglists = require('../controllers/shoppinglist.controller.js');



module.exports = (app) => {

    // Create a new shoppinglist
    // app.post('/shoppinglist', shoppinglists.create);

    // Retrieve all shoppinglists
    // console.log(shoppinglists.findAll());
    
    // app.get('/shoppinglist', shoppinglists.findAll());
    app.get('/',(req, res, next)=> {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhh");

        res.send("we are live")
        next()
    } );

    // Retrieve a single shoppinglist
    app.get('/shoppinglist/:shoppinglistId', shoppinglists.findOne);

    // Update a shoppinglists
    // app.put('/shoppinglist/:shoppinglistId', shoppinglists.update);

    // Delete a shoppinglist
    // app.delete('/shoppinglist/:shoppinglistId', shoppinglists.delete);
}