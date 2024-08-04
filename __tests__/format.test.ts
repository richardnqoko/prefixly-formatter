// Jest test file for formatting logic

import { formatNumber } from "../src/format"

describe("formatNumber", () => {
    it("Handles Decimal Places", () => {
        expect(formatNumber(1234, 1)).toBe("1.2K");
        expect(formatNumber(1234, 2)).toBe("1.23K");
        expect(formatNumber(1234, 3)).toBe("1.234K");
    });

    it("Formarts Thousands", () => {
        expect(formatNumber(1000)).toBe("1K");
        expect(formatNumber(1234)).toBe("1.23K");
        expect(formatNumber(10000)).toBe("10K");
        expect(formatNumber(12345)).toBe("12.34K");
        expect(formatNumber(100000)).toBe("100K");
        expect(formatNumber(123456)).toBe("123.45K");
    });
});