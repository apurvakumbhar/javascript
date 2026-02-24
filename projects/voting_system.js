let Alice = 0;
let Bob = 0;
let Charlie = 0;

function vote(name) {

    if (name === "Alice") {
        Alice++;
    }
    else if (name === "Bob") {
        Bob++;
    }
    else if (name === "Charlie") {
        Charlie++;
    }

    console.log("Vote added for", name);
}

function finishVoting() {

    console.clear();
    console.log("FINAL RESULTS");
    console.log("Alice:", Alice);
    console.log("Bob:", Bob);
    console.log("Charlie:", Charlie);

    let winner = "Alice";
    let max = Alice;

    if (Bob > max) {
        max = Bob;
        winner = "Bob";
    }

    if (Charlie > max) {
        max = Charlie;
        winner = "Charlie";
    }

    console.log("Winner is:", winner);

    document.getElementById("result").innerHTML =
        "Alice: " + Alice + "<br>" +
        "Bob: " + Bob + "<br>" +
        "Charlie: " + Charlie + "<br><br>" +
        " Winner: " + winner +
        " (" + max + " votes)";
}