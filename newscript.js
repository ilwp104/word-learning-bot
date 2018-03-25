$(function () {
    let textVal;
    let $p;
    let $ans;
    let n = 0;
    let learn;
    let word;
    let mean;
    let wordArr;
    let meanArr;
    let wordCount;


    // 첫 메세지 얘가 하기.
    setTimeout(function() {
        $ans = $('<tr><td><div class="ans_box"><p class="ans">' + "안녕하세요~" + '</p></div></td></tr>');
        $('.box>table').append($ans);
        $(".textBox").scrollTop($(document).height());
    }, 300);


    // 입력 기능.
    $('.btn:not(.learn)').click(function () {
        textVal = $('input').val();
        $p = '<tr><td><div class="msg_box"><p class="msg">' + textVal + '</p></div></td></tr>';
        $('.box>table').append($p);
        $('input').val('');
        $(".textBox").scrollTop($(document).height());
        console.log(textVal);

        // 커멘드키 모음 (! *)
        if (textVal.includes('!') == true) {
            // 학습된 단어 목록 보여주기
            if ($('.learn').click != true) {
                if (textVal == '!목록') {
                    console.log('ㅎㄴㅇㅎㅁㄴㅇㅎㅁㄴㅇㅎ');
                    wordArr = Object.keys(command);
                    wordCount = Object.keys(command).length;
                    for (let n = 0; n < wordCount; n++) {
                        console.log(wordArr[n]);
                        $ans = '<tr><td><div class="ans_box"><p class="ans">' + wordArr[n] + '</p></div></td></tr>';
                        $('.box>table').append($ans);
                        $(".textBox").scrollTop($(document).height());
                    }
                }
            }
            // 단어 학습
            if (textVal == '!학습') {
                $('.learn').click();
            }
        }

        // 여기에 한글 합치는거 기능 만들기(es6책에 있는거 응용해서)


        // 입력한 문장중 학습된 단어가 있을 시 실행되는 기능.
        wordArr = Object.keys(command);
        meanArr = Object.values(command);
        wordCount = Object.keys(command).length;
        for (let n = 0; n < wordCount; n++) {
            if (textVal.includes('!') == false) {
                if (textVal.includes(wordArr[n]) == true) {
                    $ans = '<tr><td><div class="ans_box"><p class="ans">' + meanArr[n] + '</p></div></td></tr>';
                    console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGG')
                    console.log(meanArr[n]);
                    $('.box>table').append($ans);
                    $(".textBox").scrollTop($(document).height());
                }
            }
        }


        // 비어있는 상태로 엔터(버튼)를 누르면 입력 안되는 기능.
        if (textVal === "") {
            n;
            n = n + 1;
            console.log('err' + n);
            $('td').last().addClass('empty');
            $('.empty').remove();
        }

        // 한번 클릭 후 포커싱 풀기
        $('.btn:not(.learn)').blur();
    });

    // 단어 학습 기능.
    $('.learn').click(function () {
        $('input').focus();
        console.log('gg');
        $ans = '<tr class="Q_word"><td><div class="ans_box"><p class="ans">어떤 단어를 알려주실건가요?</p></div></td></tr>';
        $else = '<tr class="Q_word"><td><div class="ans_box"><p class="ans">빨리 알려주세요!!</p></div></td></tr>';

        // 학습.
        if ($('tr').last().hasClass('Q_word') == false) {
            $('.box>table').append($ans);
            $(".textBox").scrollTop($(document).height());
            $('.btn:not(.learn)').one('click', function () {
                if (textVal.includes('!') == true){
                    $ans = '<tr class="Q_word"><td><div class="ans_box"><p class="ans">그건 커멘드입니당. 저장 안돼요~</p></div></td></tr>';
                    $('.box>table').append($ans);
                    $(".textBox").scrollTop($(document).height());
                } else {
                    // 단어 저장.
                    word = textVal;
                    console.log(word);

                    // 단어의 뜻 입력.
                    $ans = '<tr class="Q_word"><td><div class="ans_box"><p class="ans">무슨 뜻인가요?</p></div></td></tr>';
                    $('.box>table').append($ans);
                    $(".textBox").scrollTop($(document).height());
                    $('.btn:not(.learn)').one('click', function () {
                        // 뜻 저장.
                        mean = textVal;
                        console.log(mean);

                        // 객체에 저장하기!!!!
                        command[word] = mean;
                        console.log(command);

                        $(".textBox").scrollTop($(document).height());
                    })
                    n++;
                }
            });
        } else {
            $('.box>table').append($else);
        }

        $(".textBox").scrollTop($(document).height());

        // 한번 클릭 후 포커싱 풀기
        $('.learn').blur();

    });



    // 엔터키 == button 클릭.
    $('input[name=input]').keydown(function (event) {
        if (event.keyCode == 13) {
            $('.btn:not(.learn)').click();
        }
    });
});
