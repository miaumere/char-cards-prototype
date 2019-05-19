export default function TimeFormatter(date: number | null) {

    if(!date) {
        return "__-__-__";
    }


    let dateObj = new Date(date * 1000)

    const year = dateObj.getFullYear()

    let month = dateObj.getMonth()
    if(month <= 9) {
        month += 1
        month = 0 + month;
    };

    let day = dateObj.getDate()
    if(day <= 9) {
        day = 0 + day;
    };

    const output = `${year}-${month}-${day}`

    return output;
}