"use strict";

const gridContainer = document.querySelector(".grid-container")

function createGrid(dimensions = 16, gridContainer)
{
    //change grid template based on new dimensions
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${dimensions}, 1fr)`);

    for (let i = 0; i < (dimensions ** 2); i++)
    {
        const newCell = document.createElement('div');
        newCell.setAttribute('class', 'cell');
        gridContainer.appendChild(newCell);
    }
}

createGrid(20, gridContainer);