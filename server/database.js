/** @format */

require("dotenv").config(); // Load environment variables
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	process.env.DB_NAME || "sql3765794",
	process.env.DB_USER || "sql3765794",
	process.env.DB_PASSWORD || "EQL8y3SI7n",
	{
		host: process.env.DB_HOST || "sql3.freesqldatabase.com",
		dialect: "mysql",
		port: process.env.DB_PORT || 3306,
		logging: false,
		define: {
			freezeTableName: false, // ✅ Ensures Sequelize uses pluralized table names
		},
		dialectOptions: {
			// SSL options (if needed)
		},
	}
);

// Test the connection to ensure it works
sequelize
	.authenticate()
	.then(() => {
		console.log("Database connection successful.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});

module.exports = sequelize;
