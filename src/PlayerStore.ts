import { Player } from '@/common';
import { getCookie, setCookie } from 'typescript-cookie';

const cookieName = 'players';
export default class PlayerStore {
    static getPlayers(): Array<Player> {
        return JSON.parse(getCookie(cookieName) || '') || [];
    }

    static addPlayer(player: Player): void {
        const players = this.getPlayers();
        if (players.includes(player)) {
            return;
        }
        players.push(player);
        setCookie(cookieName, JSON.stringify(players));
    }
}
