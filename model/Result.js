
 module.exports = class Result{
    
    constructor(){
     this.id = '';
     this.status = '';
     this.success = false;
     this.codeError = 0;
     this.service = '';
     this.date =  new Date().toLocaleDateString(); 
     this.time = new Date().toLocaleTimeString();
     this.message = '';
     this.timeRequest = 0;
     this.data = {};
    }

    getId(){
       return this.id; 
    }

}

