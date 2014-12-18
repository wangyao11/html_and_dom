function countGarde() {
  var scorce = 0;
  var questions = Question.all();

  _.forEach(questions, function(question){
    var inputAnwser = document.getElementsByName(question.name);
    scorce += question.countScorce(inputAnwser);
  });

  document.getElementById('acount').value = scorce;

  return false;
}
