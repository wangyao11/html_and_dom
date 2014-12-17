function MultipleChoice(name, rightAnswer, scorce) {
  Question.call(this, name, rightAnswer, scorce);
}

MultipleChoice.prototype.countScorce = function (awnser) {

  var value = [];

  _.forEach(awnser,function(select){
    if(select.checked) {
      value.push(select.value);
    }
  });

  return this.rightAnswer.toString() === value.toString() ? 10 : 0;
};
