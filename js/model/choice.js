function Choice(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

Choice.prototype = Object.create(Question.prototype);
Choice.prototype.constructor = Choice;

Choice.prototype.calculateScorce = function (inputElement) {
  var radio = _.find(inputElement, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.rightAnswer === radioValue ? this.scorce : 0;
};
