let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function incr1Home() {
    incr("home", 1);
}

function incr2Home() {
    incr("home", 2);
}

function incr3Home() {
    incr("home", 3);
}

function incr1Guest() {
    incr("guest", 1);
}

function incr2Guest() {
    incr("guest", 2);
}

function incr3Guest() {
    incr("guest", 3);
}

function incr(team, val) {
    if (team == "home") {
        homeScore += val;
        homeScoreEl.textContent = homeScore;
    } else {
        guestScore += val;
        guestScoreEl.textContent = guestScore;    
    }
}