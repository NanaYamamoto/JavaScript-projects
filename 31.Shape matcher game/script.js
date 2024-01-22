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


const showColor = () => {
    const selectRandomShape = () => {
        const randomNum = Math.floor(Math.random() * shapes.length);
        const randomShape = shapes[randomNum];
        return randomShape;
    }
    shape1 = selectRandomShape();
    shape2 = selectRandomShape();

    document.getElementById('shape1').style.background = shape1.color;
    document.getElementById('shape1').style.width = shape1.width;
    document.getElementById('shape1').style.height = shape1.height;

    document.getElementById('shape2').style = shape2;


}
setInterval(showColor, 1000);


// var play = () => {
//     document.getElementById('score').innerHTML = 'start!';
// }

// document.getElementById('play').addEventListener('click', play);

