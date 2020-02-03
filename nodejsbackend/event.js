event=require('events');
emitter= new event.EventEqmitter();

var connectHandler = function connected() {
    console.log('connection succesful.');
   
    // Fire the data_received event 
    emitter.emit('data_received');
 }
 emitter.on('newListener',function(){console.log("New listener")})
 // Bind the connection event with the handler
 emitter.on('connection', connectHandler);
  
 // Bind the data_received event with the anonymous function
 emitter.on('data_received', function() {
    console.log('data received succesfully.');
 });
 
 
 //emitter.listeners('data_received')[0]()
 
 // Fire the connection event 
 emitter.emit('connection');
 
 console.log("Program Ended.");