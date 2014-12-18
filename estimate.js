function Estimate(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

Estimate.prototype = Object.create(Question.prototype);
Estimate.prototype.constructor = Estimate;

Estimate.prototype.countScorce = function (answer) {
  var radio = _.find(answer, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.rightAnswer === radioValue ? this.scorce : 0;
};
