$(function(){

    $cell = $('tbody').children('tr:first').siblings().children()
    console.log( $cell );

    $cell.each(function(index, element) {
        $(element).on('click', function() {
            let selectDate = $(element).text();
            let selectMonth = $('#Month').text();
            //キャッシュ　が問題　コマンド＋シフト＋R
            let text = $('<div class="js"></div>').text(selectDate + 'th ' + selectMonth);
            text.insertAfter('table');

            console.log($('#selects > div:first'));
            let setSelects = $('#selects > div:first').text(selectDate + 'th ' + selectMonth);
            $('#selects').css('display', 'flex');
            console.log('できた！');
            
        });
    });









});