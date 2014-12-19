function MultipleChoice(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

MultipleChoice.prototype = Object.create(Question.prototype);
MultipleChoice.prototype.constructor = MultipleChoice;

MultipleChoice.prototype.calculateScorce = function (inputElement) {

  var value = [];

  _.forEach(inputElement,function(select){
    if(select.checked) {
      value.push(select.value);
    }
  });

  return this.rightAnswer.toString() === value.toString() ? this.scorce : 0;
};
