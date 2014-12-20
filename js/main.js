function countGarde() {
  var requiredInputs = [
  {
    id: 'className',
    text: '班级'
  },
  {
    id: 'studentNumber',
    text: '学号'
  },
  {
    id: 'studentName',
    text: '姓名'
  }
  ];

  if (hasEmptyRequiredInput(requiredInputs)) {
    alert('请检查并填写必填信息！');
    return false;
  }
  var score = 0;
  var questions = Question.all();

  _.forEach(questions, function(question){
    var inputElement = document.getElementsByName(question.name);
    score += question.calculateScorce(inputElement);
  });

  document.getElementById('score').value = score;

  return false;
}

function hasEmptyRequiredInput(inputs) {
  var hasEmpty = false;

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var element = document.getElementById(input.id);
    if (element) {

      if (_.isEmpty(element.value)) {
        $('#' + input.id).parent().parent().addClass('has-error');
        hasEmpty = true;
      }
    }
  }

  return hasEmpty;
}
