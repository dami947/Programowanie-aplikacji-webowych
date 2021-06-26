import { AppNotifications } from "./../notificationService";
import { IAppStorage } from ".";
import { INote } from "./../interface";

export const localStorageKey = "CW04_Notes";

// Singleton app storage
export class AppLocalStorage implements IAppStorage {
    private static instance: IAppStorage;
    private constructor() { }

    public static getInstance(): IAppStorage {
        if (!AppLocalStorage.instance) {
            AppLocalStorage.instance = new AppLocalStorage();
        }

        return AppLocalStorage.instance;
    }

    async saveToStorage(newNote: INote) {
        const notes = JSON.parse(localStorage.getItem(localStorageKey)) as INote[] ?? [];
        notes.push(newNote);
        if (newNote.notification)
            AppNotifications.getInstance().addNotification(newNote);

        localStorage.setItem(localStorageKey, JSON.stringify(notes));
        return Promise.resolve();
    }

    async updateNote(newNote: INote, noteId: string) {
        const notes = JSON.parse(localStorage.getItem(localStorageKey)) as INote[] ?? [];
        const existingIndex = notes.findIndex(v => v.id === newNote.id);
        notes[existingIndex] = newNote;
        if (newNote.notification)
            AppNotifications.getInstance().addNotification(newNote);
        localStorage.setItem(localStorageKey, JSON.stringify(notes));

        return Promise.resolve();
    }

    async removeFromStorage(id: INote['id']) {
        const notes = JSON.parse(localStorage.getItem(localStorageKey)) as INote[];
        notes.splice(notes.findIndex((v) => v.id === id), 1);
        localStorage.setItem(localStorageKey, JSON.stringify(notes));

        return Promise.resolve();
    }

    async getFromStorage() {
        const notes = JSON.parse(localStorage.getItem(localStorageKey)) as INote[] ?? [];
        console.log(notes);
        return Promise.resolve(notes);
    }

    async getAllTagsStorage() {
        const notes = JSON.parse(localStorage.getItem(localStorageKey)) as INote[] ?? [];
        const tags = notes.flatMap((v) => v.tags);

        return Promise.resolve([... new Set(tags)]);
    }
}
