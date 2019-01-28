/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  function emitirTemperatura(){
    setTimeout(
      ()=>{
        const temperatura= new Date().toTimeString();
        //console.log(temperatura);
        //emitirTemperatura();
        const url='http://localhost:1337/Temperatura';
        try{
          const respuesta = await axios({
            method:'post',
            url:url,
            data:{
              medicion: temperatura
            }
          });
        }catch (e) {
          console.log('Error');
        }
      },
      2000
    )
  }

};
