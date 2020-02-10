$(document).ready(function() {
    $(document).on('mousedown', '.button', function() {
        var source = $(this);
        var remove = 'btn_up';
        var add = 'btn_down';

        removeClassFunc(source, remove);
        addClassFunc(source, add);
    });
    $(document).on('mouseup', '.button', function(event) {
        var source = $(this);
        var remove ='btn_down';
        var add = 'btn_up';

        removeClassFunc(source, remove);
        addClassFunc(source, add);
        $('.dice').addClass('shake');
        var numArr = getNumbers();
        console.log(numArr);
        $('#instruct_score').text('Shake shake shake');
        setTimeout(function()
            {        
                diceImage(1, numArr[0]);
                diceImage(2, numArr[1]);
                $('.dice').removeClass('shake');
                $('#instruct_score').text(numArr[0] + numArr[1]);
            }, 1100);
        

    });

    var addClassFunc = function(element, add) {
        $(element).addClass(add)
    }

    var removeClassFunc = function(element, remove) {
        $(element).removeClass(remove);
    }

    var getNumbers = function() {
        var dice1 = Math.round(Math.random()*5)+1; // between 1 and 6
        var dice2 = Math.round(Math.random()*5)+1;

        var randArr = [dice1, dice2];
        return randArr;
    }
    var diceImage = function(dice_num, roll) {
        if(roll == 1 ) {
            $('#dice_' + dice_num + '11').css('visibility', 'hidden');
            $('#dice_' + dice_num + '21').css('visibility', 'hidden');
            $('#dice_' + dice_num + '31').css('visibility', 'hidden');
            $('#dice_' + dice_num + '22').css('visibility', 'visible');
            $('#dice_' + dice_num + '13').css('visibility', 'hidden');
            $('#dice_' + dice_num + '23').css('visibility', 'hidden');
            $('#dice_' + dice_num + '33').css('visibility', 'hidden');

        }
        if(roll == 2 ) {
            $('#dice_' + dice_num + '11').css('visibility', 'visible');
            $('#dice_' + dice_num + '21').css('visibility', 'hidden');
            $('#dice_' + dice_num + '31').css('visibility', 'hidden');
            $('#dice_' + dice_num + '22').css('visibility', 'hidden');
            $('#dice_' + dice_num + '13').css('visibility', 'hidden');
            $('#dice_' + dice_num + '23').css('visibility', 'hidden');
            $('#dice_' + dice_num + '33').css('visibility', 'visible');
        }
        if(roll == 3 ) {
            $('#dice_' + dice_num + '11').css('visibility', 'visible');
            $('#dice_' + dice_num + '21').css('visibility', 'hidden');
            $('#dice_' + dice_num + '31').css('visibility', 'hidden');
            $('#dice_' + dice_num + '22').css('visibility', 'visible');
            $('#dice_' + dice_num + '13').css('visibility', 'hidden');
            $('#dice_' + dice_num + '23').css('visibility', 'hidden');
            $('#dice_' + dice_num + '33').css('visibility', 'visible');
        }
        if(roll == 4 ) {
            $('#dice_' + dice_num + '11').css('visibility', 'visible');
            $('#dice_' + dice_num + '21').css('visibility', 'hidden');
            $('#dice_' + dice_num + '31').css('visibility', 'visible');
            $('#dice_' + dice_num + '22').css('visibility', 'hidden');
            $('#dice_' + dice_num + '13').css('visibility', 'visible');
            $('#dice_' + dice_num + '23').css('visibility', 'hidden');
            $('#dice_' + dice_num + '33').css('visibility', 'visible');
        }
        if(roll == 5 ) {
            $('#dice_' + dice_num + '11').css('visibility', 'visible');
            $('#dice_' + dice_num + '21').css('visibility', 'hidden');
            $('#dice_' + dice_num + '31').css('visibility', 'visible');
            $('#dice_' + dice_num + '22').css('visibility', 'visible');
            $('#dice_' + dice_num + '13').css('visibility', 'visible');
            $('#dice_' + dice_num + '23').css('visibility', 'hidden');
            $('#dice_' + dice_num + '33').css('visibility', 'visible');
        }
        if(roll == 6 ) {
            $('#dice_' + dice_num + '11').css('visibility', 'visible');
            $('#dice_' + dice_num + '21').css('visibility', 'visible');
            $('#dice_' + dice_num + '31').css('visibility', 'visible');
            $('#dice_' + dice_num + '22').css('visibility', 'hidden');
            $('#dice_' + dice_num + '13').css('visibility', 'visible');
            $('#dice_' + dice_num + '23').css('visibility', 'visible');
            $('#dice_' + dice_num + '33').css('visibility', 'visible');
        }
    }

})

