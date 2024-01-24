let currentScore = 0;
let playing = false;
let shape1;
let shape2;
const matchBtn = document.getElementById('match');

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
        //新しいshapeができたらmatchボタンを再び押せるようにする
        matchBtn.disabled = false;

        shape1 = selectRandomShape();
        shape2 = selectRandomShape();

        const shape1Style = `width:${shape1.width + 'px'};
                             background:${shape1.color};
                             height:${shape1.height + 'px'};`

        const shape2Style = `width:${shape2.width + 'px'};
                             background:${shape2.color};
                             height:${shape2.height + 'px'};`
        // console.log(shape1Style);
        // console.log(shape2Style);

        document.getElementById('shape1').style.cssText = shape1Style;
        document.getElementById('shape2').style.cssText = shape2Style;

    }, 1000);
}

//Start game
//document.getElementById('play').addEventListener('click', repeatRandomShape);

document.getElementById('play').onclick = () => {
    playing = true;

    //play中はplayボタンを押せないようにする
    document.getElementById('play').disabled = true;
    repeatRandomShape();
}

//Compare
document.getElementById('match').onclick = () => {
    //playing = true (playボタンが押された時だけ)
    if (playing) {
        //matchボタンが１回押されたら押せないようにする
        matchBtn.disabled = true;
        if (Object.is(shape1, shape2)) {
            currentScore++;
            document.getElementById('score').innerHTML = currentScore;
        } else {
            currentScore--;
            document.getElementById('score').innerHTML = currentScore;
        }
    }
}





