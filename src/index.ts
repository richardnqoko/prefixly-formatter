import { formatNumber } from "./format";

// Entry file - main module
export const prefX = (num: number, point?: number) => {
    return formatNumber(num, point);
}