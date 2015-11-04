var should = chai.should();
// var expect = chai.expect();

var deck =  [
    { code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
    { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
    { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
    { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
    { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"},
    { code: "&#x1F0A6", weight: 6, name: "Six of Spades", suit: "Spades"},
    { code: "&#x1F0A7", weight: 7, name: "Seven of Spades", suit: "Spades"},
    { code: "&#x1F0A8", weight: 8, name: "Eight of Spades", suit: "Spades"},
    { code: "&#x1F0A9", weight: 9, name: "Nine of Spades", suit: "Spades"},
    { code: "&#x1F0AA", weight: 10, name: "Ten of Spades", suit: "Spades"},
    { code: "&#x1F0AB", weight: 11, name: "Jack of Spades", suit: "Spades"},
    { code: "&#x1F0AD", weight: 12, name: "Queen of Spades", suit: "Spades"},
    { code: "&#x1F0AE", weight: 13, name: "King of Spades", suit: "Spades"},
    { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
    { code: "&#x1F0B2", weight: 2, name: "Two of Hearts", suit: "Hearts"},
    { code: "&#x1F0B3", weight: 3, name:"Three of Hearts", suit: "Hearts"},
    { code: "&#x1F0B4", weight: 4, name: "Four of Hearts", suit: "Hearts"},
    { code: "&#x1F0B5", weight: 5, name: "Five of Hearts", suit: "Hearts"},
    { code: "&#x1F0B6", weight: 6, name: "Six of Hearts", suit: "Hearts"},
    { code: "&#x1F0B7", weight: 7, name: "Seven of Hearts", suit: "Hearts"},
    { code: "&#x1F0B8", weight: 8, name: "Eight of Hearts", suit: "Hearts"},
    { code: "&#x1F0B9", weight: 9, name: "Nine of Hearts", suit: "Hearts"},
    { code: "&#x1F0BA", weight: 10, name: "Ten of Hearts", suit: "Hearts"},
    { code: "&#x1F0BB", weight: 11, name: "Jack of Hearts", suit: "Hearts"},
    { code: "&#x1F0BD", weight: 12, name: "Queen of Hearts", suit: "Hearts"},
    { code: "&#x1F0BE", weight: 13, name: "King of Hearts", suit: "Hearts"},
    { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C2', weight: 2, name: "Two of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C3', weight: 3, name: "Three of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C4', weight: 4, name: "Four of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C5', weight: 5, name: "Five of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C6', weight: 6, name: "Six of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C7', weight: 7, name: "Seven of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C9', weight: 9, name: "Nine of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0CA', weight: 10, name: "Ten of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0CB', weight: 11, name: "Jack of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0CD', weight: 12, name: "Queen of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0CE', weight: 13, name: "King of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'},
    { code:'&#x1F0D2', weight: 2, name:'Two of Clubs', suit:'Clubs'},
    { code:'&#x1F0D3', weight: 3, name:'Three of Clubs', suit:'Clubs'},
    { code:'&#x1F0D4', weight: 4, name:'Four of Clubs', suit:'Clubs'},
    { code:'&#x1F0D5', weight: 5, name:'Five of Clubs', suit:'Clubs'},
    { code:'&#x1F0D6', weight: 6, name:'Six of Clubs', suit:'Clubs'},
    { code:'&#x1F0D7', weight: 7, name:'Seven of Clubs', suit:'Clubs'},
    { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
    { code:'&#x1F0D9', weight: 9, name:'Nine of Clubs', suit:'Clubs'},
    { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'},
    { code:'&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
    { code:'&#x1F0DD', weight: 12, name:'Queen of Clubs', suit:'Clubs'},
    { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}
  ];

var junkHand = [
    { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
    { code:'&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
    { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'}, 
    { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
    { code: '&#x1F0C6', weight: 6, name: "Six of Diamonds", suit: 'Diamonds'}
];
var pairHand = [
    { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'},
    { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
    { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'}, 
    { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'}
    ];
var twoPairHand = [
    { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
    { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'}, 
    { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'}

    ];
var threeOfAKindHand = [    
    { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'},
    { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'}, 
    { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
    { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'}
    ];
var fourOfAKindHand = [
    { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}, 
    { code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
    { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
    { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'}
    ];
var straightHand = [
    { code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
    { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
    { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
    { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
    { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"}
    ];
var fullHouseHand = [
    { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
    { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
    { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
    { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'}

    ];
var flushHand = [
    { code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
    { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
    { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
    { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
    { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"}
    ];
var straightFlushHand = [
    { code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
    { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
    { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
    { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
    { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"}
    ];
var royalFlushHand = [
    { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'},
    { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'},
    { code:'&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
    { code:'&#x1F0DD', weight: 12, name:'Queen of Clubs', suit:'Clubs'},
    { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}
];



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


