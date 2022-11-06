    let diceText = document.getElementById("diceText");
    let dice = document.getElementById("dice");
    let scoreTab = document.getElementById("scoreTab");
    let rolls = [];
    let scoreHeaders = ' <tr> <th> rzut </th> <th> wynik</th> </tr>';

    function newRoll()
    {
        var roll = rollDice();
        if(diceText.hidden == false)
        {
            hideText(true);
            showDice("inline");
        }
        
        rolls.push(roll);
        dice.src = "./dice" + roll + ".jpg" ;
        scores(roll);
    }

    function scores(roll)
    {
        rowNumber = rolls.length
        row = scoreTab.insertRow(rowNumber);

        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);

        cell0.innerHTML =rowNumber;
        cell1.innerHTML=roll;
    }

    function rollDice()
        { return  Math.floor(Math.random()*6) + 1; }

    function hideText(statment)
        { diceText.hidden = statment ; }
    function showDice(display)
        {dice.style.display= display;}
    function clearScore()
        {scoreTab.innerHTML= scoreHeaders}

    function whipeBoard()
    {
        hideText(false);
        showDice("none");
        dice.src="#";
        clearScore();
        rolls = [];
    }
