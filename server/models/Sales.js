/** @format */

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Product = require("./Product");

const Sales = sequelize.define("Sales", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	productId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	productName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	sellingPricePerUnit: { type: DataTypes.FLOAT, allowNull: false }, // ✅ Selling Price
	totalAmount: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
});

Sales.belongsTo(Product, { foreignKey: "productId" }); // ✅ Sales belongs to a product

module.exports = Sales;
