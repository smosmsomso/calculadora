class Calculadora {
  constructor(object) {
    this.target = object.target;
    this.displayPanel = object.display;
    this.keysList = object.keysList;
    this.typeList = object.typeList;
    this.submit = object.submit;
    this.clearBtt = object.clearBtt;

    this.calcType = [];

    this.load();
  }

  load() {
    this.keysList.on('click', handleKeyClick.bind(this));
    this.typeList.on('click', handleTypeClick.bind(this));
    this.submit.on('click', handleSubmit.bind(this));
    this.clearBtt.on('click', this.clear.bind(this));

    function handleKeyClick(e) {
      this.setDisplay(this.getData(e, 'data-key'));
    }

    function handleTypeClick(e) {
      let data = this.getData(e, 'data-type');

      this.setDisplay(data);
      this.calcType.push(data);
    }

    function handleSubmit() {
      let separations = this.calcType;
      let displayVal = this.getDisplay();

      for (const val of displayVal) {
        if (!(val in separations)) {
          alert(val);
        }
      }

      this.calcType = [];
    }
  }

  getData(e, data) {
    return $(e.target).attr(data);
  }

  sum(array) {
    let sum = 0;

    array.forEach((val) => {
      sum += parseInt(val);
    });

    return sum;
  }

  subtraction(x, y) {
    return x - y;
  }

  division(x, y) {
    return x / y;
  }

  multiplication(x, y) {
    return x * y;
  }

  setDisplay(val) {
    this.displayPanel.val(this.displayPanel.val() + val);
  }

  getDisplay() {
    return this.displayPanel.val() && this.displayPanel.val();
  }

  clear() {
    return this.displayPanel.val() && this.displayPanel.val('');
  }
}
