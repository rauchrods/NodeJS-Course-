const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.on("event", () => {
      console.log("event triggered");
    });
  }
}


const emitter = new MyCustomEmitter();

emitter.emit("event");