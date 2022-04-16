class Calc {
  constructor() {
    this.prev = "";
    this.current = "0";
    this.isOperation = "";
  }

  addDigit(num) {
    if(this.isOperation) {
      this.current = `${num}`
      this.isOperation = "";
      return this.current;
    }

    if(this.current === "0") {
      this.current = `${num}`;
    } else {
      this.current += `${num}`;
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

  sum() {
    if(this.prev) {
      this.current = +this.current + +this.prev;
      this.prev = this.current;
      this.isOperation = "+";
    } else {
      this.prev = this.current;
      this.isOperation = "+";
    }

    return {
      prev: this.prev,
      current: this.current
    };
  }

  sub() {
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
