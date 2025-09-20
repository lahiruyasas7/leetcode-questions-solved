function findMaxChar(str: string) {
    let charCount: { [key: string]: number } = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let [key, value] of Object.entries(charCount)) {
        if ((value as number) > max) {
            max = value as number;
            maxChar = key;
        }
    }

    return { maxChar, max };
}

console.log(findMaxChar('mmmamaa'));