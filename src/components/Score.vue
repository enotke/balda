<template>
    <div class="score">
        <h3>Счет:</h3>
        <div class="score-list">
            <div v-for="player in players" :key="player.name">
                <span>{{ player.name }}: </span>
                <span>{{ player.score }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Player } from '@/common';

@Options({
    props: {
        players: Array,
    },
})
export default class AppButton extends Vue {
    players!: Array<Player>;
}
</script>

<style lang="scss" scoped>
.score {
    display: flex;
    align-items: center;
    margin-top: 40px;
    flex-direction: column;
    &-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
}
</style>
