// Jest test file for utility functions

import { units } from "../src/constants/units";
import { convertNumber } from "../src/utils";

describe("convertNumber", () => {
    it("Rounds Thousands", () => {
        expect(convertNumber(1000, units.thousand.value)).toBe(1);
        expect(convertNumber(1200, units.thousand.value)).toBe(1.2);
        expect(convertNumber(1230, units.thousand.value)).toBe(1.23);
        expect(convertNumber(1234, units.thousand.value)).toBe(1.234);
    });
    
    it("Rounds Millions", () => {
        expect(convertNumber(units.million.value + (units.million.value/2), units.million.value)).toBe(1.5);
    });
    
    it("Rounds Billions", () => {
        expect(convertNumber(units.billion.value + (units.billion.value / 2n), units.billion.value)).toBe(1.5);
    });
    
    it("Rounds Trillions", () => {
        expect(convertNumber(units.trillion.value + (units.trillion.value / 2n), units.trillion.value)).toBe(1.5);
    });
    
    it("Rounds Quadrillions", () => {
        expect(convertNumber(units.quadrillion.value + (units.quadrillion.value / 2n), units.quadrillion.value)).toBe(1.5);
    });
    
    it("Rounds Quintillions", () => {
        expect(convertNumber(units.quintillion.value + (units.quintillion.value / 2n), units.quintillion.value)).toBe(1.5);
    });
    
    it("Rounds Sextillions", () => {
        expect(convertNumber(units.sextillion.value + (units.sextillion.value / 2n), units.sextillion.value)).toBe(1.5);
    });
    
    it("Rounds Septillions", () => {
        expect(convertNumber(units.septillion.value + (units.septillion.value / 2n), units.septillion.value)).toBe(1.5);
    });
    
    it("Rounds Octillions", () => {
        expect(convertNumber(units.octillion.value + (units.octillion.value / 2n), units.octillion.value)).toBe(1.5);
    });
    
    it("Rounds Nonillions", () => {
        expect(convertNumber(units.nonillion.value + (units.nonillion.value / 2n), units.nonillion.value)).toBe(1.5);
    });
    
    it("Rounds Decillions", () => {
        expect(convertNumber(units.decillion.value + (units.decillion.value / 2n), units.decillion.value)).toBe(1.5);
    });
});
