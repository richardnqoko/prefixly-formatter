import { formatNumber } from "./format";

// Entry file - main module
export const prefx = (num: number, point?: number) => {
    return formatNumber(num, point);
}