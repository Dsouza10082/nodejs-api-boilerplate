var cluster = require('cluster');
const numCPUs = require('os').cpus().length;


exports.executeLoop = function(data){
  return new Promise(resolve=>{
   
    let toNumber = parseInt(data.to);
    let pos = toNumber;
    let name = data.name; 
    let message = ' finalizou  ';
    
    for(let i = 0;i<=toNumber;i++){
        //console.log('POS ' + i + ' ' + name); 
       if(pos == 0){
           console.log(name + " " + message);
           resolve(name + " " + message);
       } 
       pos--;
    }

  });
}
