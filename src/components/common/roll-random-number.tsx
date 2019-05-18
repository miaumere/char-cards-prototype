export default function rollRandomNumber(min: number, max: number){
    const output = Math.round(min + Math.random() * (max - min));
    return output;
}