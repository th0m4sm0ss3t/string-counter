let getMotRentre = document.querySelector('#inputText');
getMotRentre.addEventListener('keypress', getTextLenght);

let insertMotRentre = document.querySelector('span');

function getTextLenght(event){
    //touche entrée
    if(event.keyCode == 13) {
        if(getMotRentre.value.length > 1){
            insertMotRentre.innerHTML = getMotRentre.value.length + " caractères.";
        } else {
            insertMotRentre.innerHTML = getMotRentre.value.length + " caractère.";
        }
        
    }
}

