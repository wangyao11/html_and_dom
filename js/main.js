function countGarde() {
  var score = 0;
  var questions = Question.all();

  _.forEach(questions, function(question){
    var inputElement = document.getElementsByName(question.name);
    score += question.calculateScorce(inputElement);
  });

  document.getElementById('score').value = score;

  return false;
}
