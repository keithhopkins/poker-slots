var should = chai.should();
// var expect = chai.expect();



describe('game', function(){
    
    var game = new Game({});

    it('should have an empty arr for hand', function(){
        (game.hand).should.eql([]);
        (game.hand.length).should.eql(0);
    });

    it('should have player property', function(){
        (game.player).should.be.a('object');
        (game.hand.length).should.eql(0);
    });


});

