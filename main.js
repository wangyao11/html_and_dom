function countGarde() {
  var scorce = 0;
  var questions = Question.all();

  _.forEach(questions, function(question){
    var inputElement = document.getElementsByName(question.name);
    scorce += question.calculateScorce(inputElement);
  });

  document.getElementById('acount').value = scorce;

  return false;
}
