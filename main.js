let area = document.getElementById("area"),
    move = 0;

area.addEventListener("click", function (e) {
    if (move % 2 === 0) {
        e.target.innerHTML = "X";
    } else {
        e.target.innerHTML = "O";
    }
    move++;
    check();
});

function check() {
    let boxes = document.getElementsByClassName("box");
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == "X" && boxes[arr[i][1]].innerHTML == "X" && boxes[arr[i][2]].innerHTML == "X") {
            alert("Крестики выйграли");
            location.reload();
        } else if (boxes[arr[i][0]].innerHTML == "O" && boxes[arr[i][1]].innerHTML == "O" && boxes[arr[i][2]].innerHTML == "O") {
            alert("Нолики выйграли");
            location.reload();
        }

    }
}