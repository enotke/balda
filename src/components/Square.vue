<template>
    <button :class="{square: true, 'square__colored': colored}">
        {{ value }}
    </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        value: [String, null],
        colored: Boolean,
    },
})
export default class Square extends Vue {
    colored!: boolean
}
</script>

<style lang="scss" scoped>
.square {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background-color: lightgray;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    &__colored {
        background-color: beige;
    }
}
</style>
