class Calc {
  constructor() {
    this.prev = "";
    this.current = "0";
  }

  addDigit(num) {
    if(this.current === "0") {
      this.current = `${num}`;
      console.log("script.js----------", this.current)
    } else {
      this.current += `${num}`;
      console.log("script.js*********", this.current)
    }

    return this.current;
  }

  clear() {
    this.prev = "";
    this.current = "0";

    return {
      prev: this.prev,
      current: this.current
    }
  }

  sum(num) {
    return this.state += num;
  }

  sub(num) {
    return this.state -= num;
  }

  mul(num) {
    if(this.state) {
      return this.state *= num;
    } else {
      this.state = 1;
      return this.state *= num;
    }

  }

  diff(num) {
    this.state /= num;
  }
}

export default Calc;
