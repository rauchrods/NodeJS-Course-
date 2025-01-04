const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("event", () => {
    console.log("event triggered");
});

emitter.emit("event");