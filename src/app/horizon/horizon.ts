import { Injectable } from '@angular/core';
var Horizon = require('@horizon/client');

@Injectable()
export class HorizonService {

  public horizon: any;
  status: {} | Boolean = false;

  constructor() {
    this.connect();
  }

  connect() {     
    this.horizon = Horizon({ host: 'geek-developers-server.7c5d756b.svc.dockerapp.io:8081'});    
    return new Promise((resolve, reject)=> {
      this.horizon.onReady((status)=> {
        this.status = status;        
        resolve(status);
        
        /* 
        this.horizon("Tick").watch({rawChanges: true}).subscribe(e => {
              console.log(e);
          });
        */
        
      });      
      this.horizon.connect();            
    });        
  }    
}