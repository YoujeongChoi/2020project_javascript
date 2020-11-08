var 바디 = document.body;

var 단어 = document.createElement('div');
단어.textContent = '최유정'
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
document.body.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력';
document.body.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', fuction (이벤트) {
  이벤트.preventDefault();
  console.log(결과,입력창.value);
  if (단어.textContent[단어.textContent.length - 1] === Numebr(입력창.value[0])) {
    결과창.textContent = '딩동댕';
    단어.textContent = 입력창.value;
    입력창.vaule = '';
    입력창.focus();
  } else {
    결과창.textContent = '땡';
    입력창.value = '';
    입력창.focus();
  }
});

// fuction 더하기(숫자1, 숫자2) {
//   console.log(숫자1 + 숫자2);
// }
// 더하기(3,5)


//반복문(while문)을 이벤트리스너로 대체
// 버튼.addEventListener('click', function() {
//   if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
//     alert('딩동댕')
//   } else {
//     alert('땡')
//   }
// });

//.textContent vs .value

// var word = '제로초'
// while (true) {
//     var answer = prompt(word);
//     if (word[word.length - 1] === answer[0]) {
//         alert('딩동댕')
//         word = answer;
//     } else {
//         alert('땡');
//     }
// }
