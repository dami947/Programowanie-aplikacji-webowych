import { getDay } from "../src/utils";

describe('check date util', () => {
    let timestamp: number;
    beforeAll(() => {
        const min = Math.ceil(0);
        const max = Math.floor(9999999999999);
        timestamp = Math.floor(Math.random() * (max - min + 1)) + min;
    });
    it('is correct date', () => {
        const date = getDay(timestamp);
        expect(date).toMatch(/\d{1,}.\d{2}.\d{4},\s\d{2}\:\d{2}:\d{2}/);
    });
});
