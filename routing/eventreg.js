
const events= require("events");

//create instance of eventEmitter class

const ev = new events.EventEmitter();

//register event 
ev.on('my_event',(datas)=>{
    console.log("this is my event " +datas) });

//raise event

ev.emit('my_event',"i am data from event ")
ev.emit('my_event',"i am data from event ")

//_________________________________________________________
//register event 
ev.on('my_event2',(data1,data2,data3)=>{
    console.log(`this is my event ${data1} , ${data2}, ${data3}`)
})

//raise event


ev.emit('my_event2','1 data','2 data','3 data')
ev.emit('my_event2','3 data','4 data','5 data')

//______________________________________________________________________________
//register event 
ev.once('my_eventonce',(data1,data2,data3)=>{
    console.log(`this is my eventONCE  ${data1} , ${data2}, ${data3}`)
})

//raise event

//ev.once allowd to call only first 
ev.emit('my_eventonce','1 data','2 data','3 data')
ev.emit('my_eventonce','3 data','4 data','5 data')
