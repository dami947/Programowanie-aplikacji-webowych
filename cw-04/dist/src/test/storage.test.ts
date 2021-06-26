import { AppLocalStorage, localStorageKey } from "../src/appStorage/localStorage";
import appStorage, { IAppStorage } from "../src/appStorage";

import { INote } from "../src/interface";
import { LocalStorageMock } from "./testutils";

describe('appStorage check', () => {
    let s1: IAppStorage;
    let s2: IAppStorage;

    beforeAll(() => {
        s1 = appStorage.getInstance();
        s2 = appStorage.getInstance();
    });

    it('is singleton', () => {
        expect(s1).toBe(s2);
    });
});

describe('localStorage check', () => {
    let storage: AppLocalStorage;
    
    beforeAll(() => {
        new LocalStorageMock();
        storage = AppLocalStorage.getInstance();
    });

    it('check if empty storage returns array', () => {
        storage.getAllTagsStorage().then((v) => {
            expect(v).toStrictEqual([]);
        });
    });

    it('adding item to storage', () => {
        storage.saveToStorage(new INote()).then(() => {
            const localStorageItems = JSON.parse(localStorage.store[localStorageKey]); 
            expect(localStorageItems).toHaveLength(1);
        });
    });
});
