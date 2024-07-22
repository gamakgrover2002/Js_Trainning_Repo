// add asterik functionality
// Event Emitter class
class eventEmitter {
  // constructor for event emitter
  constructor() {
    this.store = [];
  }
  // function for turning event on
  on(event, callback) {
    this.store.push([event, callback]);
    console.log("on");
  }
  // function for event emit
  emit = (event, ...args) => {
    let isEvent = false;
    this.store.forEach(([e, callback]) => {
      if (e === event) {
        callback(...args);
        isEvent = true;
      }
    });
    if (!isEvent) {
      console.log("No such event");
    }
  };
  // function for event off
  off = (event) => {
    this.store = this.store.filter(([storeevent, callback]) => {
      event = storeevent;
    });
    console.log("off");
  };
}

event = new eventEmitter();
console.log("h1");
event.on("*", (name, name2) =>
  console.log(`detected click ${name} and ${name2}`)
);
console.log("h2");
event.emit("click2", "cde", "abc");
event.emit("click1", "cde", "abc");
console.log("h3");
event.off("*");
console.log("h4");
event.emit("click", "cde", "abc");
