const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./Event');

const RSVP = sequelize.define('RSVP', {
  userId: { type: DataTypes.STRING, allowNull: false },
});

Event.hasMany(RSVP, { as: 'attendees', foreignKey: 'eventId' });
RSVP.belongsTo(Event, { foreignKey: 'eventId' });

module.exports = RSVP;
