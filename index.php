<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<head>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/headTags.php"); ?>
        <title>Smash Up Randomizer</title>
        <meta name="description" content="Smash Up Randomizer">
</head>

<body>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/header.php"); ?>
        <div class="row" align="center">
            <h1>SmashUp Randomizer!</h1>
            <p>Choose the number of players and which expansion you are playing with.
                <br/> My group and I banned certain factions because of how broken it is so I've also included a ban list.</p>
            <div id="randomizeForm">
                <span id="numPlayer">Number of Players:</span>
                <select id="playerCount">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
                <br/>
                <div id="playerContent">Player 1 Name:
                    <input class="playerName" type="text" />
                </div>
            </div>
            <div class="row" id="factionList">
            </div>
            <div class="row">
                <input type="button" name="random" value="Randomize" id="randomButton" />
            </div>

        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" type="text/javascript"></script>
        <script src="/smashup/js/smashUp.js"></script>
</body>

</html>