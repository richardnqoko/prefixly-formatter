// Jest test file for utility functions

import { units } from "../src/default/units";
import { convertNumber } from "../src/utils"

describe("convertNumber", () => {
    it("Rounds Thousands", () => {
        expect(convertNumber(1000, units.thousand)).toBe(1);
        expect(convertNumber(1200, units.thousand)).toBe(1.2);
        expect(convertNumber(1230, units.thousand)).toBe(1.23);
        expect(convertNumber(1234, units.thousand)).toBe(1.234);
    });
});


