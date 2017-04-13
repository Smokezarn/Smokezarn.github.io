rollDice = ->
  die1 = document.getElementById('die1')
  die2 = document.getElementById('die2')
  status = document.getElementById('status')
  d1 = Math.floor(Math.random() * 6) + 1
  d2 = Math.floor(Math.random() * 6) + 1
  diceTotal = d1 + d2
  die1.innerHTML = d1
  die2.innerHTML = d2
  status.innerHTML = 'You rolled ' + diceTotal + '.'
  if d1 == d2
    status.innerHTML += ' DOUBLES! You get a free turn!!'
  return