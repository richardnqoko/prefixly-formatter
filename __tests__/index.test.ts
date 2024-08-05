// Jest test file for main entry module

import { prefx } from "../src";

describe("prefx", () => {

    it("Formarts Thousands From MAIN MODULE", () => {
        expect(prefx(1000)).toBe("1K");
        expect(prefx(1234)).toBe("1.23K");
        expect(prefx(10000)).toBe("10K");
        expect(prefx(12345)).toBe("12.34K");
        expect(prefx(100000)).toBe("100K");
        expect(prefx(850600)).toBe("850.6K");
        expect(prefx(223456)).toBe("223.45K");
        expect(prefx(500000)).toBe("500K");
        expect(prefx(888888)).toBe("888.88K");
    });

    it("Formarts Millions From MAIN MODULE", () => {
        expect(prefx(1000000)).toBe("1M");
        expect(prefx(1234000)).toBe("1.23M");
        expect(prefx(10000000)).toBe("10M");
        expect(prefx(12345000)).toBe("12.34M");
        expect(prefx(100000000)).toBe("100M");
        expect(prefx(850600000)).toBe("850.6M");
        expect(prefx(223456000)).toBe("223.45M");
        expect(prefx(500000000)).toBe("500M");
        expect(prefx(888888000)).toBe("888.88M");
    });

    it("Formarts Billions From MAIN MODULE", () => {
        expect(prefx(1000000000)).toBe("1B");
        expect(prefx(1234000000)).toBe("1.23B");
        expect(prefx(10000000000)).toBe("10B");
        expect(prefx(12345000000)).toBe("12.34B");
        expect(prefx(100000000000)).toBe("100B");
        expect(prefx(850600000000)).toBe("850.6B");
        expect(prefx(223456000000)).toBe("223.45B");
        expect(prefx(500000000000)).toBe("500B");
        expect(prefx(888888000000)).toBe("888.88B");
    });
});