function containsPair(hand){
  for(var i=0;i<hand.length;i++){
    for(var k=i+1;k<hand.length;k++){
      //first condition checks if 2 cards in the hand have the same value
      //second condition ensures that we aren't checking the same card
      if(hand[i].weight===hand[k].weight){
        return true;
      }
    }
  }
  return false;
}

//checks for 2 pair
function contains2Pair(hand){
  var tempHand = hand.slice();
  if (containsPair(hand)){//checks if the hand has a pair, if it does go and remove the pair cards
    var i=0;
    while(i<tempHand.length){
      for(var k=0;k<tempHand.length;k++){
        //first condition checks if 2 cards in the hand have the same value
        //second condition ensures that we aren't checking the same card
        if(tempHand[i].weight===tempHand[k].weight&&tempHand[i].name!==tempHand[k].name){
          //remove the 2 cards from our tempHand
          tempHand.splice(i,1);
          i=tempHand.length+1;
          tempHand.splice(k-1,1);
          break;
        }
      }
      i++;
    }
    if(containsPair(tempHand)){
      return true;
    }
  }
  return false;
}

//checks for a 3 of a kind
function threeOfAKind(hand){
  for (var i=0;i<hand.length;i++){
    for(var k=i+1;k<hand.length;k++){
      if(hand[i].weight===hand[k].weight){  //checks if 2 cards are the same
        for (var j=k+1;j<hand.length;j++){  //moves to check if any of the rest of the cards match the pair
          if(hand[i].weight===hand[j].weight){
            return true;
          }
        }
      }
    }
  }
  return false;
}

//checks for a 4 of a kind
function fourOfAKind(hand){
  for (var i=0;i<hand.length;i++){
    for (var k=i+1;k<hand.length;k++){
      if(hand[i].weight===hand[k].weight){  //checks if 2 cards are the same
        for (var j=k+1;j<hand.length;j++){  //moves to check if any of the rest of the cards match the pair
          if (hand[i].weight===hand[j].weight){
            for (var p=j+1;p<hand.length;p++) {  //checks to see if the remaining cards match the 3 of a kind
              if (hand[i].weight===hand[p].weight){
                return true;
              }
            }
          }
        }
      }
    }
  }
}

//checks for a full house
function fullHouse(hand){
  if(threeOfAKind(hand)){
    var tempHand = hand.slice();
    var i = 0;
    while (i<tempHand.length){
      var j = i+1;
      while (j<tempHand.length){
        if (tempHand[i].name===tempHand[j].name){
          for (var k=j+1;k<tempHand.length;k++){
            if(tempHand[i].name===tempHand[k].name){
              tempHand.splice(i,1);
              tempHand.splice(j-1,1);
              tempHand.splice(k-2,1);
              j+=100;
              i+=100;
              if (containsPair(tempHand)){
                return true;
              }//three of a kind has been removed, much check if remaining cards are a pair
              break;
            }
          }
        }
        j++;
      }
      i++;
    }
  }
  return false;
}

// checks for a flush
function flush(hand){
  for(var i=0;i<hand.length-1;i++){
    if(hand[i].suit===hand[i+1].suit){ //checks if the current card has the same suit as the next card
      if(i===hand.length-2){ //if its checking the last 2 cards returns true
        return true;
      }
    } else { //returns false if at any point 2 cards don't have the same suit
      return false;
    }
  }
}

//checks for a straight
function straight(hand){
  var tempHand = hand.slice();
  tempHand.sort(function (a, b){return a.weight - b.weight}); //sorts hand by card weight
  for(var i=0;i<tempHand.length-1;i++){
    //checks if the card to the right of this card is sequetial
    //special case: if the first card is an ace and the second is a 10 it is still true
    if(tempHand[i].weight+1===tempHand[i+1].weight||(tempHand[0].weight===1&&tempHand[1].weight===10)){
      if(i===hand.length-2){
        return true;
      }
    } else {
      return false;
    }
  }
}

//checks for straight flush
function straightFlush(hand){
  if (flush(hand)&&straight(hand)){
    return true;
  }
  return false;
}

//checks for royal flush
function royalFlush(hand){
  if(straightFlush(hand)){
    var tempHand=hand.slice();
    tempHand.sort(function (a, b){return a.weight - b.weight});
    if(tempHand[0].weight===1&&tempHand[1].weight===10){
      return true;
    }
  }
}
