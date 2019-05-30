"use strict";
module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define(
        "Company",
        {
            name: DataTypes.STRING,
            link: DataTypes.STRING
        },
        {}
    );
    Company.associate = function(models) {
        Company.belongsToMany(models.User, {
            through: models.Recruiter,
            foreignKey: "companyID"
        });
    };
    return Company;
};