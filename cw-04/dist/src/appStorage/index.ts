import { config, storageType } from '../storageConfig';

import { AppFirestorageStorage } from './firebaseStorage';
import { AppLocalStorage } from './localStorage';
import { INote } from "../interface";

export interface IAppStorage {
    saveToStorage: (newNote: INote) => Promise<void>,
    updateNote: (newNote: INote, noteId: string) => Promise<void>,
    removeFromStorage: (id: INote['id']) => Promise<void>,
    getFromStorage: () => Promise<INote[]>,
    getAllTagsStorage: () => Promise<string[]>,
}


let appStorage: typeof AppFirestorageStorage | typeof AppLocalStorage;

switch (config.storageType) {
    case storageType.AppFirestorageStorage:
        appStorage = AppFirestorageStorage; break;
    case storageType.AppLocalStorage:
        appStorage = AppLocalStorage; break;
    default:
        appStorage = AppLocalStorage;
}

export default appStorage;
