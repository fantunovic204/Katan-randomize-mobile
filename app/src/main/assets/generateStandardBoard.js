class resurceTile {
    constructor(type, value, position) {
        this.type = type;
        this.value = value;
        this.position = position
    }
}

/*unavailble tile positions*/
let positionsForBox1 = { position: 'box1', unavailablePositions: ['box2', 'box4', 'box5'] }
let positionsForBox2 = { position: 'box2', unavailablePositions: ['box1', 'box3', 'box5', 'box6'] }
let positionsForBox3 = { position: 'box3', unavailablePositions: ['box2', 'box6', 'box7'] }
let positionsForBox4 = { position: 'box4', unavailablePositions: ['box1', 'box5', 'box8', 'box9'] }
let positionsForBox5 = { position: 'box5', unavailablePositions: ['box1', 'box2', 'box4', 'box6', 'box9', 'box10'] }
let positionsForBox6 = { position: 'box6', unavailablePositions: ['box2', 'box3', 'box5', 'box7', 'box10', 'box11'] }
let positionsForBox7 = { position: 'box7', unavailablePositions: ['box3', 'box6', 'box11', 'box12'] }
let positionsForBox8 = { position: 'box8', unavailablePositions: ['box4', 'box9', 'box13'] }
let positionsForBox9 = { position: 'box9', unavailablePositions: ['box4', 'box5', 'box8', 'box10', 'box13', 'box14'] }
let positionsForBox10 = { position: 'box10', unavailablePositions: ['box5', 'box6', 'box9', 'box11', 'box14', 'box15'] }
let positionsForBox11 = { position: 'box11', unavailablePositions: ['box6', 'box7', 'box10', 'box12', 'box15', 'box16'] }
let positionsForBox12 = { position: 'box12', unavailablePositions: ['box7', 'box11', 'box16'] }
let positionsForBox13 = { position: 'box13', unavailablePositions: ['box8', 'box9', 'box14', 'box17'] }
let positionsForBox14 = { position: 'box14', unavailablePositions: ['box9', 'box10', 'box13', 'box15', 'box17', 'box18'] }
let positionsForBox15 = { position: 'box15', unavailablePositions: ['box10', 'box11', 'box14', 'box16', 'box18', 'box19'] }
let positionsForBox16 = { position: 'box16', unavailablePositions: ['box11', 'box12', 'box15', 'box19'] }
let positionsForBox17 = { position: 'box17', unavailablePositions: ['box13', 'box14', 'box18'] }
let positionsForBox18 = { position: 'box18', unavailablePositions: ['box17', 'box14', 'box15', 'box19'] }
let positionsForBox19 = { position: 'box19', unavailablePositions: ['box15', 'box16', 'box18'] }

let unavailablePositionsArray = [
    positionsForBox1, positionsForBox2, positionsForBox3, positionsForBox4,
    positionsForBox5, positionsForBox6, positionsForBox7, positionsForBox8,
    positionsForBox9, positionsForBox10, positionsForBox11, positionsForBox12,
    positionsForBox13, positionsForBox14, positionsForBox15, positionsForBox16,
    positionsForBox17, positionsForBox18, positionsForBox19
];



function generateResourceValuesArray() {
    let valuesArray = [];
    for (let i = 3; i < 12; i++) {
        valuesArray.push(i);
        valuesArray.push(i);
    }
    valuesArray.push(2);
    valuesArray.push(12);
    valuesArray = valuesArray.filter(number => number !== 7);
    return valuesArray
}

function generateResourceTypesArray() {
    const typesArray = [];
    //Wood
    for (let i = 0; i <= 3; i++) {
        typesArray.push("forest");
    }
    //Sheep
    for (let i = 0; i <= 3; i++) {
        typesArray.push("pasture");
    }
    //Rock
    for (let i = 0; i <= 2; i++) {
        typesArray.push("mountain");
    }
    //Brick
    for (let i = 0; i <= 2; i++) {
        typesArray.push("hill");
    }
    //Weath
    for (let i = 0; i <= 3; i++) {
        typesArray.push("field");
    }
    typesArray.push("desert");
    return typesArray
}

function generateRandomResourceValue(valuesArray) {
    const randomIndex = Math.floor(Math.random() * valuesArray.length);
    let randomResurceValue = valuesArray[randomIndex];
    valuesArray.splice(randomIndex, 1);
    return randomResurceValue
}

function generateRandomResourceType(typesArray) {
    const randomIndex = Math.floor(Math.random() * typesArray.length);
    let randomResurceType = typesArray[randomIndex];
    typesArray.splice(randomIndex, 1);
    return randomResurceType
}

function randomizeResourceTile() {
    let tileArray = []
    const valuesArray = generateResourceValuesArray()
    const typesArray = generateResourceTypesArray()

    for (let i = 0; i < 19; i++) {
        let titleType = generateRandomResourceType(typesArray)

        if (titleType != 'desert') {
            let tileValue = generateRandomResourceValue(valuesArray)
            let resourceTile = new resurceTile(titleType, tileValue);
            tileArray.push(resourceTile);
        }
        else if (titleType == 'desert') {
            let resourceTile = new resurceTile(titleType, 0);
            tileArray.push(resourceTile);
        }
    }
    return tileArray
}

async function restart() {
    let tileValuesArray = []
    for (let i = 0; i < 19; i++) {
        //Generate tile with position
        const tileBox = document.getElementById(`box${i + 1}`)
        const childImages = tileBox.querySelectorAll("img");
        childImages[0].src = null
        const childParagraphs = tileBox.querySelectorAll("p");
        tileValuesArray.push(childParagraphs);
        childParagraphs[0].textContent = null
        childParagraphs[0].style.display = "";
    }
    return tileValuesArray
}

async function getAllTileBoxPositions() {
    let allTileBoxPositions = []
    for (let i = 0; i < 19; i++) {
        allTileBoxPositions.push(`box${i + 1}`)
    }
    return allTileBoxPositions
}


async function setDesertMiddle() {
    let desertTileValuesArray = []
    let availableTileBoxPositions = []
    //get all positiotns
    let allTileBoxPositions = await getAllTileBoxPositions()
    availableTileBoxPositions = allTileBoxPositions
    //Set desert tile in middle
    const desertTileBox1 = document.getElementById(`box10`)
    const desertImg1 = desertTileBox1.querySelectorAll("img");
    desertImg1[0].src = `images/desert.png`
    desertTileValuesArray.push({ position: 'box10', type: "desert", unavailablePositions: unavailablePositionsArray[9].unavailablePositions });
    //set up array of all positions without the desert tiles
    availableTileBoxPositions = availableTileBoxPositions.filter((item) => item !== desertTileValuesArray[0].position);
    return {
        desertTileValuesArray: desertTileValuesArray,
        availableTileBoxPositions: availableTileBoxPositions
    }
}

async function setTiles() {
    //Set desert in middle
    if (standardBoardOptions.desertInMiddle === true) {
        let afterDesertTilesObject = await setDesertMiddle()
        let tileValuesArray = []
        let resurceTilesValues = randomizeResourceTile()
        resurceTilesValues = resurceTilesValues.filter(item => item.type !== "desert");
        for (let i = 0; i < 18; i++) {
            //Generate tile with position
            const tileBox = document.getElementById(afterDesertTilesObject.availableTileBoxPositions[i])
            const childImages = tileBox.querySelectorAll("img");
            childImages[0].src = `images/${resurceTilesValues[i].type}.png`
            let unavailablePositions = unavailablePositionsArray.find(obj => obj.position === afterDesertTilesObject.availableTileBoxPositions[i]);
            tileValuesArray.push({ position: afterDesertTilesObject.availableTileBoxPositions[i], type: resurceTilesValues[i].type, unavailablePositions: unavailablePositions.unavailablePositions });
        }
        tileValuesArray.push(afterDesertTilesObject.desertTileValuesArray[0])
        tileValuesArray.sort((a, b) => {
            const numericA = parseInt(a.position.match(/\d+/)[0]);
            const numericB = parseInt(b.position.match(/\d+/)[0]);
            return numericA - numericB;
        });
        return tileValuesArray
        //Fully random resurce tile positions
    } else if (standardBoardOptions.desertInMiddle === false) {
        const resurceTilesValues = randomizeResourceTile()
        let tileValuesArray = []
        for (let i = 0; i < 19; i++) {
            //Generate tile with position
            const tileBox = document.getElementById(`box${i + 1}`)
            const childImages = tileBox.querySelectorAll("img");
            childImages[0].src = `images/${resurceTilesValues[i].type}.png`
            tileValuesArray.push({ position: `box${i + 1}`, type: resurceTilesValues[i].type, unavailablePositions: unavailablePositionsArray[i].unavailablePositions });
        }
        return tileValuesArray
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function setRedTileValues() {
    //Setting all tiles
    let tileValuesArray = await setTiles()

    //Remove old desert no-display
    for (let i = 0; i < 19; i++) {
        const oldBox = document.getElementById(`box${i + 1}`)
        const oldParaf = oldBox.querySelectorAll("p");
        oldParaf[0].style.display = "";
    }

    //remove dessert fom tile array
    let desertTile = await tileValuesArray.find(item => item.type == "desert");
    let desertTilePosition = desertTile.position

    const desert = document.getElementById(desertTilePosition)
    const desertParaf = desert.querySelectorAll("p");
    desertParaf[0].style.display = "none";

    tileValuesArray = await tileValuesArray.filter(item => item.type !== "desert");

    let randomPosition;
    let tileBox;
    let childParagraphf;
    let tile;
    let tileunavailablePositions;

    const redValues = [6, 6, 8, 8]
    let redValueTilePositions = []
    let freeTilesAfterRed = tileValuesArray

    for (let i = 0; i < 4; i++) {
        //Setting red tile value
        let randomIndex = await getRandomInt(0, tileValuesArray.length - 1);
        randomPosition = await tileValuesArray[randomIndex].position;
        tileBox = await document.getElementById(randomPosition)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = redValues[i]
        childParagraphf[0].style.color = "#f30909";
        //removing unavailable tiles
        tile = await tileValuesArray.find(item => item.position == randomPosition);
        tile = await tileValuesArray.find(item => item.position == randomPosition);
        tileunavailablePositions = tile.unavailablePositions
        tileunavailablePositions.push(randomPosition)
        tileValuesArray = await tileValuesArray.filter(item => !tileunavailablePositions.includes(item.position));
        redValueTilePositions.push(randomPosition)
    }
    freeTilesAfterRed = await freeTilesAfterRed.filter(item => !redValueTilePositions.includes(item.position));
    return freeTilesAfterRed
}

async function set2and12Values(freeTilesAfterRed) {
    let randomPosition;
    let tileBox;
    let childParagraphf;
    let tile;
    let tileunavailablePositions;

    let otherValues = [2, 12]
    let smallValueTilePositions = []
    let freeTilesAfterSmall = freeTilesAfterRed

    for (let i = 0; i < 2; i++) {
        //Setting red tile value
        let randomIndex = await getRandomInt(0, freeTilesAfterRed.length - 1);
        randomPosition = await freeTilesAfterRed[randomIndex].position;
        tileBox = await document.getElementById(randomPosition)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = otherValues[i]
        childParagraphf[0].style.color = "#000000";
        //removing unavailable tiles
        tile = await freeTilesAfterRed.find(item => item.position == randomPosition);
        tileunavailablePositions = tile.unavailablePositions
        tileunavailablePositions.push(randomPosition)
        freeTilesAfterRed = await freeTilesAfterRed.filter(item => !tileunavailablePositions.includes(item.position));

        smallValueTilePositions.push(randomPosition)
    }
    freeTilesAfterSmall = await freeTilesAfterSmall.filter(item => !smallValueTilePositions.includes(item.position));
    return freeTilesAfterSmall
}

async function setOtherTileValues(options, freeTiles) {
    let otherValues
    if (options.smallValuesNotTouching === true) {
        otherValues = [3, 3, 4, 4, 5, 5, 9, 9, 10, 10, 11, 11]
    } else {
        otherValues = [2, 12, 3, 3, 4, 4, 5, 5, 9, 9, 10, 10, 11, 11]
    }
    otherValues = await shuffleArray(otherValues)

    for (let i = 0; i < otherValues.length; i++) {
        const tileBox = document.getElementById(freeTiles[i].position)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = otherValues[i]
        childParagraphf[0].style.color = "#000000";
    }
}

async function setStandardBoard(standardBoardOptions) {
    try {
        const freeTilesAfterRed = await setRedTileValues()
        if (standardBoardOptions.smallValuesNotTouching === true) {
            const freeTilesAfterSmall = await set2and12Values(freeTilesAfterRed)
            await setOtherTileValues(standardBoardOptions, freeTilesAfterSmall)
        } else {
            await setOtherTileValues(standardBoardOptions, freeTilesAfterRed)
        }
    } catch (error) {
        throw error;
    }
}
