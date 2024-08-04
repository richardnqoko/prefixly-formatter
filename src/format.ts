// Core formatting logic
// Returns the formatted number string.

import { units } from "./default/units";
import { convertNumber, deciPoint } from "./utils";

export const formatNumber = (num: number, decimalPlaces?: number) => {
    
    const defaultDecimal = 2;

    // Thousands formatting logic
    if (num >= units.thousand) {

        return decimalPlaces === undefined ? `${convertNumber(num, units.thousand, defaultDecimal)}K` : `${convertNumber(num, units.thousand, decimalPlaces) }K`;
        
    }
}