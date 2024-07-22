class Promise {
  constructor(onresolved, onrejected) {
    this.status = "pending";
    this.value = null;
    this.hadler = [onresolved, onrejected];
  }

  resolve = (val) => {
    if (this.status === "pending") {
      this.status = "resolved";
      this.value = val;
      console.log(this.value);
    }
  };
  reject = () => {
    this.status = "rejected";
    console.log("rejected");
  };
  then = (onresolved, onrejected) => {
    if (this.status === "resolved") {
      onresolved();
    } else if (this.status === "rejected") {
      onrejected();
    } else {
      console.log("Invalid Parameters");
    }
  };
}
let promise = new Promise(
  () => {
    console.log("resolved");
  },
  () => {
    console.log("rejected");
  }
);
promise.resolve(10);
promise.then(
  () => {
    console.log("accept");
  },
  () => {
    console.log("reject");
  }
);
