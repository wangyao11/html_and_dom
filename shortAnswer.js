function ShortAnswer(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

ShortAnswer.prototype.countScorce = function (answer) {
  var string;
  for (var i = 0; i < answer.length; i++) {
    string = answer[i].value;
  }
  return this.rightAnswer === string ? this.scorce : 0;
};
