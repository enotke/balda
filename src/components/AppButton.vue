<template>
    <button class="button">
        {{ text }}
    </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        text: String,
    },
})
export default class AppButton extends Vue {
}
</script>

<style lang="scss" scoped>
.button {
    height: 20px;
    text-align: center;
    background-color: lightgray;
    padding: 5px 12px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
