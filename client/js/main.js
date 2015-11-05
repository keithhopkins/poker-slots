// add scripts

$(document).on('ready', function() {

    var game = new Game(new Player('test'));

    $('.bank').text(game.player.bank);

    function getHandIndex(num) {
        console.log(game.hand[num]);
        return game.hand[num].index;
    }

    var machine1 = $("#machine1").slotMachine({
        active	: 0,
        delay	: 500,
        randomize : function(){ //getHandIndex goes here.
            return getHandIndex(0);
        }
    });

    var machine2 = $("#machine2").slotMachine({
        active	: 1,
        delay	: 500,
        randomize : function(){ //getHandIndex goes here.
            return getHandIndex(1);
        }
    });

    var machine3 = $("#machine3").slotMachine({
        active	: 2,
        delay	: 500,
        randomize : function(){ //getHandIndex goes here.
            return getHandIndex(2);
        }
    });
    var machine4 = $("#machine4").slotMachine({
        active	: 3,
        delay	: 500,
        randomize : function(){ //getHandIndex goes here.
            return getHandIndex(3);
        }
    });
    var machine5 = $("#machine5").slotMachine({
        active	: 4,
        delay	: 500,
        randomize : function(){ //getHandIndex goes here.
            return getHandIndex(4);
        }
    });

    function onComplete(active){
        switch(this.element[0].id){
            case 'machine1':
                console.log('1 done');
                break;
            case 'machine2':
                console.log('2 done');
                break;
            case 'machine3':
                console.log('3 done');
                break;
            case 'machine4':
                console.log('4 done');
                break;
            case 'machine5':
                var score = game.analyzeHand();
                $('.handScore').text(score[1]);
                game.payout(score[0], game.player.currentBet);
                game.player.currentBet = 0;
                $('.bank').text(game.player.bank);
                break;
        }
    }

    $("#slotMachineButton1").click(function(){

        game.deal();

        game.player.currentBet = $('#bet').val();
        game.player.bank -= game.player.currentBet;
        $('#bet').val('');
        $('.bank').text(game.player.bank);
        machine1.shuffle(5, onComplete);


        setTimeout(function(){
            machine2.shuffle(5, onComplete);
        }, 500);

        setTimeout(function(){
            machine3.shuffle(5, onComplete);
        }, 1000);

        setTimeout(function(){
            machine4.shuffle(5, onComplete);
        }, 1500);

        setTimeout(function(){
            machine5.shuffle(5, onComplete);
        }, 2000);



    })

});
