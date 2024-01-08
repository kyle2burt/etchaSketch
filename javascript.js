const clearButton = document.querySelector("#clear");

createGrid();

clearButton.addEventListener("click", () => {
    clearGrid();
});



function createGrid() {
    const grid = document.querySelector(".grid");

    for (i = 0; i < 16; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (j = 0; j < 16; j++) {
            const row = document.createElement("div");
            row.textContent = j;
            row.classList.add("row");

            row.addEventListener("mouseover", () => { // change color on hover
                row.style.backgroundColor = "black";
            })
    
            column.appendChild(row);
        }
    
        grid.appendChild(column);
    }
}

function clearGrid() {
    const grid = document.querySelectorAll(".row");
    grid.forEach((square) => {
        square.style.backgroundColor = "#393E46";
    });
}