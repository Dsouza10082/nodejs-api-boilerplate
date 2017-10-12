
 module.exports = class Request{
    
    constructor(){
     this.companyId = "";
     this.service = "";
     this.day = getDay();
     this.month = getMonth();
     this.year = getYear();
     this.time = getTime();
    }

    getDay(){
      let date = new Date();
      return date.getUTCDate();
    }

    getMonth(){
      let date = new Date();
      return date.getUTCMonth() + 1;
    }

    getYear(){
      let date = new Date();
      return date.getUTCFullYear();
    }

    getTime(){
      let date = new Date();
      return date.getTime();
    } 

}

