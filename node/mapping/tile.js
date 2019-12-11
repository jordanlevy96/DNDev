const GRASS = 0;
const DIRT = 1;
const WATER = 2;
const NUMSTATES = 3;

class Tile {
    constructor() {
        tTile = new Sprite(scene, "white.png", 32, 32);
        tTile.setSpeed(0);
        tTile.state = GRASS;
        tTile.images = new Array("black.png", "white.png");
        tTile.row = 0;
        tTile.col = 0;

        tTile.setState = (state) => {
            this.state = state;
            this.setImage(this.images[this.state]);
        }

        tTile.getRow = () => {
            return this.row;
        }

        tTile.getCol = () => {
            return this.col;
        }
        tTile.getState = () => {
            return this.state;
        }
        tTile.checkMouse = () => {
            if (this.isClicked()) {
                newState = this.state;
                newState++;
                if (newState >= NUMSTATES) {
                    newState = 0;
                }
                this.setState(newState);
            }
        }
    }
}


const setupTiles = () => {
    const ROWS = 5;
    const COLS = 5;
    tileset = new Array(ROWS);
    for (row = 0; row < ROWS; row++) {
        tRow = new Array(COLS);
        for (col = 0; col < COLS; col++) {
            tRow[col] = new Tile();
            xPos = 16 + (32 * col);
            yPos = 16 + (32 * row);
            tRow[col].setPosition(xPos, yPos);
            tRow[col].row = row;
            tRow[col].col = col;
        }
        tileset[row] = tRow;
    }
}

setupTiles();