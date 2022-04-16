class Calc {
  constructor() {
    this.prev = "";
    this.current = "0";
    this.sign = "";
    this.isOperation = false;
  }

  addDigit(num) {
    if(num === "." && this.current.includes(num)) {
      return;
    }

    if (this.isOperation) {
      this.isOperation = false;
      this.current = `${num}`
      return this.current;
    }

    if(num === "." && this.current === "0") {
      this.current = "0.";
    } else {
      this.current === "0" ? this.current = `${num}` : this.current += `${num}`;
    }

    return this.current;
  };

  clear() {
    this.prev = "";
    this.current = "0";
    this.sign = "";
    this.isOperation = false;

    return {
      prev: this.prev,
      current: this.current,
      sign: this.sign
    };
  };

  sum() {
    this.isOperation = true;

    this.prev ? this.calculating() : this.prev = this.current;

    this.sign = "+";

    return {
      prev: this.prev,
      current: this.current,
      sign: this.sign
    };
  };

  sub() {
    this.isOperation = true;

    this.prev ? this.calculating() : this.prev = this.current;

    this.sign = "-";

    return {
      prev: this.prev,
      current: this.current,
      sign: this.sign
    };
  };

  mul() {
    this.isOperation = true;

    this.prev ? this.calculating() : this.prev = this.current;

    this.sign = "*";

    return {
      prev: this.prev,
      current: this.current,
      sign: this.sign
    };
  }

  div() {
    this.isOperation = true;

    this.prev ? this.calculating() : this.prev = this.current;

    this.sign = "÷";

    return {
      prev: this.prev,
      current: this.current,
      sign: this.sign
    };
  }

  equal() {
    if(!this.prev) {
      return {
        prev: this.prev,
        current: this.current,
        sign: this.sign
      };
    } else {
      this.isOperation = true;

      this.calculating();

      this.sign = "";
      this.prev = "";

      console.log("*EQUAL*", "prev:", this.prev, "current:", this.current, "sign:", this.sign);

      return {
        prev: this.prev,
        current: this.current,
        sign: this.sign
      };
    }
  }

  calculating() {
    switch (this.sign) {
      case "+":
        this.current = String(+this.prev + +this.current);
        this.prev = this.current;
        break;
      case "-":
        this.current = String(+this.prev - +this.current);
        this.prev = this.current;
        break;
      case "*":
        this.current = String(+this.prev * +this.current);
        this.prev = this.current;
        break;
      default:
        this.current = (+this.prev / +this.current).toFixed(5);
        const result = this.current.split(".");
        if (result[1] === "00000") {
          this.current = result[0];
        }
        this.prev = this.current;
        break;
    }
  }

  deleteDigit() {
    this.current = this.current.split("");
    console.log(this.current)
    this.current.pop();
    this.current = this.current.join("");

    if(!this.current) {
      this.current = "0";
    }

    return this.current;
  }
}

export default Calc;
