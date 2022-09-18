import { Player } from '@/common';

export default class Game {
    static addScoreToPlayer(player: Player, score: number): void {
        // eslint-disable-next-line no-param-reassign
        player.score = score;
    }

    // storePlayersScore(players: Array<Player>): void {
    //
    // }
}
