// Jest test file for formatting logic

import { units } from "../src/constants/units";
import formatNumber from "../src/format"

describe("formatNumber", () => {
    // Decimals Testing
    it("Handles Decimal Places", () => {
        expect(formatNumber(1234, 1)).toBe("1.2K");
        expect(formatNumber(1234, 2)).toBe("1.23K");
        expect(formatNumber(1234, 3)).toBe("1.234K");
    });

    // Format Testing
    it("Formarts Below Thousands", () => {
        expect(formatNumber(units.hundred.value)).toBe("100");
    });

    it("Formarts Thousands", () => {
        expect(formatNumber(units.thousand.value)).toBe("1K");

    });

    it("Formarts Millions", () => {
        expect(formatNumber(units.million.value)).toBe("1M");
    });

    it("Formarts Billions", () => {
        expect(formatNumber(units.billion.value)).toBe("1B");
    });

    it("Formarts Trillions", () => {
        expect(formatNumber(units.trillion.value)).toBe("1T");

    });

    it("Formarts Quadrillions", () => {
        expect(formatNumber(units.quadrillion.value)).toBe("1Q");
    });

    it("Formarts Quintillions", () => {
        expect(formatNumber(units.quintillion.value)).toBe("1Qt");
    });

    it("Formarts Sextillions", () => {
        expect(formatNumber(units.sextillion.value)).toBe("1St");
    });

    it("Formarts Septillions", () => {
        expect(formatNumber(units.septillion.value)).toBe("1Sp");
    });

    it("Formarts Octillions", () => {
        expect(formatNumber(units.octillion.value)).toBe("1O");
    });

    it("Formarts Nonillions", () => {
        expect(formatNumber(units.nonillion.value)).toBe("1N");
    });

    it("Formarts Decillions", () => {
        expect(formatNumber(units.decillion.value)).toBe("1D");
    });
});