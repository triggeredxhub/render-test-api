
const { Sequelize } = require("sequelize");
class SequelizeService {
  //copy env and fill the credentials
  constructor() {
    this.sequelize = new Sequelize('railway', 'root', 'KjIMYLVQdPkIjYVAveAlapKqwXrFHNwx',
      {
        host: "yamabiko.proxy.rlwy.net",
        port:17738,
        dialect: "mysql",
        
      }
    );
    
  }

  async authenticate() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return this.sequelize;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async close() {
    try {
      await this.sequelize.close();
      console.log("Connection has been closed successfully.");
    } catch (error) {
      console.log("Unable to close the connection:", error);
    }
  }
}

module.exports = SequelizeService;
