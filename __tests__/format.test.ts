// Jest test file for formatting logic

import { formatNumber } from "../src/format"

describe("formatNumber", () => {
    // Decimals Testing
    it("Handles Decimal Places", () => {
        expect(formatNumber(1234, 1)).toBe("1.2K");
        expect(formatNumber(1234, 2)).toBe("1.23K");
        expect(formatNumber(1234, 3)).toBe("1.234K");
    });

    // Format Testing
    it("Formarts Below Thousands", () => {
        expect(formatNumber(10)).toBe("10");
        expect(formatNumber(123)).toBe("123");
        expect(formatNumber(500)).toBe("500");
        expect(formatNumber(345)).toBe("345");
        expect(formatNumber(60)).toBe("60");
        expect(formatNumber(2)).toBe("2");
    });

    it("Formarts Thousands", () => {
        expect(formatNumber(1000)).toBe("1K");
        expect(formatNumber(1234)).toBe("1.23K");
        expect(formatNumber(10000)).toBe("10K");
        expect(formatNumber(12345)).toBe("12.34K");
        expect(formatNumber(100000)).toBe("100K");
        expect(formatNumber(123456)).toBe("123.45K");
    });

    it("Formarts Millions", () => {
        expect(formatNumber(1000000)).toBe("1M");
        expect(formatNumber(1234000)).toBe("1.23M");
        expect(formatNumber(10000000)).toBe("10M");
        expect(formatNumber(12345000)).toBe("12.34M");
        expect(formatNumber(100000000)).toBe("100M");
        expect(formatNumber(123456000)).toBe("123.45M");
    });

    it("Formarts Billions", () => {
        expect(formatNumber(1000000000)).toBe("1B");
        expect(formatNumber(1234000000)).toBe("1.23B");
        expect(formatNumber(10000000000)).toBe("10B");
        expect(formatNumber(12345000000)).toBe("12.34B");
        expect(formatNumber(100000000000)).toBe("100B");
        expect(formatNumber(123456000000)).toBe("123.45B");
    });
});