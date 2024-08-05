import { formatNumber } from "./format";

// Entry file - main module
export const prefx = (num: any, point?: number) => {
    return formatNumber(num, point);
}