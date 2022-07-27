"use strict";

const UPPER_LIMIT = 100;
const LOWER_LIMIT = 16;

const gridContainer = document.querySelector(".grid-container");

//clear current grid
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clearGrid();
});

//create a new grid with a different size
const newButton = document.querySelector('.new');
newButton.addEventListener('click', () => {
    createGrid(gridContainer, +prompt('Enter a new size.'));
});

function destroyGrid(gridContainer)
{
    //as long as there is a first child, remove it and move on to the next
    while (gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createGrid(gridContainer, dimensions = 16)
{
    //catch invalid input
    if (typeof dimensions !== 'number')
    {
        alert(`Please enter a valid number between ${LOWER_LIMIT} and ${UPPER_LIMIT}`);
        return;
    }
    else if (dimensions < LOWER_LIMIT)
    {
        alert(`${dimensions} is too small!`);
        return
    }
    else if (dimensions > UPPER_LIMIT)
    {
        alert(`${dimensions} is too large!`)
        return
    }

    //remove old grid
    destroyGrid(gridContainer);

    //change grid template based on new dimensions
    setGridSize(gridContainer, dimensions);

    //create a new grid
    for (let i = 0; i < (dimensions ** 2); i++)
    {
        const newCell = document.createElement('div');
        newCell.setAttribute('class', 'cell');
        gridContainer.appendChild(newCell);
    }

    addCellListeners(document.querySelectorAll('.cell'));
}

function setGridSize(gridContainer, dimensions)
{
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${dimensions}, 1fr)`);
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

function clearGrid()
{
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('cell-fill'));
}

createGrid(gridContainer);