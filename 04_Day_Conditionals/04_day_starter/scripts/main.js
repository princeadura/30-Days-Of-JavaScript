// this is your main.js script

//alert('Open the browser console whenever you work on JavaScript')
let weekday=  prompt('what day of the week is it')
 weekday = weekday.toLowerCase()

switch (weekday){
    case 'monday':
    console.log(' hurray its monday')
    break
    case 'tuesday':
        console.log('its boring tuesday')
        break
        case 'wednesday':
            console.log('its midweek')
            break
            case 'thursday':
                console.log('its thursday')
                break
                case 'friday':
                console.log('its friday')
                break
                case 'saturday':
                    console.log('its weekend')
                    break
                    case 'sunday':
                        console.log('finally sunday')
                        break
                        default:
                        console.log('this is not a day of the week')

}
let question = prompt("enter your age")

if (question === 18){
console.log('you just became  eligibe to drive')
}else if(question > 18){
    console.log('you are eligibe to drive')
}else if (question < 18){
    console.log('you are not eligible to drive')
}