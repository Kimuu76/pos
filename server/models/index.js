/** @format */

require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT || "mssql",
		port: process.env.DB_PORT || 1433,
		logging: console.log, // Set to false to disable logs
		dialectOptions: {
			options: {
				encrypt: false, // Set to true if using Azure
				trustServerCertificate: true,
			},
		},
	}
);
const Product = require("./Product");
const Purchase = require("./Purchases");
const Sales = require("./Sales");
const SalesReturns = require("./SalesReturns");
const PurchaseReturns = require("./PurchaseReturns");
const Supplier = require("./Supplier");
const Company = require("./Company");

// ✅ Define relationships (Ensure correct order)
Product.hasMany(Sales, { foreignKey: "productId" });
Sales.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(Purchase, { foreignKey: "productId" }); // ✅ Fixed missing association
Purchase.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(SalesReturns, { foreignKey: "productId", onDelete: "CASCADE" });
SalesReturns.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(PurchaseReturns, { foreignKey: "productId" });
PurchaseReturns.belongsTo(Product, { foreignKey: "productId" });

// ✅ Supplier-Purchase Relationship
Supplier.hasMany(Purchase, { foreignKey: "supplierId" });
Purchase.belongsTo(Supplier, { foreignKey: "supplierId" });

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

/** @format 

require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT || "mssql",
		port: process.env.DB_PORT || 1433,
		logging: console.log, // Set to false to disable logs
		dialectOptions: {
			options: {
				encrypt: false, // Set to true if using Azure
				trustServerCertificate: true,
			},
		},
	}
);
const Product = require("./Product");
const Purchase = require("./Purchases");
const Sales = require("./Sales");
const SalesReturns = require("./SalesReturns");
const PurchaseReturns = require("./PurchaseReturns");
const Supplier = require("./Supplier");
const Company = require("./Company");

// ✅ Define relationships (Ensure correct order)
Product.hasMany(Sales, { foreignKey: "productId" });
Sales.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(Purchase, { foreignKey: "productId" }); // ✅ Fixed missing association
Purchase.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(SalesReturns, { foreignKey: "productId", onDelete: "CASCADE" });
SalesReturns.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(PurchaseReturns, { foreignKey: "productId" });
PurchaseReturns.belongsTo(Product, { foreignKey: "productId" });

// ✅ Supplier-Purchase Relationship
Supplier.hasMany(Purchase, { foreignKey: "supplierId" });
Purchase.belongsTo(Supplier, { foreignKey: "supplierId" });

module.exports = {
	Sales,
	Product,
	Purchase,
	Supplier,
	SalesReturns,
	PurchaseReturns,
	Company,
	sequelize,
};*/

/** @format 

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite", // SQLite file
});

const Product = require("./Product");
const Purchase = require("./Purchases");
const Sales = require("./Sales");
const SalesReturns = require("./SalesReturns");
const PurchaseReturns = require("./PurchaseReturns");
const Supplier = require("./Supplier");
const Company = require("./Company");

// ✅ Define relationships (Ensure correct order)
Product.hasMany(Sales, { foreignKey: "productId" });
Sales.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(Purchase, { foreignKey: "productId" }); // ✅ Fixed missing association
Purchase.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(SalesReturns, { foreignKey: "productId", onDelete: "CASCADE" });
SalesReturns.belongsTo(Product, { foreignKey: "productId" });

Product.hasMany(PurchaseReturns, { foreignKey: "productId" });
PurchaseReturns.belongsTo(Product, { foreignKey: "productId" });

// ✅ Supplier-Purchase Relationship
Supplier.hasMany(Purchase, { foreignKey: "supplierId" });
Purchase.belongsTo(Supplier, { foreignKey: "supplierId" });

module.exports = {
	Sales,
	Product,
	Purchase,
	Supplier,
	SalesReturns,
	PurchaseReturns,
	Company,
	sequelize,
};*/
