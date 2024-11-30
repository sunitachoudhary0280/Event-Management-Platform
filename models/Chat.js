const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./Event');

const Chat = sequelize.define('Chat', {
  user: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
});

Event.hasMany(Chat, { as: 'chat', foreignKey: 'eventId' });
Chat.belongsTo(Event, { foreignKey: 'eventId' });

module.exports = Chat;
