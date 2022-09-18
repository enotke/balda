<template>
    <div class="players">
        <div class="player-one">
            <label for="playerOne">
                Первый игрок
                <input id="playerOne" :value="playerOne"
                       @input="$emit('update:playerOne', $event.target.value)"/>
            </label>
        </div>
        <div class="player-two">
            <label for="playerTwo">
                Второй игрок
                <input id="playerTwo" :value="playerTwo"
                       @input="$emit('update:playerTwo', $event.target.value)"/>
            </label>
        </div>
<!--        <div class="players-list">-->
<!--            <div v-for="player in players" :key="player" class="players-list__item">-->
<!--                {{ player }}-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Player } from '@/common';

@Options({
    props: {
        playerOne: Object,
        playerTwo: Object,
    },
})
export default class Players extends Vue {
    playerOne: Player | undefined;

    playerTwo: Player | undefined;
}
</script>

<style lang="scss" scoped>
.players {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
</style>
