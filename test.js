function countGarde() {
  var acount = 0;

  acount += getCompletionCount('统一建模语言','1_1');
  acount += getCompletion2Count(['1_2_1','1_2_2','1_2_3'],['封装性','继承性','多态性']);
  acount += getChoiceCount('B','2_1');
  acount += getChoiceCount('A','2_2');

  acount += getMultipleChoiceCount(['A','B','D'],'3_1');
  acount += getMultipleChoiceCount(['A','B','C'],'3_2');

  acount += getChoiceCount('N','4_1');
  acount += getChoiceCount('Y','4_2');

  acount += getQuestionCount('模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、' +
        '事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。','5_1');

  document.getElementById('acount').value = acount;
}

function getCompletionCount(answer,id) {
  var count = 0;
  if (answer === document.getElementById(id).value) {
    count = 5;
  }
  return count;
}
function getChoiceCount(answer, name) {
  var selects = document.getElementsByName(name);
  var count = 0;
  var radioValue = null;

  _.forEach(selects,function(select){
    if (select.checked) {
      radioValue = select.value;
    }
  });
  if (answer === radioValue) {
    count = 10;
  }
  return count;
}

function getMultipleChoiceCount(answer, name) {
  var selects=document.getElementsByName(name);
  var count = 0;
  var selectValue= [];

  _.forEach(selects,function(select){
    if(select.checked) {
      selectValue.push(select.value);
    }
  });

  if (answer.toString() === selectValue.toString()) {
    count = 10;
  }
  return count;
}

function getQuestionCount(answer, id) {
  var count = 0;
  if (answer === document.getElementById(id).value) {
    count = 20;
  }
  return count;
}

function getCompletion2Count(input, corret) {
  var total = 0;
  var inputAnwsers = [];
  for (var j = 0; j < input.length; j++) {
    var inputAnwser = _.contains(inputAnwsers, document.getElementById(input[j]).value);
    if(!inputAnwser) {
      inputAnwsers.push(document.getElementById(input[j]).value);
    }
  }
  for (var i = 0; i < inputAnwsers.length; i++) {
    if(_.contains(corret, inputAnwsers[i])) {
      total += 5;
    }
  }
  return total;
}
