let currentScore = 0;
let playing = false;
let shape1;
let shape2;

const shapes = [
    { color: 'red', width: 250, height: 160 },
    { color: 'red', width: 270, height: 150 },
    { color: 'yellow', width: 320, height: 170 },
    { color: 'yellow', width: 310, height: 180 },
    { color: 'blue', width: 190, height: 160 },
    { color: 'blue', width: 200, height: 175 },
    { color: 'purple', width: 380, height: 185 },
    { color: 'purple', width: 400, height: 120 },
    { color: 'green', width: 370, height: 145 },
    { color: 'green', width: 440, height: 160 }
]

//ランダムなshapeを選ぶ
const selectRandomShape = () => {
    const randomNum = Math.floor(Math.random() * shapes.length);
    const randomShape = shapes[randomNum];
    return randomShape;
}

//shapeを毎秒ごとに変える
const repeatRandomShape = () => {
    setInterval(() => {
        shape1 = selectRandomShape();
        shape2 = selectRandomShape();
    }, 1000);
}

document.getElementById('play').addEventListener('click', repeatRandomShape);




