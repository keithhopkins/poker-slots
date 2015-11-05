var should = chai.should();
// var expect = chai.expect();




describe('contains pair function', function(){

    it('should return false for junk hand', function(){
        var result = containsPair(junkHand);
        (result).should.eql(false);
    });

    it('should return true for pair', function(){
        var result = containsPair(pairHand);
        (result).should.eql(true);
    });

});

describe('contains 2 pair function', function(){

    it('should return false for junk hand', function(){
        var result = contains2Pair(junkHand);
        (result).should.eql(false);
    });

    it('should return true for pair', function(){
        var result = contains2Pair(twoPairHand);
        (result).should.eql(true);
    });

});

describe('contains three of a kind function', function(){

    it('should return false for junk hand', function(){
        var result = threeOfAKind(junkHand);
        (result).should.eql(false);
    });

    it('should return true for three of a kind', function(){
        var result = threeOfAKind(threeOfAKindHand);
        (result).should.eql(true);
    });

});

describe('contains four of a kind function', function(){

    it('should return false for junk hand', function(){
        var result = fourOfAKind(junkHand);
        (result).should.eql(false);
    });

    it('should return true for three of a kind', function(){
        var result = fourOfAKind(fourOfAKindHand);
        (result).should.eql(true);
    });

});

describe('contains straight hand function', function(){

    it('should return false for junk hand', function(){
        var result = straight(junkHand);
        (result).should.eql(false);
    });

    it('should return true for a straight', function(){
        var result = straight(straightHand);
        (result).should.eql(true);
    });

});

describe('contains full house function', function(){

    it('should return false for junk hand', function(){
        var result = fullHouse(junkHand);
        (result).should.eql(false);
    });

    it('should return true for full house', function(){
        var result = fullHouse(fullHouseHand);
        (result).should.eql(true);
    });

});

describe('contains flush function', function(){

    it('should return false for junk hand', function(){
        var result = flush(junkHand);
        (result).should.eql(false);
    });

    it('should return true for flush house', function(){
        var result = flush(flushHand);
        (result).should.eql(true);
    });

});

describe('contains straight flush function', function(){

    it('should return false for junk hand', function(){
        var result = straightFlush(junkHand);
        (result).should.eql(false);
    });

    it('should return false for junk hand', function(){
        var result = straightFlush(straightHand);
        (result).should.eql(false);
    });

    it('should return true for straight flush', function(){
        var result = straightFlush(straightFlushHand);
        (result).should.eql(true);
    });

});

describe('contains royal flush function', function(){

    it('should return false for junk hand', function(){
        var result = royalFlush(junkHand);
        (result).should.eql(false);
    });

    it('should return true for royal flush house', function(){
        var result = royalFlush(royalFlushHand);
        (result).should.eql(true);
    });

});


