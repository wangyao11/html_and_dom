function ShortAnswer(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

ShortAnswer.prototype = Object.create(Question.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.calculateScorce = function (inputElement) {
  var string;
  for (var i = 0; i < inputElement.length; i++) {
    string = inputElement[i].value;
  }
  return this.rightAnswer === string ? this.scorce : 0;
};
