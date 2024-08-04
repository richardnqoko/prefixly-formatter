// Jest test file for main entry module

import { prefX } from "../src";

describe("prefX", () => {

    it("Formarts Thousands From MAIN MODULE", () => {
        expect(prefX(1000)).toBe("1K");
        expect(prefX(1234)).toBe("1.23K");
        expect(prefX(10000)).toBe("10K");
        expect(prefX(12345)).toBe("12.34K");
        expect(prefX(100000)).toBe("100K");
        expect(prefX(850600)).toBe("850.6K");
        expect(prefX(223456)).toBe("223.45K");
        expect(prefX(500000)).toBe("500K");
        expect(prefX(888888)).toBe("888.88K");
    });
});