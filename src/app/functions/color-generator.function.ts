export function generateColor(): string{
    let hexNum = (Math.floor(Math.random() * (16777215))).toString(16);
    let zeros = "";
    for (let i = 0; i < 6 - hexNum.length; i++) {
        zeros += "0";                
    }
    return hexNum = `#${zeros}${hexNum}`;
}