var should = chai.should();


describe('player', function(){
    var player = new Player("Ganesh");


    it('should have player property', function(){
        (player).should.be.a('object');
        (player.bank).should.equal(500);
        (player.name).should.be.a('string');
        (player.name).should.eql('Ganesh');
    });


});