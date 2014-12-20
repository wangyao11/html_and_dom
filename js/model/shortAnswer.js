function ShortAnswer(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

ShortAnswer.prototype = Object.create(Question.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.calculateScorce = function (inputElement) {
  var string;
  _.forEach(inputElement, function(array){
    string = array.value;
  });

  return this.rightAnswer === string ? this.scorce : 0;
};
