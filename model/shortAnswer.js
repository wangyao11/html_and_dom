function ShortAnswer(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

ShortAnswer.prototype = Object.create(Question.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.calculateScorce = function (answer) {
  var string;
  for (var i = 0; i < answer.length; i++) {
    string = answer[i].value;
  }
  return this.rightAnswer === string ? this.scorce : 0;
};
