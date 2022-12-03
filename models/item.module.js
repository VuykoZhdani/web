const Sequelize = require("sequelize");
const db = require("./db.js");

const Item = db.define("item", {
	name: {
  type: Sequelize.STRING
},
});

Item.sync().then( () => {
  console.log("Drop and re-sync db.");
});

module.exports = Item;
Item.sync({force: true}).then( () => {
    console.log("Drop and re-sync db.");
  });