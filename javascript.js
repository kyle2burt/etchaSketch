const grid = document.querySelector(".grid");

for (i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (j = 0; j < 16; j++) {
        const row = document.createElement("div");
        row.textContent = j;
        row.classList.add("row");

        column.appendChild(row);
    }

    grid.appendChild(column);
}