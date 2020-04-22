// controller
function selectBar(barNo) {
    if (selectBarNo == barNo) {
        selectBarNo = null;
    } else {
        selectBarNo = barNo;
    }
    show();
}

function removeBar() {
    numbers.splice(selectBarNo - 1, 1);
    selectBarNo = null;
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