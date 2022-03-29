// 3
const isValidDateFormat = (str) => {
    const regexp = (/^\d\d\d\d\/\d\d\/\d\d\s\d\d:\d\d$/g);
    return regexp.test(str);
}

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false

export default isValidDateFormat;