const Item = require('../models/item.model.js');

// Create & Save a new item
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a item
    const item = {
	  name: req.body.name,
    }

    // Create and Save a new Item
    Item.create(item)
	   .then(data =>{
	      res.send(data);
         })
        .catch(err => {
	     res.status(500).send({
  message: 
err.message || "Some error occured while  creating the Item."
     });
   });
    };

// Retrieve all items from the database
exports.findAll = (req, res) => {
    Item.findAll(req, res)
	   .then(data => {
     res.send(data);
   })
   .catch(err => {
	res.status(500).send({
		message: 
err.message || "Some error occured while  creating the Item."
});
   });
};

// Find a single item with a id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Item.findByPk(id)
	   .then(data => {
     if(data) {
    res.send(data);
} else {
    res.status(404).send({
       message: `Cannot find Item with id=${id}.`
    });
}
   })
   .catch(err => {
	res.status(500).send({
    message: "Error retrieving Item with id=" + id
});
   });
};

// Update a item identified by the id in the request
exports.update = (req, res) => {
const id = req.params.id;

Item.update(req.body,{
	where: { id: id }
})    
	.then(num => {
	   if(num == 1) {
   	res.send({
   message: "Item was updated successfully"
});
   } else {
	res.send({
	   message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
});
   }	
})
.catch(err => {
   res.status(500).send({
 message: "Error updating Item with id=" + id
});


});


// Delete a item with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Item.destroy({
       where: { id: id } 
    })
    .then(num => {
	  if(num == 1) {
	res.send({
    message:"Item was deleted successfully."
});
       } else {
		res.send({
		    message: `Cannot delete Item with id=${id}.     Maybe Item was not found.`
});
  }
    })
    .catch(err => {
	  res.status(500).send({
message: "Could not delete Item with id=" + id
  })
    });
};
}
