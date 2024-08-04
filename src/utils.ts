// Utility functions - rounding, decimal places

export const convertNumber = (num: number, unit: number, point?: number) => {
    const converted = num / unit;
    
    const strnum = converted.toString();
    if (strnum.includes(".")) {
        if (point === undefined) {
            if (strnum.includes("0")) {
                return parseFloat(strnum.slice(0, strnum.lastIndexOf("0") + 1));
            }
            else {
                return parseFloat(strnum);
            }
        }
        else {
            return deciPoint(converted, point)
        }
    }
    else {
        return converted;
    }
}

export const deciPoint = (num: number, decimalPoint: number) => {
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