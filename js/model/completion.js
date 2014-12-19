function Completion(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

Completion.prototype = Object.create(Question.prototype);
Completion.prototype.constructor = Completion;

Completion.prototype.calculateScorce = function (inputElement) {
  var scorce = 0;
  var answers = [];

  _.forEach(inputElement, function(array) {
    answers.push(array.value);
  });

  _this = this;
  _.forEach(this.rightAnswer, function(array) {
    if(_.contains(answers, array)) {
      scorce += _this.scorce;
    }
  });
  return scorce;
};
