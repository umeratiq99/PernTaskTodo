const { Sequelize } = require("sequelize");
// Connection parameters
const sequelize = new Sequelize('testdb', 'postgres', 'admin123' , {
    dialect:'postgres'
})

//testing connection:-
const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
   const sq=sequelize
  module.exports=sq;
