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

