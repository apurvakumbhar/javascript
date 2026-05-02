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

    console.log("Vote added for:", name);
}

function showResult() {

    console.clear();
    console.log("FINAL RESULTS");
    console.log("Alice:", Alice);
    console.log("Bob:", Bob);
    console.log("Charlie:", Charlie);

    let max = Math.max(Alice, Bob, Charlie);
    let winner = "";

    if (Alice === max && Bob === max || 
        Alice === max && Charlie === max || 
        Bob === max && Charlie === max) {

        winner = "Tie Between Candidates";
        console.log("Result: Tie");
    }
    else if (Alice === max) {
        winner = "Alice";
    }
    else if (Bob === max) {
        winner = "Bob";
    }
    else {
        winner = "Charlie";
    }

    console.log("Winner:", winner);

    document.getElementById("result").innerHTML =
        "Alice: " + Alice + "<br>" +
        "Bob: " + Bob + "<br>" +
        "Charlie: " + Charlie + "<br><br>" +
        "<b>Winner: " + winner + "</b>";
}

function resetVotes() {

    Alice = 0;
    Bob = 0;
    Charlie = 0;

    document.getElementById("result").innerHTML = "";
    console.clear();
    console.log("System Reset Successfully");
}