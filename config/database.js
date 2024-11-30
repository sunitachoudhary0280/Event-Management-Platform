import { Sequelize } from 'sequelize';  // Using import instead of require

// Create a new Sequelize instance
const sequelize = new Sequelize(
  'event-management',  // Replace with your actual database name
  'postgres',       // Replace with your actual database username
  'yourpassword',       // Replace with your actual database password
  {
    host: 'localhost',
    dialect: 'postgres',  // or 'postgres', 'sqlite', 'mssql' depending on your DB
  }
);

export { sequelize };  // Export the sequelize instance to be used in models
