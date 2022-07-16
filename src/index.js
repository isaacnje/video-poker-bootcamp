'use strict'
var points;
var button;

//creating the page
const main = document.getElementById("main");
const draw = document.createElement('button');
const table = document.createElement('div');
const textNode = document.createTextNode("Hello there!");
table.appendChild(textNode);
main.appendChild(table);
main.appendChild(draw);


var draw_button = document.querySelector("#draw");
var keep1       = document.querySelector("#keep1");
var keep2       = document.querySelector("#keep2");
var keep3       = document.querySelector("#keep3");
var keep4       = document.querySelector("#keep4");
var keep5       = document.querySelector("#keep5");

var hand = [  
  { rank: 2, suit: 'hearts',    name: '2' },
  { rank: 2, suit: 'diamonds',  name: '2' },
  { rank: 5, suit: 'spades',    name: '5' },
  { rank: 6, suit: 'spades',    name: '6' },
  { rank: 7, suit: 'clubs',     name: '7' },
];


calcHandScore(hand);


/**
 * Calculates score from the player's hand.
 * @param {object[]} hand an array of card objects
 * @returns the score calculated from the hand.
 */
function calcHandScore(hand) {
  var score;
  hand.forEach(card => {
    console.log(card.rank);
  });
  return 1;
}