// Core formatting logic
// Returns the formatted number string.

import { units } from "./default/units";
import { convertNumber, deciPoint } from "./utils";

export const formatNumber = (num: number, decimalPlaces?: number) => {
    
    const defaultDecimal = 2;

    // Below thousand formatting logic
    if (num >= 0 && num < units.thousand) {
        return num.toString();
    }
    // Thousand formatting logic
    else if (num >= units.thousand && num < units.million) {

        return decimalPlaces === undefined ? `${convertNumber(num, units.thousand, defaultDecimal)}K` : `${convertNumber(num, units.thousand, decimalPlaces)}K`;

    }
    // Million formatting logic
    else if (num >= units.million && num < units.billion) {

        return decimalPlaces === undefined ? `${convertNumber(num, units.million, defaultDecimal)}M` : `${convertNumber(num, units.million, decimalPlaces)}M`;

    }
    // Billion formatting logic
    else if (num >= units.billion && num < units.trillion) {

        return decimalPlaces === undefined ? `${convertNumber(num, units.billion, defaultDecimal)}B` : `${convertNumber(num, units.billion, decimalPlaces)}B`;

    }
    
}