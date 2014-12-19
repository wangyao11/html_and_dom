function Question(name, rightAnswer, scorce){
  this.name = name;
  this.rightAnswer = rightAnswer;
  this.scorce = scorce;
}
Question.all = function(){
  return getQuestions();
};

Question.prototype.calculateScorce = function () {

};
