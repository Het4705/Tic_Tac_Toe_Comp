let count = 0;
let Player_symbol = "X"
let comp_symbol
let comp_win = false;
let player_win = false;
let index = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var stop_flag=false;
//* Empty : 0
//* played by player: 1
//* played by Comp: 2


if (Player_symbol == "X") {
    comp_symbol = "O"
} else {
    comp_symbol = "X"
}

//& Check if AI is going to win


winner_announe=()=>
{

    if (comp_win) {
        var messageElement = document.createElement("div");
    messageElement.innerHTML = "<h1>All We Have To Do <br> Was Win The Damn Game CJ!!</h1> ";
    messageElement.style.color = "green"
    document.body.appendChild(messageElement);
    stop_flag=true;
    var over = document.getElementById("over").play();
  
} else if (player_win) {
    stop_flag=true;
    var img=document.getElementById("body");
    img.innerHTML="<img id='respect' src='public/IMAGES/respect++.png'>";
    var win = document.getElementById("win").play();
    
}
if (count >= 9) {
    var messageElement = document.createElement("div");
    messageElement.textContent = "It's Tie Homie";
    messageElement.style.color = "green"
    messageElement.style.fontSize = "large"
    stop_flag=true;
    document.body.appendChild(messageElement);
    document.getElementById("tie").play();
   }
}




Check_Player_Win=()=>{

   //^ CHECK ROW
   
   let x = 0;
    for (i = 0; i < 3; i++) {
        //row
        if (index[0 + x] == 1 && (index[0 + x] == index[1 + x] ) && (index[0 + x] == index[2 + x] )) {
            document.getElementById("btn"+(2+x)).style.backgroundColor="green";
            document.getElementById("btn"+(0+x)).style.backgroundColor="green";
            document.getElementById("btn"+(1+x)).style.backgroundColor="green";
            player_win=true;
            return true;
        } else if (index[0 + x] == 1 && (index[0 + x] == index[2 + x]) (index[0 + x] == index[1 + x])) {
            
            document.getElementById("btn"+(0+x)).style.backgroundColor="green";
            document.getElementById("btn"+(1+x)).style.backgroundColor="green";
            document.getElementById("btn"+(2+x)).style.backgroundColor="green";
            player_win=true;
            return true;
        } else if (index[1 + x] == 1 && (index[1 + x] == index[2 + x]) (index[1 + x] == index[0 + x])) {
            
            document.getElementById("btn"+(0+x)).style.backgroundColor="green";
            document.getElementById("btn"+(1+x)).style.backgroundColor="green";
            document.getElementById("btn"+(2+x)).style.backgroundColor="green";
            player_win=true;
            return true;
        }
        x += 3;
    }
    x = 0
    for (j = 0; j < 3; j++) {
        if (index[0 + x] == 1 && (index[0 + x] == index[3 + x]) && index[6 + x] == 1) {

            document.getElementById("btn"+(6+x)).style.backgroundColor="green";
            document.getElementById("btn"+(3+x)).style.backgroundColor="green";
            document.getElementById("btn"+(0+x)).style.backgroundColor="green";
            player_win = true;
            return true;

        } else if (index[0 + x] == 1 && (index[0 + x] == index[6 + x]) && index[3 + x] == 1) {
            document.getElementById("btn"+(3+x)).style.backgroundColor="green";
            document.getElementById("btn"+(6+x)).style.backgroundColor="green";
            document.getElementById("btn"+(0+x)).style.backgroundColor="green";
            player_win = true;
            return true;
        } else if (index[3 + x] == 1 && (index[3 + x] == index[6 + x]) && index[0 + x] == 1) {
            document.getElementById("btn"+(0+x)).style.backgroundColor="green";
            document.getElementById("btn"+(3+x)).style.backgroundColor="green";
            document.getElementById("btn"+(6+x)).style.backgroundColor="green";
            player_win = true;
            return true;
        }
        x += 1;
    }
    //*diagonal
    if (index[0] == 2 && (index[0] == index[4]) && index[8] == 0) {
        document.getElementById("btn8").style.backgroundColor="green";
        document.getElementById("btn0").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="green";
        document.getElementById("btn8").style.value = '';
        player_win = true;
        return true;
    } else if (index[4] == 2 && (index[4] == index[8]) && index[0] == 0) {
        document.getElementById("btn0").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="green";
        document.getElementById("btn8").style.backgroundColor="green";
        document.getElementById("btn0").style.value = '';
        player_win = true;
        return true;
    } else if (index[0] == 2 && (index[0] == index[8]) && index[4] == 0) {
        document.getElementById("btn0").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="green";
        document.getElementById("btn8").style.backgroundColor="green";
        document.getElementById("btn4").style.value = '';
        player_win = true;
        return true;
    }

    //*diagonal2
    if (index[2] == 1 && (index[2] == index[4]) && index[6] == 1) {
        document.getElementById("btn6").style.backgroundColor="green";
        document.getElementById("btn2").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="green";
        document.getElementById("btn6").style.value = '';
        player_win = true;
        return true;
    } else if (index[4] == 1 && (index[4] == index[6]) && index[2] == 1) {
        document.getElementById("btn2").style.backgroundColor="green";
        document.getElementById("btn6").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="green";
        document.getElementById("btn2").style.value = '';

        player_win = true;
        return true;
    } else if (index[2] == 1 && (index[2] == index[6]) && index[4] == 1) {
        document.getElementById("btn4").style.backgroundColor="green";
        document.getElementById("btn2").style.backgroundColor="green";
        document.getElementById("btn6").style.backgroundColor="green";
        document.getElementById("btn4").style.value = '';
        player_win = true;
        return true;
    }

return false;
}


Wins = function () {
    let x = 0;
    for (i = 0; i < 3; i++) {
        //row
        if (index[0 + x] == 2 && (index[0 + x] == index[1 + x]) && index[2 + x] == 0) {
            document.getElementById("btn"+(2+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(2+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(2+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(2+x)).style.value = '';
            document.getElementById("btn"+(2+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(0+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(1+x)).style.backgroundColor="purple";
            comp_win=true
            return true;
            
        } else if (index[0 + x] == 2 && (index[0 + x] == index[2 + x]) && index[1 + x] == 0) {
            document.getElementById("btn"+(1+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(1+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(1+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(1+x)).style.value = '';
            document.getElementById("btn"+(0+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(1+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(2+x)).style.backgroundColor="purple";
            comp_win=true
            return true;
        } else if (index[1 + x] == 2 && (index[1 + x] == index[2 + x]) && index[0 + x] == 0) {
            document.getElementById("btn"+(0+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(0+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(0+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(0+x)).style.value = '';
            document.getElementById("btn"+(0+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(1+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(2+x)).style.backgroundColor="purple";
            comp_win=true
            return true;
        }
        x += 3;
    }
    x = 0
    for (j = 0; j < 3; j++) {
        if (index[0 + x] == 2 && (index[0 + x] == index[3 + x]) && index[6 + x] == 0) {

            document.getElementById("btn"+(6+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(6+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(6+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(6+x)).style.value = '';
            document.getElementById("btn"+(6+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(3+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(0+x)).style.backgroundColor="purple";
            comp_win = true;
            return true;

        } else if (index[0 + x] == 2 && (index[0 + x] == index[6 + x]) && index[3 + x] == 0) {
            document.getElementById("btn"+(3+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(3+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(3+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(3+x)).style.value = '';
            document.getElementById("btn"+(3+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(6+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(0+x)).style.backgroundColor="purple";
            comp_win = true;
            return true;
        } else if (index[3 + x] == 2 && (index[3 + x] == index[6 + x]) && index[0 + x] == 0) {
            document.getElementById("btn"+(0+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(0+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(0+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(0+x)).style.value = '';
            document.getElementById("btn"+(0+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(3+x)).style.backgroundColor="purple";
            document.getElementById("btn"+(6+x)).style.backgroundColor="purple";
            comp_win = true;
            return true;
        }
        x += 1;
    }

    //*diagonal
    if (index[0] == 2 && (index[0] == index[4]) && index[8] == 0) {
        document.getElementById("btn8").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn8").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn8").style.backgroundPosition = "center";
        document.getElementById("btn8").style.backgroundColor="purple";
        document.getElementById("btn0").style.backgroundColor="purple";
        document.getElementById("btn4").style.backgroundColor="purple";
        document.getElementById("btn8").style.value = '';
        comp_win = true;
        return true;
    } else if (index[4] == 2 && (index[4] == index[8]) && index[0] == 0) {
        document.getElementById("btn0").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn0").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn0").style.backgroundPosition = "center";
        document.getElementById("btn0").style.backgroundColor="purple";
        document.getElementById("btn4").style.backgroundColor="purple";
        document.getElementById("btn8").style.backgroundColor="purple";
        document.getElementById("btn0").style.value = '';
        comp_win = true;
        return true;
    } else if (index[0] == 2 && (index[0] == index[8]) && index[4] == 0) {
        document.getElementById("btn4").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn4").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn4").style.backgroundPosition = "center";
        document.getElementById("btn0").style.backgroundColor="purple";
        document.getElementById("btn4").style.backgroundColor="purple";
        document.getElementById("btn8").style.backgroundColor="purple";
        document.getElementById("btn4").style.value = '';
        comp_win = true;
        return true;
    }

    //*diagonal2
    if (index[2] == 2 && (index[2] == index[4]) && index[6] == 0) {
        document.getElementById("btn6").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn6").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn6").style.backgroundPosition = "center";
        document.getElementById("btn6").style.backgroundColor="purple";
        document.getElementById("btn2").style.backgroundColor="purple";
        document.getElementById("btn4").style.backgroundColor="purple";
        document.getElementById("btn6").style.value = '';
        comp_win = true;
        return true;
    } else if (index[4] == 2 && (index[4] == index[6]) && index[2] == 0) {
        document.getElementById("btn2").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn2").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn2").style.backgroundPosition = "center";
        document.getElementById("btn2").style.backgroundColor="purple";
        document.getElementById("btn6").style.backgroundColor="purple";
        document.getElementById("btn4").style.backgroundColor="purple";
        document.getElementById("btn2").style.value = '';

        comp_win = true;
        return true;
    } else if (index[2] == 2 && (index[2] == index[6]) && index[4] == 0) {
        document.getElementById("btn4").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn4").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn4").style.backgroundPosition = "center";
        document.getElementById("btn4").style.backgroundColor="purple";
        document.getElementById("btn2").style.backgroundColor="purple";
        document.getElementById("btn6").style.backgroundColor="purple";
        document.getElementById("btn4").style.value = '';
        comp_win = true;
        return true;
    }
    return false;
}

//! Check if AI is not lossing
do_not_lose = () => {

    let x = 0;
    for (i = 0; i < 3; i++) {

        //*rowCheck
        if (index[0 + x] == 1 && (index[0 + x] == index[1 + x]) && index[2 + x] == 0) {
            document.getElementById("btn"+(2+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(2+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(2+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(2+x)).style.value = '';
            index[x + 2] = 2;
            return true;

        } else if (index[0 + x] == 1 && (index[0 + x] == index[2 + x]) && index[1 + x] == 0) {
            document.getElementById("btn"+(1+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(1+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(1+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(1+x)).style.value = '';
            index[x + 1] = 2;
            return true;
        } else if (index[1 + x] == 1 && (index[1 + x] == index[2 + x]) && index[0 + x] == 0) {
            document.getElementById("btn"+(0+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(0+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(0+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(0+x)).style.value = '';
            index[x + 0] = 2;
            return true;
        }
        x += 3;
    }

    //*Column check
    x = 0
    for (j = 0; j < 3; j++) {
        if (index[0 + x] == 1 && (index[0 + x] == index[3 + x]) && index[6 + x] == 0) {

            document.getElementById("btn"+(6+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(6+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(6+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(6+x)).style.value = '';
            index[x + 6] = 2;
            return true;

        } else if (index[0 + x] == 1 && (index[0 + x] == index[6 + x]) && index[3 + x] == 0) {
            document.getElementById("btn"+(3+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(3+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(3+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(3+x)).style.value = '';
            index[x + 3] = 2;
            return true;
        } else if (index[3 + x] == 1 && (index[3 + x] == index[6 + x]) && index[0 + x] == 0) {
            document.getElementById("btn"+(0+x)).style.backgroundImage = 'url("public/IMAGES/O.png")';
            document.getElementById("btn"+(0+x)).style.backgroundRepeat = "no-repeat";
            document.getElementById("btn"+(0+x)).style.backgroundPosition = "center";
            document.getElementById("btn"+(0+x)).style.value = '';
            index[x + 0] = 2;
            return true;
        }
        x += 1;
    }

    //*diagona l
    if (index[0] == 1 && (index[0] == index[4]) && index[8] == 0) {
        document.getElementById("btn8").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn8").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn8").style.backgroundPosition = "center";
        document.getElementById("btn8").style.value = '';
        index[8] = 2;
        return true;
    } else if (index[4] == 1 && (index[4] == index[8]) && index[0] == 0) {
        document.getElementById("btn0").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn0").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn0").style.backgroundPosition = "center";
        document.getElementById("btn0").style.value = '';
        index[0] = 2;
        return true;
    } else if (index[0] == 1 && (index[0] == index[8]) && index[4] == 0) {
        document.getElementById("btn4").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn4").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn4").style.backgroundPosition = "center";
        document.getElementById("btn4").style.value = '';
        index[4] = 2;
        return true;
    }

    //*diagona 2
    if (index[2] == 1 && (index[2] == index[4]) && index[6] == 0) {
        document.getElementById("btn6").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn6").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn6").style.backgroundPosition = "center";
        document.getElementById("btn6").style.value = '';
        index[6] = 2;
        return true;
    } else if (index[4] == 1 && (index[4] == index[6]) && index[2] == 0) {
        document.getElementById("btn2").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn2").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn2").style.backgroundPosition = "center";
        document.getElementById("btn2").style.value = '';
        index[2] = 2;
        return true;
    } else if (index[2] == 1 && (index[2] == index[6]) && index[4] == 0) {
        document.getElementById("btn4").style.backgroundImage = 'url("public/IMAGES/O.png")';
        document.getElementById("btn4").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn4").style.backgroundPosition = "center";
        document.getElementById("btn4").style.value = '';
        index[4] = 2;
        return true;
    }
    return false;
}

comp_play = () => {
    if (!Wins()) {
        if (!do_not_lose()) {
             
            if (index[4] == 0) {
                document.getElementById("btn4").style.backgroundImage = 'url("public/IMAGES/O.png")';
                document.getElementById("btn4").style.backgroundRepeat = "no-repeat";
                document.getElementById("btn4").style.backgroundPosition = "center";
                document.getElementById("btn4").style.value = '';
                index[4] = 2;

            }
            else if(index[4]==2 && ((index[0]==1 && index[8]==1) ))
            {
                document.getElementById("btn6").style.backgroundImage = 'url("public/IMAGES/O.png")';
                document.getElementById("btn6").style.backgroundRepeat = "no-repeat";
                document.getElementById("btn6").style.backgroundPosition = "center";
                document.getElementById("btn6").style.value = '';
                index[6] = 2;
            }
             else {
                //*implementing random here

                var availableIndices = [0, 2, 6, 8];
                var randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
                let counter = 0;
                while (index[randomIndex] != 0 && counter <= 8) {
                    counter++;
                    randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
                }
                if (index[randomIndex] == 0) {
                    document.getElementById("btn" + randomIndex).style.backgroundImage = 'url("public/IMAGES/O.png")';
                    document.getElementById("btn" + randomIndex).style.backgroundRepeat = "no-repeat";
                    document.getElementById("btn" + randomIndex).style.backgroundPosition = "center";
                    document.getElementById("btn" + randomIndex).style.value = ''; // Ensure value is empty
                    index[randomIndex] = 2;
                } else {
                    for (k = 0; k < 9; k++) {
                        if (index[k] == 0) {
                            document.getElementById("btn" + randomIndex).style.backgroundImage = 'url("public/IMAGES/O.png")';
                            document.getElementById("btn" + randomIndex).style.backgroundRepeat = "no-repeat";
                            document.getElementById("btn" + randomIndex).style.backgroundPosition = "center";
                            document.getElementById("btn" + randomIndex).style.value = '';
                            index[randomIndex] = 2;
                        }
                    }
                }
            }

        }

    }
    winner_announe();
    count++;
   
}

function restart() {
    var resetSound = document.getElementById("reset");

    // Set the playback rate for the reset sound
    resetSound.playbackRate = 1.2;

    var messageElement = document.createElement("div");
    messageElement.textContent = "Ah shit, here we go again";
    messageElement.style.color="white"
    messageElement.style.textShadow="2px 2px 2px black"
    messageElement.style.fontSize="large"
    document.body.appendChild(messageElement);

    // Set up the onended event listener
    resetSound.onended = function () {
        // Remove the message
        document.body.removeChild(messageElement);

        // Reload the location
        location.reload();
    };

    // Play the reset sound
    resetSound.play();
}


function play(btn, indx) {

    if(stop_flag==true)
    {
        
        document.getElementById("reset_alert").play()
        alert("Dumbass RESET the game")

    }
    
    else {



        if (index[indx] == 0) {

            document.getElementById("click").playbackRate = 1.5;
            if(count!=9)
            {
                document.getElementById("click").play();
            }
            switch (btn) {
                case "btn0":
                    // document.getElementById(btn).style.backgroundImage = 'url("public//IMAGES/X.png")';
                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';
                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty
                    index[indx] = 1;
                    count++;
                    comp_play();
                    break;

                case "btn1":
                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty

                    index[indx] = 1;
                    count++;
                    comp_play();
                    break
                case "btn2":

                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty

                    index[indx] = 1;
                    count++;
                    comp_play();

                    break
                case "btn3":

                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty
                    index[indx] = 1;
                    count++;
                    comp_play();

                    break
                case "btn4":

                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty
                    index[indx] = 1;
                    count++;
                    comp_play();

                    break
                case "btn5":

                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty
                    index[indx] = 1;
                    count++;
                    comp_play();

                    break
                case "btn6":

                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty
                    index[indx] = 1;
                    count++;
                    comp_play();
                    break
                case "btn7":
                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty
                    index[indx] = 1;
                    count++;
                    comp_play();
                    break
                case "btn8":

                    document.getElementById(btn).style.backgroundImage = 'url("public/IMAGES/X.png")';

                    document.getElementById(btn).style.backgroundRepeat = "no-repeat";
                    document.getElementById(btn).style.backgroundPosition = "center";
                    document.getElementById(btn).style.value = ''; // Ensure value is empty
                    index[indx] = 1;
                    count++;
                    comp_play();
                    
                    break
            }

            console.log(count);
        Check_Player_Win();
        winner_announe();
        
        } else {
            alert("postion already filled")
        }
    }

}

