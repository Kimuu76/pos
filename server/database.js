/** @format */

require("dotenv").config(); // Load .env file

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "mssql",
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	dialectOptions: {
		options: {
			encrypt: true, // Set to false if using local SQL Server without SSL
			trustServerCertificate: true, // Required for self-signed certificates
		},
	},
	logging: false,
});

module.exports = sequelize;

/** @format 

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "mssql",
	host: process.env.DB_HOST || "localhost",
	port: process.env.DB_PORT || 1433, // Default SQL Server port
	username: process.env.DB_USER || "sa",
	password: process.env.DB_PASSWORD || "yourStrong(!)Password",
	database: process.env.DB_NAME || "your_database",
	dialectOptions: {
		options: {
			encrypt: true, // Set to false if using local SQL Server without SSL
			trustServerCertificate: true, // Required for self-signed certificates
		},
	},
	logging: false,
});

module.exports = sequelize;*/

/** @format 

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite", // Ensure this path is correct
	logging: false, // Disable logging for cleaner console output
});

module.exports = sequelize;*/
