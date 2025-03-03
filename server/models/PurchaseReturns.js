/** @format */

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Product = require("./Product");

const PurchaseReturns = sequelize.define("PurchaseReturns", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	purchaseId: { type: DataTypes.INTEGER, allowNull: false },
	productId: { type: DataTypes.INTEGER, allowNull: false },
	quantity: { type: DataTypes.INTEGER, allowNull: false },
	reason: { type: DataTypes.STRING, allowNull: false },
	refundAmount: { type: DataTypes.FLOAT, allowNull: false },
});

// ✅ Establish association
PurchaseReturns.belongsTo(Product, { foreignKey: "productId" });

module.exports = PurchaseReturns;
