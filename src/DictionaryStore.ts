import Cookie from '@/Cookie';
import dictionary from '@/dictionary';
import { Word } from '@/common';

const cookieName = 'dictionary';

export default class DictionaryStore {
    static initDictionary(): void {
        Cookie.setCookie(cookieName, JSON.stringify(dictionary));
    }

    static addToDictionary(word: Word): void {
        dictionary.push(word);
        Cookie.setCookie(cookieName, JSON.stringify(dictionary));
    }

    static isExist(word: Word): boolean {
        return dictionary.includes(word);
    }

    static getDictionary(): Array<Word> {
        return Cookie.getCookie<Word>(cookieName);
    }
}
