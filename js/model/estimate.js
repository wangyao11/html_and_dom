function Estimate(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

Estimate.prototype = Object.create(Question.prototype);
Estimate.prototype.constructor = Estimate;

Estimate.prototype.calculateScorce = function (inputElement) {
  var radio = _.find(inputElement, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.rightAnswer === radioValue ? this.scorce : 0;
};
