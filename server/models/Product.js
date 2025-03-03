/** @format */

const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Product = sequelize.define("Product", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true, // ✅ Mark as Primary Key
		autoIncrement: true, // ✅ Enable Auto Increment
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	purchasePrice: { type: DataTypes.FLOAT, allowNull: true }, // ✅ Ensure this exists
	sellingPrice: {
		type: DataTypes.FLOAT,
		allowNull: true, // Ensure it's not null
	},
	stock: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

module.exports = Product;
