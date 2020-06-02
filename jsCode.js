let divMaker = htmlmaker('div')
let spanMaker = htmlmaker('span')
let sectionMaker = htmlmaker('section')
let brMaker = htmlmaker('br')


function htmlmaker(tag) {
    let starttag = '<' + tag + '>';
    let endtag = '</'+ tag +'>';

    return function(content){
        return starttag + content + endtag
    }
}


basicInfo = {
    이름 : '김선웅 ',
    나이 : '친해지면 알려줄께요 ',
    성별 : '사진을 보면 알수 있어요 ',
    사는곳: '이것도 친해지면 알려줄래요 ',
}



let contant1 = "";


for(let i in basicInfo){
    contant1 += divMaker(i +' : '+ basicInfo[i])
}




let string1 ="";

let story = [
    '나를 둘러쌓은 모든 환경이 내 의지가 아니었던 때가 있었다. 아니 내 삶의 대부분은 어쩌면 내 것이 아니었다.',
    '나의 삶은 나의 부모님의 것이었고, 지금은 이름도 기억 안 나는 코치나 감독들 것이었으며,',
    '나를 진심으로 싫어했던 운동선수 시절의 동료들과 나에게 기대를 걸던 단지 나를 아는 사람들 것이었다.',
    '그것은 내가 어렸을 때부터 너무 당연한 것이었다. 2019년의 어느 날까지',
    '내 삶을 그렇게 방임한 죄로 지금은 내 것이 하나도 없는 그저 그런 아재가 되었나 보다.'
]
for(let k in story){
    string1 += brMaker(story[k])
}

let string2 ="";

let story2 = [
    '최근 죄(?!)를 뉘우치고, 어떻게 살아야 수없이 많은 것들이 나 대신 내 삶을 결정하지 않을 수 있을지 생각하고 실천하는 중이다.',
    "",

    '가장 먼저 타인의 시선과 잣대를 나의 기준과 동일시하지 않도록 했다. 나의 기준과 타인의 기준이 다른 것이 당연하다.',
    '남들이 좋다 생각하는 것은 내가 좋다 생각하는 것과 다르다. ',
    '부모님과 친인척들이 좋다고 생각하는 것과 내가 생각하는 것이 다른 것이 당연한 것이다',
    "",

    '두번째 내 삶의 방향이 바뀌도록 내버려 두지 않는 것이 내 삶의 주인이 되는 것이다.',
    '다른 것들이 내 삶과 내 목적을 바꾸도록 내버려 두지 말자. 좋아하는 것을 단지 마음대로 하는 것과',
    '내 삶의 주인이 되는 것은 완전히 별개의 문제다',
    "",

    '세번째 진정 좋아하는 것이 무엇인지 찾고 하나씩 실천하자. 그것이 비록 남들이 보기에 하찮아 보이더라도...',
    "",
    '\'세상을 보고 무수한 장애물을 넘어 벽을 허물고 더 가까이 다가가 서로 알아가고 ' +
    '느끼는 것. 그것이 바로 Life 의 목적이다\'',
    "--The Secret Life of Walter Mitty --",

    '마지막으로 많은 사람을 만나고 많은 관계를 가지고 많은 경험을 하며 더불어 살아가도록 노력하자',
     "",
    '그렇게 사람이 사람을 알아가기 위해 애쓰는 것, ',
    '이것이 \'The Quintessence of Life\'라고 나는 믿는다.'
]
for(let j in story2){
    string2 += brMaker(story2[j])
}


document.getElementById('basicInfo').innerHTML = contant1;
document.getElementById('story1').innerHTML = string1;
document.getElementById('story2').innerHTML = string2;





