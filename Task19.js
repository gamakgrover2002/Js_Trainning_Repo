// question change get to return least recently visited
class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.stack = {};
  }
  get = () => {
    if (this.stack[key]) {
      console.log(this.stack[key]);
    } else {
      console.log("Key does not exsist");
    }
  };
  put(key, value) {
    let keys = Object.keys(this.stack);
    if (keys === this.capacity) {
      console.log(-1);
    } else {
      this.stack[key] = value;
      console.log("added");
    }
  }
}
let cache = new LRU(2);
cache.put(1, 1);
cache.put(2, 2);
cache.put(1, 2);
cache.get(3);
