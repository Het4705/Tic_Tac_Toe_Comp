let count = 0;
let Player_symbol = "X"
let comp_symbol
let comp_win = false;
let player_win = false;
let index = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var stop_flag = false;

// Set the computer's symbol based on the player's symbol
if (Player_symbol == "X") {
    comp_symbol = "O"
} else {
    comp_symbol = "X"
}

// Function to announce the winner
function winner_announce() {
    if (comp_win) {
        var messageElement = document.createElement("div");
        messageElement.innerHTML = "<h1>All We Have To Do <br> Was Win The Damn Game CJ!!</h1> ";
        messageElement.style.color = "green"
        document.body.appendChild(messageElement);
        stop_flag = true;
        var over = document.getElementById("over").play();
    } else if (player_win) {
        stop_flag = true;
        var img = document.getElementById("body");
        img.innerHTML = "<img id='respect' src='public/IMAGES/respect++.png'>";
        var win = document.getElementById("win").play();
    }
    if (count >= 9) {
        var messageElement = document.createElement("div");
        messageElement.textContent = "It's Tie Homie";
        messageElement.style.color = "green"
        messageElement.style.fontSize = "large"
        stop_flag = true;
        document.body.appendChild(messageElement);
        document.getElementById("tie").play();
    }
}

// Function to check if the player wins
function check_player_win() {
    let x = 0;
    for (let i = 0; i < 3; i++) {
        // Row check
        if (index[0 + x] == 1 && index[0 + x] == index[1 + x] && index[0 + x] == index[2 + x]) {
            document.getElementById("btn" + (2 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (1 + x)).style.backgroundColor = "green";
            player_win = true;
            return true;
        } else if (index[0 + x] == 1 && index[0 + x] == index[2 + x] && index[0 + x] == index[1 + x]) {
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (1 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (2 + x)).style.backgroundColor = "green";
            player_win = true;
            return true;
        } else if (index[1 + x] == 1 && index[1 + x] == index[2 + x] && index[1 + x] == index[0 + x]) {
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (1 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (2 + x)).style.backgroundColor = "green";
            player_win = true;
            return true;
        }
        x += 3;
    }
    x = 0;
    for (let j = 0; j < 3; j++) {
        if (index[0 + x] == 1 && index[0 + x] == index[3 + x] && index[6 + x] == 1) {
            document.getElementById("btn" + (6 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (3 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "green";
            player_win = true;
            return true;
        } else if (index[0 + x] == 1 && index[0 + x] == index[6 + x] && index[3 + x] == 1) {
            document.getElementById("btn" + (3 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (6 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "green";
            player_win = true;
            return true;
        } else if (index[3 + x] == 1 && index[3 + x] == index[6 + x] && index[0 + x] == 1) {
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (3 + x)).style.backgroundColor = "green";
            document.getElementById("btn" + (6 + x)).style.backgroundColor = "green";
            player_win = true;
            return true;
        }
        x += 1;
    }

    // Diagonal checks
    if (index[0] == 1 && index[0] == index[4] && index[8] == 1) {
        document.getElementById("btn8").style.backgroundColor = "green";
        document.getElementById("btn0").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        player_win = true;
        return true;
    } else if (index[4] == 1 && index[4] == index[8] && index[0] == 1) {
        document.getElementById("btn0").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn8").style.backgroundColor = "green";
        player_win = true;
        return true;
    } else if (index[0] == 1 && index[0] == index[8] && index[4] == 1) {
        document.getElementById("btn0").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn8").style.backgroundColor = "green";
        player_win = true;
        return true;
    }
    if (index[2] == 1 && index[2] == index[4] && index[6] == 1) {
        document.getElementById("btn6").style.backgroundColor = "green";
        document.getElementById("btn2").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        player_win = true;
        return true;
    } else if (index[4] == 1 && index[4] == index[6] && index[2] == 1) {
        document.getElementById("btn2").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn6").style.backgroundColor = "green";
        player_win = true;
        return true;
    } else if (index[2] == 1 && index[2] == index[6] && index[4] == 1) {
        document.getElementById("btn2").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn6").style.backgroundColor = "green";
        player_win = true;
        return true;
    }

    return false;
}

// Function to check if the computer wins
function check_comp_win() {
    let x = 0;
    for (let i = 0; i < 3; i++) {
        // Row check
        if (index[0 + x] == 2 && index[0 + x] == index[1 + x] && index[0 + x] == index[2 + x]) {
            document.getElementById("btn" + (2 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (1 + x)).style.backgroundColor = "red";
            comp_win = true;
            return true;
        } else if (index[0 + x] == 2 && index[0 + x] == index[2 + x] && index[0 + x] == index[1 + x]) {
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (1 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (2 + x)).style.backgroundColor = "red";
            comp_win = true;
            return true;
        } else if (index[1 + x] == 2 && index[1 + x] == index[2 + x] && index[1 + x] == index[0 + x]) {
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (1 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (2 + x)).style.backgroundColor = "red";
            comp_win = true;
            return true;
        }
        x += 3;
    }
    x = 0;
    for (let j = 0; j < 3; j++) {
        if (index[0 + x] == 2 && index[0 + x] == index[3 + x] && index[6 + x] == 2) {
            document.getElementById("btn" + (6 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (3 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "red";
            comp_win = true;
            return true;
        } else if (index[0 + x] == 2 && index[0 + x] == index[6 + x] && index[3 + x] == 2) {
            document.getElementById("btn" + (3 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (6 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "red";
            comp_win = true;
            return true;
        } else if (index[3 + x] == 2 && index[3 + x] == index[6 + x] && index[0 + x] == 2) {
            document.getElementById("btn" + (0 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (3 + x)).style.backgroundColor = "red";
            document.getElementById("btn" + (6 + x)).style.backgroundColor = "red";
            comp_win = true;
            return true;
        }
        x += 1;
    }

    // Diagonal checks
    if (index[0] == 2 && index[0] == index[4] && index[8] == 2) {
        document.getElementById("btn8").style.backgroundColor = "red";
        document.getElementById("btn0").style.backgroundColor = "red";
        document.getElementById("btn4").style.backgroundColor = "red";
        comp_win = true;
        return true;
    } else if (index[4] == 2 && index[4] == index[8] && index[0] == 2) {
        document.getElementById("btn0").style.backgroundColor = "red";
        document.getElementById("btn4").style.backgroundColor = "red";
        document.getElementById("btn8").style.backgroundColor = "red";
        comp_win = true;
        return true;
    } else if (index[0] == 2 && index[0] == index[8] && index[4] == 2) {
        document.getElementById("btn0").style.backgroundColor = "red";
        document.getElementById("btn4").style.backgroundColor = "red";
        document.getElementById("btn8").style.backgroundColor = "red";
        comp_win = true;
        return true;
    }
    if (index[2] == 2 && index[2] == index[4] && index[6] == 2) {
        document.getElementById("btn6").style.backgroundColor = "red";
        document.getElementById("btn2").style.backgroundColor = "red";
        document.getElementById("btn4").style.backgroundColor = "red";
        comp_win = true;
        return true;
    } else if (index[4] == 2 && index[4] == index[6] && index[2] == 2) {
        document.getElementById("btn2").style.backgroundColor = "red";
        document.getElementById("btn4").style.backgroundColor = "red";
        document.getElementById("btn6").style.backgroundColor = "red";
        comp_win = true;
        return true;
    } else if (index[2] == 2 && index[2] == index[6] && index[4] == 2) {
        document.getElementById("btn2").style.backgroundColor = "red";
        document.getElementById("btn4").style.backgroundColor = "red";
        document.getElementById("btn6").style.backgroundColor = "red";
        comp_win = true;
        return true;
    }

    return false;
}

function player_play(id) {
    if (!stop_flag) {
        if (document.getElementById(id).textContent == "") {
            document.getElementById(id).textContent = Player_symbol;
            index[id[3]] = 1;
            count++;
            player_win = check_player_win();
            winner_announce();
            if (!player_win) {
                comp_play();
            }
        }
    }
}

// Function for the computer's move
function comp_play() {
    if (!stop_flag) {
        while (true) {
            let random = Math.floor(Math.random() * 9);
            if (index[random] == 0) {
                document.getElementById("btn" + random).textContent = comp_symbol;
                index[random] = 2;
                count++;
                comp_win = check_comp_win();
                winner_announce();
                break;
            }
        }
    }
}
