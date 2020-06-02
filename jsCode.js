let divMaker = htmlmaker('div')
let brMaker = htmlmaker('br')


function htmlmaker(tag) {
    let starttag = '<' + tag + '>';
    let endtag = '</'+ tag +'>';

    return function(content){
        return starttag + content + endtag
    }
}


basicInfo = {
    '이름' : '김선웅 ',
    '나이' : '친해지면 알려줄께요 ',
    '성별' : '사진을 보면 알수 있어요 ',
    '잘하는 것': '이것도 친해지면 알려줄래요 ',
}
let contant1 = "";

for(let i in basicInfo){
    contant1 += divMaker(i +' : '+ basicInfo[i])
}


let string1 ="";

let story = [
    '나를 둘러쌓은 모든 환경이 내 의지가 아니었던 때가 있었다. 아니 내 삶의 대부분은 어쩌면 내 것이 아니었다.',
    '나의 삶은 나의 부모님의 것이었고, 지금은 이름도 기억 안 나는 코치나 감독들 것이었으며,',
    '나를 진심으로 싫어했던 운동선수 시절의 동료들과, 나에게 기대를 걸던 단지 나를 아는 사람들 것이었다.',
    '그것은 내가 어렸을 때부터 2019년의 어느 날까지 너무 당연한 것이었다. ',
    '내 삶을 그렇게 방임한 죄로 지금은 내 것이 하나도 없는 그저 그런 아재가 되었나 보다.',
    "",
    '최근 죄(?!)를 뉘우치고, 어떻게 살아야 수 없이 많은 것들이 나 대신 내 삶을 결정하지 않을 수 있을지 생각하고 실천하는 중 이다.',
    "",
    '커리어 전환을 위해 프로그래밍에 공부만 중 이지 머리가 나빠서 고생하는 중....',
    '호기심이 많아 이것 저것 할 줄 아는 것이 많음',    "",
]
for(let k in story){
    string1 += brMaker(story[k])
}



document.getElementById('basicInfo').innerHTML = contant1;
document.getElementById('story1').innerHTML = string1;






