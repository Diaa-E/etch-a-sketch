"use strict";

const gridContainer = document.querySelector(".grid-container")

function createGrid(gridContainer, dimensions = 16)
{
    //change grid template based on new dimensions
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${dimensions}, 1fr)`);

    for (let i = 0; i < (dimensions ** 2); i++)
    {
        const newCell = document.createElement('div');
        newCell.setAttribute('class', 'cell');
        gridContainer.appendChild(newCell);
    }

    addCellListeners(document.querySelectorAll('.cell'));
}

function addCellListeners(cells)
{
    cells.forEach(cell => cell.addEventListener('mouseover', (e) => {
        fillCell(e.target);
    }))
}

function fillCell(cell)
{
    cell.classList.add('cell-fill')
}

createGrid(gridContainer, 50);