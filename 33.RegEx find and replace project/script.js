
document.getElementById('replaceBtn').addEventListner('click', () => {
    let originalText = document.querySelector('p')[0];
    let modifiedText = document.querySelector('p')[1];

    let oldcharacter = document.getElementById('find').value;
    let newcharacter = document.getElementById('replace').value;

    let newText = originalText.innerHTML.replace(oldcharacter, newcharacter);
    modifiedText.innerHTML = newText;

});
