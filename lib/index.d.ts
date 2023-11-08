declare const Storage: {
    checkUsable: () => boolean;
    set: (key: string, data: object) => false | {
        data: object;
        timestamp: number;
    };
    get: (key: string) => any;
    remove: (key: string) => boolean;
    clear: () => boolean;
};
export default Storage;
