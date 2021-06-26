function getDay(dt: number, timezoneOffset: number): string {
    const date = new Date((dt + timezoneOffset) * 1000);
    const stringDate = date.toLocaleDateString();
    return stringDate;
}


export {
    getDay
};
