
var body = document.body;
var table = document.createElement('table');
var lines = [];
var boxes = [];

var funcNo1 = function(e) {
  console.log('내가 몇칸일까?'); //->줄
  console.log(e.target);    //클릭한 것이 console에 뜬다 --> 칸
  console.log(e.target.parentNode);   //클릭한 것 부모 태그 (상위) --> 줄
  console.log(e.target.parentNode.parentNode);  //-->테이블

  var lineLocation = lines.indexOf(e.target.parentNode);
  console.log('몇줄',Number(lineLocation) + 1);
  var boxLocation = boxes[lineLocation].indexOf(e.target);
  console.log('몇칸',boxLocation);
};
//input의 값이 value
//태그 안 글자는 textContent
if (boxes[lineLocation][boxLocation].textContent !== '') {
  console.log('빈칸이 아닙니다.');
} else {
  console.log('빈칸입니다.');
  boxes[lineLocation][boxLocation].textContent !== 턴;
  if (턴 === 'X') {
    턴 = '0';
  } else {
    턴 = 'X';
  }
}

for (var i = 1; i <= 3; i += 1) {
    var line = document.createElement('tr');
    lines.push(line);
    boxes.push([]);
    for (var j = 1; j <= 3; j += 1) {
        var box = document.createElement('td');
        box.addEventListener('click', funcNo1)
        boxes[i - 1].push(box);
        line.appendChild(box);
    }
    table.appendChild(line);
}
body.appendChild(table);

console.log(boxes);
