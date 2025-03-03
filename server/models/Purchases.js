/** @format */

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Product = require("./Product");
const Supplier = require("./Supplier");

const Purchase = sequelize.define("Purchase", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

	// 🔥 Ensure the foreign key matches `Products.id` type
	productId: {
		type: DataTypes.INTEGER, // ✅ Change from STRING to INTEGER if Products.id is INTEGER
		allowNull: false,
		references: {
			model: Product,
			key: "id",
		},
		onDelete: "CASCADE", // ✅ Optional: Handle deletes
	},

	// ✅ Foreign key constraint for supplierId
	supplierId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Supplier,
			key: "id",
		},
		onDelete: "CASCADE",
	},

	quantity: { type: DataTypes.INTEGER, allowNull: false },
	pricePerUnit: { type: DataTypes.FLOAT, allowNull: false }, // ✅ Purchase Price
	totalAmount: { type: DataTypes.FLOAT, allowNull: false },
});

// ✅ Define Associations
Purchase.belongsTo(Product, { foreignKey: "productId" });
Purchase.belongsTo(Supplier, { foreignKey: "supplierId" });

module.exports = Purchase;

/** @format 

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Product = require("./Product");
const Supplier = require("./Supplier");

const Purchase = sequelize.define("Purchase", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	productId: { type: DataTypes.STRING, allowNull: false },
	supplierId: { type: DataTypes.INTEGER, allowNull: false },
	quantity: { type: DataTypes.INTEGER, allowNull: false },
	pricePerUnit: { type: DataTypes.FLOAT, allowNull: false }, // ✅ Purchase Price
	totalAmount: { type: DataTypes.FLOAT, allowNull: false },
});

// ✅ Define Associations
Purchase.belongsTo(Product, { foreignKey: "productId" });
Purchase.belongsTo(Supplier, { foreignKey: "supplierId" });

module.exports = Purchase;*/
