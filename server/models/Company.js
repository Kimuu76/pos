/** @format */

const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Company = sequelize.define(
	"Company",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		secretKey: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "Companies", // ✅ Explicitly set the plural table name
		timestamps: false, // Optional: Removes createdAt & updatedAt
	}
);

module.exports = Company;
