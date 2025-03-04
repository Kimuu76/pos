/** @format */

require("dotenv").config();
const { Sequelize } = require("sequelize");

// Initialize Sequelize with environment variables or defaults
const sequelize = new Sequelize(
	process.env.DB_NAME || "sql7765861",
	process.env.DB_USER || "sql7765861",
	process.env.DB_PASSWORD || "PWjTgtM14U",
	{
		host: process.env.DB_HOST || "sql7.freesqldatabase.com",
		dialect: "mysql",
		port: process.env.DB_PORT || 3306,
		logging: false,
	}
);

// Import models
const Product = require("./Product");
const Purchase = require("./Purchases");
const Sales = require("./Sales");
const SalesReturns = require("./SalesReturns");
const PurchaseReturns = require("./PurchaseReturns");
const Supplier = require("./Supplier");
const Company = require("./Company");

// ✅ Define relationships
Product.hasMany(Sales, { foreignKey: "productId", onDelete: "CASCADE" });
Sales.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(Purchase, { foreignKey: "productId", onDelete: "CASCADE" });
Purchase.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(SalesReturns, { foreignKey: "productId", onDelete: "CASCADE" });
SalesReturns.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(PurchaseReturns, {
	foreignKey: "productId",
	onDelete: "CASCADE",
});
PurchaseReturns.belongsTo(Product, { foreignKey: "productId" });

Supplier.hasMany(Purchase, { foreignKey: "supplierId", onDelete: "CASCADE" });
Purchase.belongsTo(Supplier, { foreignKey: "supplierId" });

// Export models and sequelize instance
module.exports = {
	Sales,
	Product,
	Purchase,
	Supplier,
	SalesReturns,
	PurchaseReturns,
	Company,
	sequelize,
};
