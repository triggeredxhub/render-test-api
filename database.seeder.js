const EMS_Users = require("./src/model/user_model");

const SequelizeService = require("./src/service/sequelize");

const seeder = async () => {
  const sequelize = new SequelizeService();
  await sequelize.authenticate();

  const models = [EMS_Users];

  for (const model of models) {
    try {
      await model.sync({});
      console.log(`${model.name} table synced successfully.`);
    } catch (error) {
      console.error(`Error syncing ${model.name} table:`, error.message);
    }
  }
};

seeder()
  .then(() => {
    console.log("Seeding completed.");
  })
  .catch((error) => {
    console.error("Seeding failed:", error.message);
  });
