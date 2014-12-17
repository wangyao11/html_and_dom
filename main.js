function countGarde() {
  var scorce = 0;
  var questions = Question.all();

  _.forEach(questions, function(question){
    var anwser = document.getElementsByName(question.name);
    scorce += question.countScorce(anwser);
  });

  document.getElementById('acount').value = scorce;

  return false;
}
