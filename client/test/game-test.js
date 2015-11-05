var should = chai.should();
// var expect = chai.expect();



describe('game', function(){
    var player = new Player("Ganesh");
    var game = new Game(player);

    it('should have an empty arr for hand', function(){
        (game.hand).should.eql([]);
        (game.hand.length).should.eql(0);
    });

    it('should have player property', function(){
        (game.player).should.be.a('object');
    });

    it('should have deck property', function(){
        (game.deck).should.be.a('array');
        (game.deck.length).should.equal(52);
    });
});


describe('analyze hand', function(){
    var player = new Player("Ganesh");
    var game = new Game(player);

    it('should return 9 for royal flush', function(){
        game.hand = royalFlushHand;
        game.analyzeHand().should.equal(9); 
    });

    it('should return 8 for straight flush', function(){
        game.hand = straightFlushHand;
        game.analyzeHand().should.equal(8); 
    });

    it('should return 7 for four of a kind', function(){
        game.hand = fourOfAKindHand;
        game.analyzeHand().should.equal(7); 
    });

    it('should return 6 for full house', function(){
        game.hand = fullHouseHand;
        game.analyzeHand().should.equal(6); 
    });

    // it('should return 5 for flush', function(){
    //     game.hand = flushHand;
    //     game.analyzeHand().should.equal(5); 
    // });

it('should return 4 for straight', function(){
        game.hand = straightHand;
        game.analyzeHand().should.equal(4); 
    });

it('should return 3 for three of a kind', function(){
        game.hand = threeOfAKindHand;
        game.analyzeHand().should.equal(3); 
    });

it('should return 2 for two pair', function(){
        game.hand = twoPairHand;
        game.analyzeHand().should.equal(2); 
    });

it('should return 1 for a pair', function(){
        game.hand = pairHand;
        game.analyzeHand().should.equal(1); 
    });

});

describe('deal', function(){
    var player;
    var game;

    beforeEach(function(done){
        player = new Player("Ganesh");
        game = new Game(player);
        done();
    });

    it('should deal 5 cards', function(){
        (game.hand).should.eql([]);
        game.deal();
        (game.hand.length).should.eql(5);
        (game.hand[0]).should.be.a('object');
    });

    it('should not deal same hand twice', function(){
        (game.hand).should.eql([]);
        game.deal();
        var handOne = game.hand;
        game.deal();
        var handTwo = game.hand;
        var testSimilar = checkSimilar(handOne, handOne);
        var isSimilar = checkSimilar(handOne, handTwo);

        (testSimilar).should.eql(true);
        (isSimilar).should.eql(false);
    });

    it('should not deal duplicate card', function(){
        (game.hand).should.eql([]);
        game.deal();
        var hasDup = checkHandDup(dupHand);
        var hasDup2 = checkHandDup(game.hand);
        (hasDup).should.eql(true);
        (hasDup2).should.eql(false);
        (game.hand[0]).should.be.a('object');
    });


});

describe('payout', function(){
    var player;
    var game;
    
    beforeEach(function(done){
        player = new Player("Ganesh");
        game = new Game(player); 
        done(); 
    });

    it('should not increase bank with losing hand', function(){

        (game.player.bank).should.eql(500);
        game.payout(0, 50);
        (game.player.bank).should.eql(500);

    });

    it('should increase bank with winning hand by factor of hand weight', function(){

        (game.player.bank).should.eql(500);
        game.payout(2, 50);
        (game.player.bank).should.eql(650);
        game.payout(5, 10);
        (game.player.bank).should.eql(710);

    });

});

describe('bet', function(){
    var player = new Player("Ganesh");
    var game = new Game(player);

    it('should decrease player bank', function(){

        (game.player.bank).should.eql(500);
        game.bet();
        (game.player.bank).should.eql(490);
        game.bet(40);
        (game.player.bank).should.eql(450);

    });

});


// ** Helper functions ** //

function checkSimilar(handOne, handTwo){
    var count = 0;
    var isSimilar = false;
    
    for (var i = 0; i < handOne.length; i++) {
        for (var j = 0; j < handTwo.length; j++) {
            if (handOne[i] === handTwo[j]) {
                count ++;
            }
        }
    }
        if(count > 3) { return true; }
        return false;
}

function checkHandDup(hand) {
    var copy = hand.slice();
    for (var i = 0; i < copy.length; i) {
        var curr = copy[i];
        copy.splice(i, 1);
        var test = copy.filter(function(card){
            return card.code === curr.code;
        }).length;
        if (test > 0){ return true; }

    }
    return false;
}

