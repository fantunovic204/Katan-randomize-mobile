/*unavailable tile positions*/
let positionsForExpansionBox1 = { position: 'expansionBox1', unavailablePositions: ['expansionBox2', 'expansionBox4', 'expansionBox5'] }
let positionsForExpansionBox2 = { position: 'expansionBox2', unavailablePositions: ['expansionBox1', 'expansionBox3', 'expansionBox5', 'expansionBox6'] }
let positionsForExpansionBox3 = { position: 'expansionBox3', unavailablePositions: ['expansionBox2', 'expansionBox6', 'expansionBox7'] }

let positionsForExpansionBox4 = { position: 'expansionBox4', unavailablePositions: ['expansionBox1', 'expansionBox5', 'expansionBox8', 'expansionBox9'] }
let positionsForExpansionBox5 = { position: 'expansionBox5', unavailablePositions: ['expansionBox1', 'expansionBox2', 'expansionBox4', 'expansionBox6', 'expansionBox9', 'expansionBox10'] }
let positionsForExpansionBox6 = { position: 'expansionBox6', unavailablePositions: ['expansionBox2', 'expansionBox3', 'expansionBox5', 'expansionBox7', 'expansionBox10', 'expansionBox11'] }
let positionsForExpansionBox7 = { position: 'expansionBox7', unavailablePositions: ['expansionBox3', 'expansionBox6', 'expansionBox11', 'expansionBox12'] }

let positionsForExpansionBox8 = { position: 'expansionBox8', unavailablePositions: ['expansionBox4', 'expansionBox9', 'expansionBox13', 'expansionBox14'] }
let positionsForExpansionBox9 = { position: 'expansionBox9', unavailablePositions: ['expansionBox4', 'expansionBox5', 'expansionBox8', 'expansionBox10', 'expansionBox14', 'expansionBox15'] }
let positionsForExpansionBox10 = { position: 'expansionBox10', unavailablePositions: ['expansionBox5', 'expansionBox6', 'expansionBox9', 'expansionBox11', 'expansionBox15', 'expansionBox16'] }
let positionsForExpansionBox11 = { position: 'expansionBox11', unavailablePositions: ['expansionBox6', 'expansionBox7', 'expansionBox10', 'expansionBox12', 'expansionBox16', 'expansionBox17'] }
let positionsForExpansionBox12 = { position: 'expansionBox12', unavailablePositions: ['expansionBox7', 'expansionBox11', 'expansionBox17', 'expansionBox18'] }

let positionsForExpansionBox13 = { position: 'expansionBox13', unavailablePositions: ['expansionBox8', 'expansionBox14', 'expansionBox19'] }
let positionsForExpansionBox14 = { position: 'expansionBox14', unavailablePositions: ['expansionBox8', 'expansionBox9', 'expansionBox13', 'expansionBox15', 'expansionBox19', 'expansionBox20'] }
let positionsForExpansionBox15 = { position: 'expansionBox15', unavailablePositions: ['expansionBox9', 'expansionBox10', 'expansionBox14', 'expansionBox16', 'expansionBox20', 'expansionBox21'] }
let positionsForExpansionBox16 = { position: 'expansionBox16', unavailablePositions: ['expansionBox10', 'expansionBox11', 'expansionBox15', 'expansionBox17', 'expansionBox21', 'expansionBox22'] }
let positionsForExpansionBox17 = { position: 'expansionBox17', unavailablePositions: ['expansionBox11', 'expansionBox12', 'expansionBox16', 'expansionBox18', 'expansionBox22', 'expansionBox23'] }
let positionsForExpansionBox18 = { position: 'expansionBox18', unavailablePositions: ['expansionBox12', 'expansionBox17', 'expansionBox23'] }

let positionsForExpansionBox19 = { position: 'expansionBox19', unavailablePositions: ['expansionBox13', 'expansionBox14', 'expansionBox20', 'expansionBox24'] }
let positionsForExpansionBox20 = { position: 'expansionBox20', unavailablePositions: ['expansionBox14', 'expansionBox15', 'expansionBox19', 'expansionBox21', 'expansionBox24', 'expansionBox25'] }
let positionsForExpansionBox21 = { position: 'expansionBox21', unavailablePositions: ['expansionBox15', 'expansionBox16', 'expansionBox20', 'expansionBox22', 'expansionBox25', 'expansionBox26'] }
let positionsForExpansionBox22 = { position: 'expansionBox22', unavailablePositions: ['expansionBox16', 'expansionBox17', 'expansionBox21', 'expansionBox23', 'expansionBox26', 'expansionBox27'] }
let positionsForExpansionBox23 = { position: 'expansionBox23', unavailablePositions: ['expansionBox17', 'expansionBox18', 'expansionBox22', 'expansionBox27'] }

let positionsForExpansionBox24 = { position: 'expansionBox24', unavailablePositions: ['expansionBox19', 'expansionBox20', 'expansionBox25', 'expansionBox28'] }
let positionsForExpansionBox25 = { position: 'expansionBox25', unavailablePositions: ['expansionBox20', 'expansionBox21', 'expansionBox24', 'expansionBox26', 'expansionBox28', 'expansionBox29'] }
let positionsForExpansionBox26 = { position: 'expansionBox26', unavailablePositions: ['expansionBox21', 'expansionBox22', 'expansionBox25', 'expansionBox27', 'expansionBox29', 'expansionBo30'] }
let positionsForExpansionBox27 = { position: 'expansionBox27', unavailablePositions: ['expansionBox22', 'expansionBox23', 'expansionBox26', 'expansionBox30'] }

let positionsForExpansionBox28 = { position: 'expansionBox28', unavailablePositions: ['expansionBox24', 'expansionBox25', 'expansionBox29'] }
let positionsForExpansionBox29 = { position: 'expansionBox29', unavailablePositions: ['expansionBox25', 'expansionBox26', 'expansionBox28', 'expansionBox30'] }
let positionsForExpansionBox30 = { position: 'expansionBox30', unavailablePositions: ['expansionBox26', 'expansionBox27', 'expansionBox29'] }


let unavailableExpansionPositionsArray = [
    positionsForExpansionBox1, positionsForExpansionBox2, positionsForExpansionBox3, positionsForExpansionBox4,
    positionsForExpansionBox5, positionsForExpansionBox6, positionsForExpansionBox7, positionsForExpansionBox8,
    positionsForExpansionBox9, positionsForExpansionBox10, positionsForExpansionBox11, positionsForExpansionBox12,
    positionsForExpansionBox13, positionsForExpansionBox14, positionsForExpansionBox15, positionsForExpansionBox16,
    positionsForExpansionBox17, positionsForExpansionBox18, positionsForExpansionBox19, positionsForExpansionBox20,
    positionsForExpansionBox21, positionsForExpansionBox22, positionsForExpansionBox23, positionsForExpansionBox24,
    positionsForExpansionBox25, positionsForExpansionBox26, positionsForExpansionBox27, positionsForExpansionBox28,
    positionsForExpansionBox29, positionsForExpansionBox30
];

function generateExpansionResourceValuesArray() {
    let valuesArray = [];
    for (let i = 3; i < 12; i++) {
        valuesArray.push(i);
        valuesArray.push(i);
        valuesArray.push(i);
    }
    valuesArray.push(12, 12);
    valuesArray.push(2, 2);
    valuesArray = valuesArray.filter(number => number !== 7);
    return valuesArray
}

function generateExpansionResourceTypesArray() {
    const typesArray = [];
    //Wood
    for (let i = 0; i <= 5; i++) {
        typesArray.push("forest");
    }
    //Sheep
    for (let i = 0; i <= 5; i++) {
        typesArray.push("pasture");
    }
    //Rock
    for (let i = 0; i <= 4; i++) {
        typesArray.push("mountain");
    }
    //Brick
    for (let i = 0; i <= 4; i++) {
        typesArray.push("hill");
    }
    //Weath
    for (let i = 0; i <= 5; i++) {
        typesArray.push("field");
    }
    typesArray.push("desert", "desert");
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

function randomizeExpansionResourceTile() {
    let tileArray = []
    const typesArray = generateExpansionResourceTypesArray()

    for (let i = 0; i < 30; i++) {
        let titleType = generateRandomResourceType(typesArray)
        let resourceTile = new resurceTile(titleType, 0);
        tileArray.push(resourceTile);
    }
    return tileArray
}

async function ExpansionRestart() {
    let tileValuesArray = []
    for (let i = 0; i < 30; i++) {
        //Generate tile with position
        const tileBox = document.getElementById(`expansionBox${i + 1}`)
        const childImages = tileBox.querySelectorAll("img");
        childImages[0].src = null
        const childParagraphs = tileBox.querySelectorAll("p");
        tileValuesArray.push(childParagraphs);
        childParagraphs[0].textContent = null
        childParagraphs[0].style.display = "";
    }
    return tileValuesArray
}

async function getAllExpansionTileBoxPositions() {
    let allExpansionTileBoxPositions = []
    for (let i = 0; i < 30; i++) {
        allExpansionTileBoxPositions.push(`expansionBox${i + 1}`)
    }
    return allExpansionTileBoxPositions
}

async function setDesertNotTouching() {
    let desertTileValuesArray = []
    let availableExpansionTileBoxPositions = []
    //get all positiotns
    let allExpansionTileBoxPositions = await getAllExpansionTileBoxPositions()
    availableExpansionTileBoxPositions = allExpansionTileBoxPositions
    let randomIndex = await getRandomInt(1, 30);
    //Set first desert tile
    const desertTileBox1 = document.getElementById(`expansionBox${randomIndex}`)
    const desertImg1 = desertTileBox1.querySelectorAll("img");
    desertImg1[0].src = `images/desert.png`
    desertTileValuesArray.push({ position: `expansionBox${randomIndex}`, type: "desert", unavailableExpansionPositions: unavailableExpansionPositionsArray[randomIndex - 1].unavailablePositions });
    //Remove all unusabel positions
    let availableDesertBoxPositions = await allExpansionTileBoxPositions.filter((item) => item !== `expansionBox${randomIndex}`);
    availableDesertBoxPositions = await availableDesertBoxPositions.filter(item => !unavailableExpansionPositionsArray[randomIndex - 1].unavailablePositions.includes(item));
    //Set second desert tile
    randomIndex = await getRandomInt(0, availableDesertBoxPositions.length - 1);
    const desertTileBox2 = document.getElementById(availableDesertBoxPositions[randomIndex])
    const desertImg2 = desertTileBox2.querySelectorAll("img");
    desertImg2[0].src = `images/desert.png`
    let desert2UnavailablePosititons = unavailableExpansionPositionsArray.find(obj => obj.position === availableDesertBoxPositions[randomIndex]);
    desertTileValuesArray.push({ position: availableDesertBoxPositions[randomIndex], type: "desert", unavailableExpansionPositions: desert2UnavailablePosititons.unavailablePositions });
    //set up array of all positions without the desert tiles
    availableExpansionTileBoxPositions = availableExpansionTileBoxPositions.filter((item) => item !== desertTileValuesArray[0].position);
    availableExpansionTileBoxPositions = availableExpansionTileBoxPositions.filter((item) => item !== desertTileValuesArray[1].position);
    return {
        desertTileValuesArray: desertTileValuesArray,
        availableExpansionTileBoxPositions: availableExpansionTileBoxPositions
    }
}

async function setExpanionsTiles(expansionBoardOptions) {
    if (expansionBoardOptions.desertsNotTouching === true) {
        let afterDesertTilesObject = await setDesertNotTouching()
        let tileValuesArray = []
        let resurceTilesValues = randomizeExpansionResourceTile()
        resurceTilesValues = resurceTilesValues.filter(item => item.type !== "desert");
        for (let i = 0; i < 28; i++) {
            //Generate tile with position
            const tileBox = document.getElementById(afterDesertTilesObject.availableExpansionTileBoxPositions[i])
            const childImages = tileBox.querySelectorAll("img");
            childImages[0].src = `images/${resurceTilesValues[i].type}.png`
            let unavailablePositions = unavailableExpansionPositionsArray.find(obj => obj.position === afterDesertTilesObject.availableExpansionTileBoxPositions[i]);
            tileValuesArray.push({ position: afterDesertTilesObject.availableExpansionTileBoxPositions[i], type: resurceTilesValues[i].type, unavailableExpansionPositions: unavailablePositions.unavailablePositions });
        }
        tileValuesArray.push(afterDesertTilesObject.desertTileValuesArray[0])
        tileValuesArray.push(afterDesertTilesObject.desertTileValuesArray[1])
        tileValuesArray.sort((a, b) => {
            const numericA = parseInt(a.position.match(/\d+/)[0]);
            const numericB = parseInt(b.position.match(/\d+/)[0]);
            return numericA - numericB;
        });
        return tileValuesArray
    } else if (expansionBoardOptions.desertsNotTouching === false) {
        const resurceTilesValues = randomizeExpansionResourceTile()
        let tileValuesArray = []
        for (let i = 0; i < 30; i++) {
            //Generate tile with position
            const tileBox = document.getElementById(`expansionBox${i + 1}`)
            const childImages = tileBox.querySelectorAll("img");
            childImages[0].src = `images/${resurceTilesValues[i].type}.png`
            tileValuesArray.push({ position: `expansionBox${i + 1}`, type: resurceTilesValues[i].type, unavailableExpansionPositions: unavailableExpansionPositionsArray[i].unavailablePositions });
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

async function setExpansionRedTileValues(expansionBoardOptions) {
    //Setting all tiles

    let tileValuesArray = await setExpanionsTiles(expansionBoardOptions)
    //Remove old desert no-display
    for (let i = 0; i < 30; i++) {
        const oldBox = document.getElementById(`expansionBox${i + 1}`)
        const oldParaf = oldBox.querySelectorAll("p");
        oldParaf[0].style.display = "";
    }
    //remove dessert fom tile array
    let desertTile = await tileValuesArray.filter(item => item.type == "desert");

    for (let i = 0; i < 2; i++) {
        let desertTilePosition = desertTile[i].position
        const desert = document.getElementById(desertTilePosition)
        const desertParaf = desert.querySelectorAll("p");
        desertParaf[0].style.display = "none";
    }
    tileValuesArray = await tileValuesArray.filter(item => item.type !== "desert");

    let randomPosition;
    let tileBox;
    let childParagraphf;
    let tile;
    let tileforbidenPositions;

    const redValues = [6, 6, 6, 8, 8, 8]
    let redValueTilePositions = []
    let freeTilesAfterRed = tileValuesArray

    for (let i = 0; i < 6; i++) {
        //Setting red tile value
        let randomIndex = await getRandomInt(0, tileValuesArray.length - 1);
        randomPosition = await tileValuesArray[randomIndex].position;
        tileBox = await document.getElementById(randomPosition)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = redValues[i]
        childParagraphf[0].style.color = "#f30909";
        //removing forbiden tiles
        tile = await tileValuesArray.find(item => item.position == randomPosition);
        tileforbidenPositions = tile.unavailableExpansionPositions
        tileforbidenPositions.push(randomPosition)
        tileValuesArray = await tileValuesArray.filter(item => !tileforbidenPositions.includes(item.position));

        redValueTilePositions.push(randomPosition)
    }
    freeTilesAfterRed = await freeTilesAfterRed.filter(item => !redValueTilePositions.includes(item.position));
    return freeTilesAfterRed
}

async function setExpansion2and12Values(freeTilesAfterRed) {

    let randomPosition;
    let tileBox;
    let childParagraphf;
    let tile;
    let tileforbidenPositions;

    let otherValues = [2, 2, 12, 12]
    let smallValueTilePositions = []
    let freeTilesAfterSmall = freeTilesAfterRed

    for (let i = 0; i < 4; i++) {
        //Setting red tile value
        let randomIndex = await getRandomInt(0, freeTilesAfterRed.length - 1);
        randomPosition = await freeTilesAfterRed[randomIndex].position;
        tileBox = await document.getElementById(randomPosition)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = otherValues[i]
        childParagraphf[0].style.color = "#000000";
        //removing forbiden tiles
        tile = await freeTilesAfterRed.find(item => item.position == randomPosition);
        tileforbidenPositions = tile.unavailableExpansionPositions;
        tileforbidenPositions.push(randomPosition);
        freeTilesAfterRed = await freeTilesAfterRed.filter(item => !tileforbidenPositions.includes(item.position));

        smallValueTilePositions.push(randomPosition)
    }
    freeTilesAfterSmall = await freeTilesAfterSmall.filter(item => !smallValueTilePositions.includes(item.position));
    return freeTilesAfterSmall
}

async function setOtherExpansionTileValues(options, freeTiles) {
    let otherValues
    if (options.smallValuesNotTouching === true) {
        otherValues = [3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9, 10, 10, 10, 11, 11, 11]
    } else {
        otherValues = [2, 2, 12, 12, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9, 10, 10, 10, 11, 11, 11]
    }
    otherValues = await shuffleArray(otherValues)

    for (let i = 0; i < otherValues.length; i++) {
        const tileBox = document.getElementById(freeTiles[i].position)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = otherValues[i]
        childParagraphf[0].style.color = "#000000";
    }
}

async function setExpansionBoard(expansionBoardOptions) {
    try {
        const freeTilesAfterRed = await setExpansionRedTileValues(expansionBoardOptions)
        if (expansionBoardOptions.smallValuesNotTouching === true) {
            const freeTilesAfterSmall = await setExpansion2and12Values(freeTilesAfterRed)
            await setOtherExpansionTileValues(expansionBoardOptions, freeTilesAfterSmall)
        } else {
            await setOtherExpansionTileValues(expansionBoardOptions, freeTilesAfterRed)
        }
    } catch (error) {
        throw error;
    }
}
