export default class Cookie {
    static setCookie<T>(name: string, val: T) {
        const date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = `${document.cookie} ${name}=${JSON.stringify(val)}; expires=${date.toUTCString()}; path=/ ; domain=${document.domain}`;
        console.log(date.toUTCString());
    }

    static getCookie<T>(name: string): Array<T> {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        const content = parts.pop()?.split(';').shift() || '';
        return JSON.parse(content) || [];
    }
}
