/** @format */

require("dotenv").config(); // Load .env file
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "mysql",
	host: process.env.DB_HOST || "sql8.freesqldatabase.com",
	port: process.env.DB_PORT || 3306,
	username: process.env.DB_USER || "sql8765782",
	password: process.env.DB_PASSWORD || "as5VGpWP7f",
	database: process.env.DB_NAME || "sql8765782",
	logging: false,
});

module.exports = sequelize;

/** @format 

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

module.exports = sequelize;*/
