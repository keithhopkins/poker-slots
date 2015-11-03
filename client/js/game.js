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

$(document).on('ready', function() {
  $.ajax({
    method: 'GET',
    // get current user?
  })
  .then(function(data){
    
  })
});

var Game = function(player){
  this.hand = [];
  this.player = player ? player : new Player();
  this.deck = deck;
};

// init
Game.prototype.init = function(){

};

// analyze hand
Game.prototype.analyzeHand = function () {
  switch (true){
    case royalFlush(this.hand): return 9;
    case straightFlush(this.hand): return 8;
    case straight(this.hand): return 4;
    case flush(this.hand): return 5;
    case fullHouse(this.hand): return 6;
    case fourOfAKind(this.hand): return 7;
    case threeOfAKind(this.hand): return 3;
    case contains2Pair(this.hand): return 2;
    case containsPair(this.hand): return 1;
    default: return 0;
  }
};

// payout
Game.prototype.payout = function (handValue, bet) {
  this.player.bank += handValue * bet;
};

// deal hand
Game.prototype.deal = function (num) {
  var deckCopy = this.deck.slice();
  if(num===undefined) {
    num = 5;
  }
  var hand = [];
  for(var i=0; i<num; i++){
    var index = Math.floor(Math.random()*deckCopy.length);
    hand.push(deckCopy.splice(index,1)[0]);
  }
  this.hand = hand;
};
