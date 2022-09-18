import { Player } from '@/common';
import Cookie from './Cookie';

const cookieName = 'players';
export default class PlayerStore {
    static getPlayers(): Array<Player> {
        return Cookie.getCookie<Player>(cookieName);
    }

    static addPlayer(player: Player): void {
        const players = this.getPlayers();
        if (players.includes(player)) {
            return;
        }
        players.push(player);
        Cookie.setCookie<Array<Player>>(cookieName, players);
    }
}
