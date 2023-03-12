declare class EasyHTTP {
    get(url: string): Promise<any>;
}
declare const http: EasyHTTP;
declare const getJSON: () => Promise<void>;
