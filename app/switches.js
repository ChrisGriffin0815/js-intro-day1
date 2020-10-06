// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if undefined. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {

    // let answer = 0
    // switch (day, offset) {
    //     case 'sunday' && true:
    //         answer = 7;
    //         break;
    //     case 'sunday' && undefined:
    //         answer = 1;
    //         break;
    //     case 'monday' && true:
    //         answer = 1;
    //         break;
    //     case 'monday' && undefined:
    //         answer = 2;
    //         break;
    //     case 'tuesday' && true:
    //         answer = 2;
    //         break;
    //     case 'tuesday' && undefined:
    //         answer = 3;
    //         break;
    //     case 'wednesday' && true:
    //         answer = 3;
    //         break;
    //     case 'wednesday' && undefined:
    //         answer = 4;
    //         break;
    //     case 'thursday' && true:
    //         answer = 4;
    //         break;
    //     case 'thursday' && undefined:
    //         answer = 5;
    //         break;
    //     case 'friday' && true:
    //         answer = 5;
    //         break;
    //     case 'friday' && undefined:
    //         answer = 6;
    //         break;
    //     case 'saturday' && true:
    //         answer = 6;
    //         break;
    //     case 'saturday' && undefined:
    //         answer = 7;
    //         break;
    //     default:
    //         answer = 'That"s not a day of the week'
    // }

    // return answer
}


// --------------------------------------------


/** 2. Given a both a score and a score for par && return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {
    //     switch (score, par)
    //     case score == 1:
    //         return ("Ace");
    //         break;
    //         case par - score == 2:
    //             return "Eagle";
    //             break;
    //         case par - score == 1:
    //             return "Birdie";
    //             break;
    //         case par - score == 0:
    //             return ("Par");
    //             break;
    //         case par - score == -1:
    //             return ("Bogie");
    //             break;
    //         case par - score == -2:
    //             return ("Double Bogie")
    //             break;
    //         case par - score ==  >= -3:
    //             return ("Ouch");
}


// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0

function cardCounter(card) {
    //         switch (card)
    // case card >= '2' && card <= '6':
    //             count++;
    //             break;
    //             case card >= '10' && card <= 'A'
    //     count--
    //         } if (count <= 0) {
    //             return (${ count } 'Hold')
    //         } else {
    //             return (${ count } 'Bet')
}
