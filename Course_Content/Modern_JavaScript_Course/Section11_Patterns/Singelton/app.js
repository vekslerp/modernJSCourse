const Singelton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singelton.getInstance();
const instanceB = Singelton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);