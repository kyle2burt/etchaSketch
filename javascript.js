const grid = document.querySelector(".grid");
const clearButton = document.querySelector("#clear");
const slider = document.querySelector("#grid-slider");

createGrid(16);

clearButton.addEventListener("click", () => {
    clearGrid();
});

slider.addEventListener("mouseup", () => {
    const sliderValueText = document.querySelector("#slider-value");
    sliderValueText.textContent = `${slider.value}x${slider.value}`;
    deleteChildNodes(grid);
    createGrid(slider.value)
});

function deleteChildNodes(node) {
    let child = node.lastElementChild;
    while (child) {
        node.removeChild(child);
        child = node.lastElementChild;
    }
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
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