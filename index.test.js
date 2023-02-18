function capitalize(string) {
    let newString = string.charAt(0).toUpperCase();
    newString = newString.concat(string.slice(1).toLowerCase());
    return newString;
}

test("Capitalizes a string", () => {
    expect(capitalize("closet")).toBe("Closet");
});

test("Removes upper case from rest of the string", () => {
    expect(capitalize("cLOset")).toBe("Closet");
}); 