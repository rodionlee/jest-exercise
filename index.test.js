import {capitalize, reverseString, calculator, ceasarCypher, analyzeArray} from "./index.js"

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

test("Subtracts 2 numbers", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Divides 2 numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test("Uses Ceasar's Cypher", () => {
    expect(ceasarCypher("attack")).toBe("fyyfhp");
});

test("Leaves spaces intact with Ceasar's Cypher", () => {
    expect(ceasarCypher("attack at dawn")).toBe("fyyfhp fy ifbs");
});

test("Leaves punctuation intact with Ceasar's Cypher", () => {
    expect(ceasarCypher("attack at dawn!")).toBe("fyyfhp fy ifbs!");
});

test("Wraps around with Ceasar's Cypher", () => {
    expect(ceasarCypher("defend the east wall of the castle")).toBe("ijkjsi ymj jfxy bfqq tk ymj hfxyqj");
});

test("Analyzes an array for max, min, average and length", () => {
    expect(analyzeArray([1,6,3,2,7,9,23,1,34]).max).toBe(34);
    expect(analyzeArray([1,6,3,2,7,9,23,1,34]).min).toBe(1);
    expect(analyzeArray([1,6,3,2,7,9,23,1,34]).average).toBe(10);
    expect(analyzeArray([1,6,3,2,7,9,23,1,34]).length).toBe(9);
});
