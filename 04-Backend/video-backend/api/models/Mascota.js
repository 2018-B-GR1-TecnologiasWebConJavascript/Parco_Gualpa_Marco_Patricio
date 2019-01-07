/**
 * Mascota.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  atributes: {
    nombre: {
      type: 'string',
      required: true
    },
    mascotas: {
      model:'Raza' // Modelo Papa
    }
  },

};

