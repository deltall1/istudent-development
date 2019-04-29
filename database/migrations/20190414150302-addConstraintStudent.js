"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("Students", ["id"], {
        type: "foreign key",
        name: "FK_Students_id",
        references: {
          table: "Users",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("Students", ["city"], {
        type: "foreign key",
        name: "FK_Students_city",
        references: {
          table: "Cities",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint("Students", "FK_Students_id"),
      queryInterface.removeConstraint("Students", "FK_Students_city")
    );
  }
};
