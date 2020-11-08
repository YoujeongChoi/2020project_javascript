var 바디 = document.body;

var 숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var 숫자배열 = [];

for (var i = 0; i < 4; i+= 1){
  //0~8중 랜덤 숫자 자리부터 1개를 뽑음 & splice는 특성상 배열을 반환하기 때문에 뒤에 [0] 붙여준다 - 배열의 첫번째 숫자 가져오기 위함
  var 뽑은 것 = 숫자후보.splice(Math.floor(Math.random( ) * 9), 1)[0];
  //변수/.pop() : 뒤에서 부터 하나씩 뽑아냄
  //변수.push() : 앞에서부터 하나씩 넣음
  숫자배열.push(뽑은것);
}

var 결과 = document.createElement('h1');
바디.append(결과);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
입력창.type = 'number';
입력창.maxlength = 4;
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);

//새로고침- submit의 기본동작 -- 새로고침 끄기 위해 preventDefault
폼.addEventListener('submit', function(event) {
  event.preventDefault();
  var 답 = 입력창.value;
  console.log(답, 숫자배열, 답 === 숫자배열.join);
  if (답 === 숫자배열) {
    결과.textContent = '홈런';
    입력창.value = '';
    입력창.focus();
  } else {
    var 답배열 = 답.split('');
    var 스트라이크 = 0;
    var 볼 = 0;
    for (var i = 0; i < 3; i+= 1) {
      if (답배열[i] === 숫자배열[i]) {
        스트라이크 += 1;
      } else if (숫자배열 [i].indexOf(답배열[i]))
    }
  }
})
