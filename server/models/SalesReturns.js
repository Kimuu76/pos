/** @format */

const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const SalesReturns = sequelize.define("SalesReturns", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	saleId: { type: DataTypes.INTEGER, allowNull: false },
	productId: { type: DataTypes.INTEGER, allowNull: false },
	quantity: { type: DataTypes.INTEGER, allowNull: false },
	refundAmount: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = SalesReturns;
