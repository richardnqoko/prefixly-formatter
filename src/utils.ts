// Utility functions - rounding, decimal places

import { isBigInt, typematch } from "./algo/typecheck";
import { units } from "./constants/units";

// Converts integers below the range of the BigInt type
export const convertNumber = (num: any, unit: any, point?: number) => {
    
    const converted = typematch(num, unit);

    let strnum = converted.toString();
    if (strnum.includes(".")) {
        let after_deci = strnum.slice(strnum.lastIndexOf(".") + 1, strnum.length - 1);
        const before_deci = strnum.slice(0, strnum.lastIndexOf("."));
        if (after_deci.length > 5) {
            after_deci = after_deci.slice(0, 6);
            strnum = [before_deci, after_deci].join(".");
        }

        if (point === undefined) {
            if (strnum.includes("0")) {
                const zero = strnum.lastIndexOf("0");
                const last = strnum.length - 1;
                if(zero !== last )
                return parseFloat(strnum.slice(0, strnum.lastIndexOf("0") + 1));
            }
            else {
                return parseFloat(strnum);
            }
        }
        else {
            return decipoint(converted, point)
        }
    }
    else {
        return converted;
    }
}


// decimal place logic for integers
export const decipoint = (num: number, decimalPoint: number) => {

    if (num % 1 === 0) {
        return num;
    }
    else {
        const value = num.toString();

        let num_split: string[] = value.split(".");

        const stripped = num_split[1].slice(0, (decimalPoint));

        num_split.pop()
        num_split.push(stripped);

        const res = num_split.join('.');

        return parseFloat(res);
    }
}

convertNumber(BigInt("1000000000000000000000000000000000"), units.decillion.value)