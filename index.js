export {capitalize, reverseString, calculator, ceasarCypher, analyzeArray}

function capitalize(string) {
    let newString = string.charAt(0).toUpperCase();
    newString = newString.concat(string.slice(1).toLowerCase());
    return newString;
}

function reverseString(string) {
    let newString = string.split("");
    let newString2 = [];
    for (let i = newString.length; i > -1; i--) {
        newString2.push(newString[i]);
    }
    newString2 = newString2.join("");
    return newString2;
}

let calculator = {
    add(a, b) {
        return a + b;
    },
    
    multiply(a, b) {
        return a * b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    } 
}

function ceasarCypher(initialString) {
    const shift = 5;
    initialString = initialString.split("");
    let newString = [];
    initialString.forEach(element => {
        let newChar;
        if ((element === " ") 
            || (element === ",") 
            || (element === ".") 
            || (element === "!") 
            || (element === ".")
            || (element === ":")
            || (element === "?")) {
            newChar = element;
        } else {
            let charCode = element.charCodeAt(0) + shift;
            if (charCode > 122) {
                charCode = charCode - 122 + 96
            }
            else if (charCode < 97) {
                charCode = 122 - 97 - charCode
            } 
            newChar = String.fromCharCode(charCode)
        }
        newString.push(newChar);
    });
    newString = newString.join("");

    return newString;
}

function analyzeArray(array) {
    const object = {
        max: 0,
        min: 0,
        average: 0,
        length: 0,
    };
    object.max = array.reduce((max, curr) => { 
        return (curr > max) ? curr : max;
    });
    object.min = array.reduce((min, curr) => { 
        return (curr < min) ? curr : min;
    });
    object.average = Math.round(array.reduce((sum, curr) => { 
        return sum += curr;
    }) / array.length);
    object.length = array.length;
    return object;
}