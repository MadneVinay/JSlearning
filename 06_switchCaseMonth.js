function monthofyear(month){
    switch (month) {
        case 1:
            console.log(`${month}st Month is Janaury`);
            break;
            case 2:
            console.log(`${month}nd Month is February`);
            break;
            case 3:
            console.log(`${month}rd Month is March`);
            break;
            case 4:
            console.log(`${month}th Month is April`);
            break;
            case 5:
            console.log(`${month}th Month is May`);
            break;
            case 6:
            console.log(`${month}th Month is June`);
            break;
            case 7:
            console.log(`${month}th Month is July`);
            break;
            case 8:
            console.log(`${month}th Month is August`);
            break;
            case 9:
            console.log(`${month}th Month is September`);
            break;
            case 10:
            console.log(`${month}th Month is Octomber`);
            break;
            case 11:
            console.log(`${month}th Month is November`);
            break;
            case 12:
            console.log(`${month}th Month is December`);
            break;
            
        default:
            console.log(`Given ${month} is invalid`);
            break;
    }
}
monthofyear(0)
monthofyear(2)
monthofyear(5)
monthofyear(12)
monthofyear(15)
monthofyear(100)
monthofyear(null)
monthofyear(undefined)
monthofyear('vinay')