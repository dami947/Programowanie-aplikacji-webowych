export class LocalStorageMock {
    store: any;
    constructor() {
        this.store = {};
        (global as any).localStorage = this;
    }
    
    clear() {
        this.store = {};
    }
    
    getItem(key: string) {
        return this.store[key] || null;
    }
    
    setItem(key: string, value: string) {
        this.store[key] = String(value);
    }
    
    removeItem(key: string) {
        delete this.store[key];
    }
};
