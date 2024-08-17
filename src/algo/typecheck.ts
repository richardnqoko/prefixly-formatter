import { units } from "../constants/units";

// determine whether a value is a bigint
export function isBigInt(num: string) {
    const max_value = Math.pow(2, 53) - 1;
    const conv = Number(num);

    if (conv > max_value) {
        return true;
    }
    else {
        return false;
    }
}

// check whether number types match
export function typematch(num: any, unit: any) {

    num = new String(num);
    unit = new String(unit);
    let res = 0;

    if (isBigInt(num)) {

        const lengthofnum = num.length / 2;
        const lengthofunit = lengthofnum;

        const strippedNum = num.slice(0, lengthofnum);
        const strippedUnit = unit.slice(0, lengthofunit);

        res = parseInt(strippedNum) / parseInt(strippedUnit);
    }
    else{
        res = parseInt(num) / parseInt(unit);
    }

    return res;

}