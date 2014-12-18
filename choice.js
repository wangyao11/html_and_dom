function Choice(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

Choice.prototype = Object.create(Question.prototype);
Choice.prototype.constructor = Choice;

Choice.prototype.countScorce = function (answer) {
  var radio = _.find(answer, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.rightAnswer === radioValue ? this.scorce : 0;
};
