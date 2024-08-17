// Core formatting logic

import { determine } from "./algo/determiner";
import { units } from "./constants/units";
import { convertNumber } from "./utils";

// Formatting method returns string
function formatNumber(num: number|bigint, decimalPlaces?:number){
    
    // use determiner module to find the unit name
    const unitName : string = determine(num);

    const defaultDecimal = 2;

    if (unitName === "default") {
            return num.toString();
    }
    else {
        return decimalPlaces === undefined ? `${convertNumber(num, units[unitName].value, defaultDecimal)}${units[unitName].abbr}` : `${convertNumber(num, units[unitName].value, decimalPlaces)}${units[unitName].abbr}`;
    }

}

export default formatNumber;