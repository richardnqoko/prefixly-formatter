import { units } from "../constants/units";

// determines the unit type
export const determine  = (num: any) => {

    let baseUnit : string = "";

    let unit_start: string;
    let unit_limit: string;

    // Above zero and below thousand
    unit_start = "zero";
    unit_limit = "thousand";
    
    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "default";
    }

    // Above thousand and below million
    unit_start = "thousand";
    unit_limit = "million";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "thousand";
    }

    // Above million and below billion
    unit_start = "million";
    unit_limit = "billion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "million";
    }

    // Above billion and below trillion
    unit_start = "billion";
    unit_limit = "trillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "billion";
    }

    // Above trillion and below quadrillion
    unit_start = "trillion";
    unit_limit = "quadrillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "trillion";
    }

    // Above quadrillion and below quintillion
    unit_start = "quadrillion";
    unit_limit = "quintillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "quadrillion";
    }

    // Above quintillion and below sextillion
    unit_start = "quintillion";
    unit_limit = "sextillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "quintillion";
    }

    // Above sextillion and below septillion
    unit_start = "sextillion";
    unit_limit = "septillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "sextillion";
    }
    // Above septillion and below octillion
    unit_start = "septillion";
    unit_limit = "octillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "septillion";
    }

    // Above octillion and below nonillion
    unit_start = "octillion";
    unit_limit = "nonillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "octillion";
    }

    // Above nonillion and below decillion
    unit_start = "nonillion";
    unit_limit = "decillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "nonillion";
    }

    // Above decillion and below undecillion
    unit_start = "decillion";
    unit_limit = "undecillion";

    if (num >= units[unit_start].value && num < units[unit_limit].value) {
        baseUnit = "decillion";
    }

    return baseUnit;
}