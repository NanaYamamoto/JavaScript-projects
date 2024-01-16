// em = required / parent 
//var initialResult = document.getElementById('result');
//console.log(initialResult);

var button = document.querySelector('button');

//結果を出す関数
var caluclateResult = () => {
    var parentVal = document.getElementById('parent').value;
    var requiredVal = document.getElementById('required').value;

    if (!parentVal | !requiredVal) {
        alert('Please fill in all fields.')
    } else {
        document.getElementById('result').innerHTML = requiredVal / parentVal;
    }
}

button.addEventListener('click', caluclateResult);



