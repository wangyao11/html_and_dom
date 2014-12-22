function countGarde() {

  var requiredInputs = [{
    id: 'className',
    text: '班级'
  }, {
    id: 'studentNumber',
    text: '学号'
  }, {
    id: 'studentName',
    text: '姓名'
  }];

  if (hasEmptyRequiredInput(requiredInputs)) {
    $('#myModal').modal('show');
    return false;
  }
  var score = 0;
  var questions = Question.all();

  _.forEach(questions, function(question) {
    var inputElement = $('[name=' + question.name + ']');
    score += question.calculateScorce(inputElement);
  });

  $('#score').val(score);
  return false;
}

function hasEmptyRequiredInput(inputs) {
  var hasEmpty = false;

  _.forEach(inputs, function(input) {
    var element = $('#' + input.id);
    if (element) {
      if (_.isEmpty(element.val())) {
        $('#' + input.id).parent().parent().addClass('has-error');
        hasEmpty = true;
      } else {
        $('#' + input.id).parent().parent().removeClass('has-error');
      }
    }
  });

  return hasEmpty;
}
