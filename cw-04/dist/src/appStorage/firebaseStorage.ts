import { IAppStorage } from ".";
import { INote } from "./../interface";
import firebase from "firebase";
import { firebaseConfig } from "./../firebaseConfig";

// Singleton app storage
export class AppFirestorageStorage implements IAppStorage {
    private static instance: IAppStorage;
    db: firebase.firestore.Firestore;

    private constructor() {
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = firebaseApp.firestore();
    }

    public static getInstance(): IAppStorage {
        if (!AppFirestorageStorage.instance) {
            AppFirestorageStorage.instance = new AppFirestorageStorage();
        }

        return AppFirestorageStorage.instance;
    }

    async saveToStorage(newNote: INote) {
        await this.db.collection('notes').add({ ...newNote });
        return Promise.resolve();
    }

    async updateNote(newNote: INote, noteId: string) {
        await this.db.collection('notes').doc(noteId).update({ ...newNote });

        return Promise.resolve();
    }

    async removeFromStorage(id: INote['id']) {
        await this.db.collection('notes').doc(id).delete();
        return Promise.resolve();
    }

    async getFromStorage() {
        const res = await this.db.collection('notes').get().then(res => ({
            data: res.docs.map((res) => ({
                data: res.data(),
                id: res.id
            }))
        }));

        // assign firebase ID to use in front-end
        const data = res.data.map((note) => ({
            ...note.data as INote,
            id: note.id,
        })).sort((a, b) => {
            return a.date - b.date;
        });
        console.log(data);
        return Promise.resolve(data as INote[]);
    }

    async getAllTagsStorage() {
        const notes = await this.getFromStorage();
        const tags = notes.flatMap((v) => v.tags);

        return Promise.resolve([... new Set(tags)]);
    }
}
