function encrypt(str, n) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let isUpperCase = char === char.toUpperCase();
            let x = char.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
            let encrypted = (x + n) % 26;
            let encryptedChar = String.fromCharCode(
                encrypted + "a".charCodeAt(0)
            );
            result += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
        } else {
            result += char;
        }
    }

    return result;
}

function decrypt(str, n) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let isUpperCase = char === char.toUpperCase();
            let x = char.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
            let decrypted = (x - n + 26) % 26;
            let decryptedChar = String.fromCharCode(
                decrypted + "a".charCodeAt(0)
            );
            result += isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
        } else {
            result += char;
        }
    }

    return result;
}

export { encrypt, decrypt };
