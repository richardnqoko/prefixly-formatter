// Jest test file for main entry module

import { prefx } from "../src";
import { units } from "../src/constants/units";

describe("prefx", () => {

    it("Tests prefx below Thousands", () => {
        expect(prefx(units.hundred.value)).toBe("100");
    });

    it("Tests prefx on Thousands", () => {
        expect(prefx(units.thousand.value)).toBe("1K");

    });

    it("Tests prefx on Millions", () => {
        expect(prefx(units.million.value)).toBe("1M");
    });

    it("Tests prefx on Billions", () => {
        expect(prefx(units.billion.value)).toBe("1B");
    });

    it("Tests prefx on Trillions", () => {
        expect(prefx(units.trillion.value)).toBe("1T");

    });

    it("Tests prefx on Quadrillions", () => {
        expect(prefx(units.quadrillion.value)).toBe("1Q");
    });

    it("Tests prefx on Quintillions", () => {
        expect(prefx(units.quintillion.value)).toBe("1Qt");
    });

    it("Tests prefx on Sextillions", () => {
        expect(prefx(units.sextillion.value)).toBe("1St");
    });

    it("Tests prefx on Septillions", () => {
        expect(prefx(units.septillion.value)).toBe("1Sp");
    });

    it("Tests prefx on Octillions", () => {
        expect(prefx(units.octillion.value)).toBe("1O");
    });

    it("Tests prefx on Nonillions", () => {
        expect(prefx(units.nonillion.value)).toBe("1N");
    });

    it("Tests prefx on Decillions", () => {
        expect(prefx(units.decillion.value)).toBe("1D");
    });
});