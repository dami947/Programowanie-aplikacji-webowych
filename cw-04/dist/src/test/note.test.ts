import { INote } from "../src/interface";

describe('notes init test', () => {
    let note: INote;

    beforeAll(() => {
        note = new INote();
    });

    it('is note id correctly created', () => {
        expect(note.id.length).toBeTruthy();
    });
});
