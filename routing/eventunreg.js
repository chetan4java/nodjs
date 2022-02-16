
const events= require("events");

//create instance of eventEmitter class

const ev = new events.EventEmitter();

//register event 
var callbackFun=(datas)=>{
    console.log("this is my event " +datas) }
 
ev.on('my_event',callbackFun );


ev.off('my_event',callbackFun ); // this gives no ouput at all 

//raise event

ev.emit('my_event',"i am data from event ")
ev.emit('my_event',"i am data from event ")

//_________________________________________________________
 