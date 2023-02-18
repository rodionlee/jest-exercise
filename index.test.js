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

test("Capitalizes a string", () => {
    expect(capitalize("closet")).toBe("Closet");
});

test("Removes upper case from rest of the string", () => {
    expect(capitalize("cLOset")).toBe("Closet");
}); 

test("Reverses a string", () => {
    expect(reverseString("reverse me")).toBe("em esrever");
});

test("Adds 2 numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("Multiplies 2 numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test("Subtract 2 numbers", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Divide 2 numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
});