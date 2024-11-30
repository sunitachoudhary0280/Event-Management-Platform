import { Sequelize, DataTypes } from 'sequelize';  
import { sequelize } from '../config/database.js';  

const Event = sequelize.define('Event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false
  }


}, {
  tableName: 'events',   
  timestamps: true   
});

export default Event;   
