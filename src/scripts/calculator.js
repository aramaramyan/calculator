class Calculator {
  constructor(num) {
    this.state = 0;
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

export default Calculator;
