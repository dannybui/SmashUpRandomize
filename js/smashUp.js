                $(function () {
                    $.getJSON("/smashup/js/smashup.json", function (data) {
                        faction = '';
                        for (var d in data.smashup) {
                            if (data.smashup[d].set != undefined) {
                                faction += '<div class="large-2 column text-left">';
                                faction += '<div class="row"><h4>' + data.smashup[d].set + '</h4></div>'
                                for (var fac in data.smashup[d].factions) {
                                    faction += '<input type="checkbox" class="factions" name="factions" checked value="' + data.smashup[d].factions[fac] + '">' + data.smashup[d].factions[fac] + '<br/>'
                                }
                                faction += '</div>';
                            }
                        }
                        $('#factionList').append(faction);

                    });

                });

                // Player count

                $('#playerCount').on('change', function () {
                    var playerCount = $(this).val();
                    var playerList = ' ';
                    for (var i = 0; i < playerCount; i++) {
                        var temp = i + 1
                        playerList += 'Player ' + temp + ' Name: <input class="playerName" type="text" /><br/>'
                    }
                    $('#playerContent').html(playerList);
                });

                // Shuffles the faction Array
                function shuffle(o) {
                    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                    return o;
                };

                // Randomize
                $('#randomButton').on('click', function (event) {
                    event.preventDefault();
                    var players = [];
                    var factions = [];

                    $('.playerName').each(function () {
                        players.push($(this).val());
                    })

                    $('.factions:checked').each(function () {
                        factions.push($(this).val());
                    })
                    var finalList = '';

                    if (factions.length > 0) {
                        var factionCount = 0;
                        shuffle(factions);
                        for (var p in players) {
                            finalList += 'Player: '
                            finalList += '' + players[p] + '<br><br>';
                            finalList += '' + factions[factionCount] + '<br>';
                            factionCount = factionCount + 1;
                            finalList += '' + factions[factionCount] + '<br><br>';
                            factionCount = factionCount + 1;
                        }
                        finalList += '<br><br><input type="button" id="returnButton" value="Regenerate Decks" />';
                    }
                    $('#playerContent').html(finalList);
                    $('#randomButton').css("display", "none");
                    $('#playerCount').css("display", "none");
                    $('#factionList').css("display", "none");
                    $('#numPlayer').css("display", "none");

                });


                // Regenerate 

                $('#playerContent').on('click', '#returnButton', function () {
                    location.reload(true);
                });