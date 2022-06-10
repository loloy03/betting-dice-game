//declaration
let win_quantity_p1 = 0;
let win_quantity_p2 = 0;
let round_quantity = 0;
let player_balance = 1000;
let betting_amount_p1 = 0;
let betting_amount_p2 = 0;

function betting_p1() {
  betting_amount_p1 = prompt("Put your betting amount in Player 1: ");
  betting_amount_p1 = parseInt(betting_amount_p1);
  if (betting_amount_p1 > player_balance) {
    alert("Not enough balance");
  } else if (betting_amount_p1 === null) {
    alert("Put some bet(s)!");
  } else {
    player_balance -= betting_amount_p1;
    document.getElementById("bet-p1").innerHTML = "Bet: $" + betting_amount_p1;
    document.getElementById("balance").innerHTML =
      "Balance: $" + player_balance;
    return betting_amount_p1;
  }
}
function betting_p2() {
  betting_amount_p2 = prompt("Put your betting amount in Player 2: ");
  betting_amount_p2 = parseInt(betting_amount_p2);
  if (betting_amount_p2 > player_balance) {
    alert("Not enough balance");
  } else {
    player_balance -= betting_amount_p2;
    document.getElementById("bet-p2").innerHTML = "Bet: $" + betting_amount_p2;
    document.getElementById("balance").innerHTML =
      "Balance: $" + player_balance;
    return betting_amount_p2;
  }
}

//function for getting random number
function playagain() {
  //increment the round
  round_quantity++;
  document.getElementById("rounds").innerHTML = "Round: " + round_quantity;

  //function for creting a random number 1-6
  function randomnumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  //function for changing the dice image in player 1
  function changedice_player1(random) {
    if (random === 1) {
      document.getElementById("player1-dice").src = "dice1.png";
      document.getElementById("dice-value-p1").innerHTML =
        "Dice value: " + random;
    } else if (random === 2) {
      document.getElementById("player1-dice").src = "dice2.png";
      document.getElementById("dice-value-p1").innerHTML =
        "Dice value: " + random;
    } else if (random === 3) {
      document.getElementById("player1-dice").src = "dice3.png";
      document.getElementById("dice-value-p1").innerHTML =
        "Dice value: " + random;
    } else if (random === 4) {
      document.getElementById("player1-dice").src = "dice4.png";
      document.getElementById("dice-value-p1").innerHTML =
        "Dice value: " + random;
    } else if (random === 5) {
      document.getElementById("player1-dice").src = "dice5.png";
      document.getElementById("dice-value-p1").innerHTML =
        "Dice value: " + random;
    } else {
      document.getElementById("player1-dice").src = "dice6.png";
      document.getElementById("dice-value-p1").innerHTML =
        "Dice value: " + random;
    }
    return random;
  }

  //function for changing the dice image in player 2
  function changedice_player2(random) {
    if (random === 1) {
      document.getElementById("player2-dice").src = "dice1.png";
      document.getElementById("dice-value-p2").innerHTML =
        "Dice value: " + random;
    } else if (random === 2) {
      document.getElementById("player2-dice").src = "dice2.png";
      document.getElementById("dice-value-p2").innerHTML =
        "Dice value: " + random;
    } else if (random === 3) {
      document.getElementById("player2-dice").src = "dice3.png";
      document.getElementById("dice-value-p2").innerHTML =
        "Dice value: " + random;
    } else if (random === 4) {
      document.getElementById("player2-dice").src = "dice4.png";
      document.getElementById("dice-value-p2").innerHTML =
        "Dice value: " + random;
    } else if (random === 5) {
      document.getElementById("player2-dice").src = "dice5.png";
      document.getElementById("dice-value-p2").innerHTML =
        "Dice value: " + random;
    } else {
      document.getElementById("player2-dice").src = "dice6.png";
      document.getElementById("dice-value-p2").innerHTML =
        "Dice value: " + random;
    }
    return random;
  }

  //function for checking who will win
  function who_win(p1, p2) {
    if (p1 > p2) {
      win_quantity_p1++;
      document.getElementById("headering").innerHTML = "Player 1 win!";
      document.getElementById("dice-win-p1").innerHTML =
        "Wins : " + win_quantity_p1;
      player_balance = player_balance + betting_amount_p1;
      document.getElementById("balance").innerHTML =
        "Balance: $" + player_balance;
    } else if (p1 < p2) {
      win_quantity_p2++;
      document.getElementById("headering").innerHTML = "Player 2 win!";
      document.getElementById("dice-win-p2").innerHTML =
        "Wins : " + win_quantity_p2;
    } else {
      document.getElementById("headering").innerHTML = "Draw!";
    }
    betting_amount_p1 = 0;
    document.getElementById("bet-p1").innerHTML = "Bet: $" + betting_amount_p1;
    betting_amount_p2 = 0;
    document.getElementById("bet-p2").innerHTML = "Bet: $" + betting_amount_p2;
  }
  who_win(
    changedice_player1(randomnumber()),
    changedice_player2(randomnumber())
  );
}
