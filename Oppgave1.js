function isDateValid(date) {
    var year = date.slice(6, 10);
    var month = date.slice(3, 5);
    var day = date.slice(0, 2);

    return dateLength(date) && dateDot(date) && dateYear(year) && dateMonth(month) && dateDay(day, month, year);
}

function dateLength(date) {
    return date.length == 10;
}
    
function dateDot(date) {
    return date.charAt(2) == '.' && date.charAt(5) == '.';
}

function dateYear(year) {
    return year.length == 4 && year >= '0000' && year <= '9999';
}

function dateMonth(month) {
    return month.length == 2 && month >= '01' && month <= '12';
}

function dateDay(day, month, year) {
    if (day >= 01 && day <= 28) return true;
    if (day >= 01 && day == 29 && isLeapYear(year)) return true;
    if (day >= 01 && day <= 30 && !(month == 02)) return true;
    if (day >= 01 && day == 31 && month.match(/^01|03|05|07|08|10|12$/)) return true;
    return false;
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}