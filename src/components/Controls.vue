<template>
    <div class="controls">
        <AppButton v-for="button in buttons"
                   :key="button.text"
                   :text="button.text"
                   @click="button.callback"/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppButton from '@/components/AppButton.vue';

type Button = {
    text: string,
    callback: CallableFunction
}
@Options({
    components: { AppButton },
    props: {
        isStarted: Boolean,
    },
})
export default class Controls extends Vue {
    isStarted!: boolean;

    get buttons(): Array<Button> {
        return [
            { text: this.getStatusButtonText, callback: () => this.$emit('start') },
            { text: 'ХОД', callback: () => this.$emit('move') },
        ];
    }

    get getStatusButtonText() {
        return this.isStarted ? 'ЗАНОВО' : 'СТАРТ';
    }
}
</script>

<style lang="scss" scoped>
.controls {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
