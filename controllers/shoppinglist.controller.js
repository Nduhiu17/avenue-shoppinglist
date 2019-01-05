const shoppingList = require('../models/shoppingList.model.js');

// Create and Save a new shoppingList
// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    // if(!req.body.name) {
    //     return res.status(400).send({
    //         message: "Shoppinglist name can not be empty"
    //     });
    // };
    
    // if(!req.body.price) {
    //     return res.status(400).send({
    //         message: "Shoppinglist price can not be empty"
    //     });
    // };

    // if(!req.body.quantity) {
    //     return res.status(400).send({
    //         message: "Shoppinglist quantity can not be empty"
    //     });
    // };

    // if(!req.body.status) {
    //     return res.status(400).send({
    //         message: "Shoppinglist status can not be empty"
    //     });
    // }
    
    

       // Create a shoppingList
    const shoppingList = new shoppingList({
    name: req.body.name || "Untitled shoppingList", 
    price: req.body.price,
    quantity: req.body.quantity,
    done: req.body.done
});
    
}

// // Save shoppingList in the database
//  shoppingList.save()
//  .then(data => {
//      res.send(data);
//  }).catch(err => {
//      res.status(500).send({
//          message: err.message || "Some error occurred while creating the shoppingList."
//      });
//  });

    

// Retrieve and return all shoppingLists from the database.
exports.findAll = (req, res) => {
    shoppingList.find()
    .then(shoppingLists => {
        console.log("lllllllllppppppppppppccc");
        
        res.send(shoppingLists);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shoppingLists."
        });
    });
    
};


// // Find a single shoppingList
// exports.findOne = (req, res) => {

// };

// // Update a shoppingList
// exports.update = (req, res) => {

// };

// // Delete a shoppingList
// exports.delete = (req, res) => {
// };