// controller
function selectBar(barNo) {
    if (selectBarNo == barNo) {
        buttonState = 'disabled';
        selectBarNo = null;
    } else {
        buttonState = null;
        selectBarNo = barNo;
    }
    show();
}

function removeBar() {
    numbers.splice(selectBarNo - 1, 1);
    selectBarNo = null;
    buttonState = 'disabled';
    show();
}

function changeBar() {
    if (inputValue >= 1 && inputValue <= 10) {
        numbers[selectBarNo - 1] = inputValue;
        error = null;
    } else {
        error = 'Ugyldig verdi';
    }
    show();
}

function addBar() {
    if (inputValue >= 1 && inputValue <= 10) {
        numbers.push(inputValue);
        error = null;
    } else {
        error = 'Ugyldig verdi';
    }
    show();
}