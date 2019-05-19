export default function rollRandomNumber(min: number | null, max: number | null){

    let  output = null
    if(!min || !max){
        output = 0
    } else {

        output = Math.round(min + Math.random() * (max - min));
    }
    return output;
}