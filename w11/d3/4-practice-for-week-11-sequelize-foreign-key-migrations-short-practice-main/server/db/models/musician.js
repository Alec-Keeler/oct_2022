'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Your code here
      Musician.belongsTo(models.Band, {foreignKey: 'bandId'})

      // SELECT * FROM Musicians JOIN Bands ON (Musicians.bandId = Bands.id)
      // Musician.findAll()

      Musician.belongsToMany(models.Instrument, {
        through: 'MusicianInstrument',
        foreignKey: 'musicianId',
        otherKey: 'instrumentId'
      })
      // FROM Musicians
      // JOIN MusicianInstrument ON (Musicians.id = MusicianInstrument.musicianId)
      // JOIN Instruments ON (MusicianInstrument.instrumentId = Instruments.id)
    }
  };
  Musician.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Musician',
  });
  return Musician;
};