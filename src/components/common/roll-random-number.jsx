export default function rollRandomNumber(min, max){
    const output = Math.round(min + Math.random() * (max - min));
    return output;
}