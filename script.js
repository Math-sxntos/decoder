let textInput = document.querySelector('#text__area');
let textOutput = document.querySelector('#message__content');
const textArea = document.getElementById('text__area');

textArea.addEventListener('input', function() {
    textArea.value = removeSpecialCharacters();
}); 

function removeSpecialCharacters(text) {
    return text
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function encrypt() {
    let text = textInput.value.trim();
    if (text != '') {
    let textEncrypted = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

    textOutput.innerHTML = '<textarea readonly id="text__output">' + textEncrypted + '</textarea>' +
                           '<button class="button__c" id="copy" onclick="copy()">Copy</button>';
    } else {
        alertEncrypt();
        return;
    }
}

function decrypt() {
    let text = textInput.value.trim();
    if (text != '') {
    let textDecrypted = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');

    textOutput.innerHTML = '<textarea readonly id="text__output">' + textDecrypted + '</textarea>' +
                           '<button class="button__c" id="copy" onclick="copy()">Copy</button>';
    } else {
        alertDecrypt();
        return;
    }
}

function copy() {
    let textCopy = document.getElementById('text__output');
    textCopy.select();
    document.execCommand('copy');
    clean();
    alert('The message has been copied to the clipboard!');
}

function resetContent() {
    textOutput.innerHTML = '<img src="./assets/box-pinguim.png" alt="">' +
                           '<h1>No messages found</h1>' +
                           '<h3>Enter a message to encrypt or decrypt.</h3>';
}

function alertEncrypt(){
    alert('Enter a message that you want to encrypt.');
}

function alertDecrypt(){
    alert('Enter a message that you want to decrypt.');
}

function clean() {
    textInput = document.querySelector('#text__area');
    textInput.value = '';
}

resetContent();