<template>
    <main class="main">
        <ErrorsList :errors="errors"/>
        <Players v-model:player-one="playerOne"
                 v-model:player-two="playerTwo"/>
        <div class="main__container">
            <Playground :size="25"
                        :words-list="words"
                        :word="wordIds"
                        @update:words-list="updateWordList"
                        @update:word="updateWord"/>
            <WordList :word-list="wordList" :is-disabled="!isStarted"/>
            <Controls @start="start" :is-started="isStarted"/>
        </div>
        <Score :players="players"/>
    </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Playground from '@/components/Playground.vue';
import Controls from '@/components/Controls.vue';
import { Error, Player, Word } from '@/common';
import WordList from '@/components/WordList.vue';
import Players from '@/components/Players.vue';
import ErrorsList from '@/components/Errors/ErrorsList.vue';
import Score from '@/components/Score.vue';

@Options({
    components: {
        Score,
        ErrorsList,
        Players,
        WordList,
        Controls,
        Playground,
    },
})
export default class App extends Vue {
    words: Array<Word> = [];

    players: Array<Player> = [];

    errors: Array<Error> = [];

    private _playerOne: Player | null = null;

    private _playerTwo: Player | null = null;

    word: Array<Word> = [];

    wordIds: Array<number> = [];

    isStarted = false;

    wordList: Array<Word> = 'абвгдежзийклмнопрстуфхцчшщъыьэюя'.toUpperCase()
        .split('');

    start(): void {
        this.errors = [];
        if (!this.playerOne || !this.playerTwo) {
            this.errors.push('Введите имена игроков');
            return;
        }

        if (this.playerOne === this.playerTwo) {
            this.errors.push('У игроков должны быть разные имена');
            return;
        }
        this.isStarted = true;
        // eslint-disable-next-line no-unused-expressions
        this._playerOne && this.players.push(this._playerOne);
        // eslint-disable-next-line no-unused-expressions
        this._playerTwo && this.players.push(this._playerTwo);
        this.words = [];
        this.words[11] = 'Б';
        this.words[12] = 'А';
        this.words[13] = 'Л';
        this.words[14] = 'Д';
        this.words[15] = 'А';
    }

    set playerOne(name: string) {
        if (!this._playerOne) {
            this._playerOne = App.getInitialPlayer();
        }
        this._playerOne.name = name;
    }

    get playerOne(): string {
        return this._playerOne?.name || '';
    }

    set playerTwo(name: string) {
        if (!this._playerTwo) {
            this._playerTwo = App.getInitialPlayer();
        }
        this._playerTwo.name = name;
    }

    get playerTwo(): string {
        return this._playerTwo?.name || '';
    }

    private static getInitialPlayer(): Player {
        return {
            name: '',
            score: 0,
        };
    }

    updateWord(word: Word, id: number): void {
        if (this.wordIds.includes(id)) {
            return;
        }
        this.word.push(word);
        this.wordIds.push(id);
    }

    nextStep(): void {

    }

    updateWordList(word: Word, id: number): void {
        if (!this.isStarted) {
            return;
        }
        this.words[id] = word;
    }
}
</script>

<style lang="scss">
.main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &__container {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        justify-content: center;
        gap: 30px;
    }
}
</style>
