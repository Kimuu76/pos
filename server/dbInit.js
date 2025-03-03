/** @format */

const sequelize = require("./database");
//const models = require("./models");
require("./models"); // Ensure models are loaded before syncing

const initDB = async () => {
	try {
		await sequelize.sync({ force: true }); // Updates schema without dropping data
		console.log("Database initialized successfully!");
	} catch (error) {
		console.error("DB Initialization Error:", error);
	} finally {
		await sequelize.close(); // Close connection after initialization
	}
};

initDB();

/** @format 

const sequelize = require("./database"); // Ensure this path is correct
const models = require("./models"); // Ensure models are loaded

const initDB = async () => {
	try {
		await sequelize.sync({ force: true }); // Reset database & recreate tables
		console.log("Database initialized successfully!");

		await sequelize.close(); // Close connection after initialization
	} catch (error) {
		console.error("DB Initialization Error:", error);
	}
};

initDB();*/
