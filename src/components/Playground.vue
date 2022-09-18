<template>
    <div class="playground">
        <div v-for="item in size"
             :key="item"
             @drop.stop="onDrop($event, item)"
             @dragover.prevent
             @dragenter.prevent>
            <Square :value="getWordById(item)"
                    @click="addWord(item)"
                    :colored="word.includes(item)"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Square from '@/components/Square.vue';
import { Word } from '@/common';

@Options({
    components: { Square },
    props: {
        size: Number,
        wordsList: Array,
        word: Array,
    },
})
export default class Playground extends Vue {
    wordsList!: Array<Word>;

    word!: Array<number>;

    getWordById(id: number): Word | null {
        return this.wordsList[id] || null;
    }

    addWord(id: number) {
        if (!this.getWordById(id)) {
            return;
        }
        this.$emit('update:word', this.getWordById(id), id);
    }

    onDrop(event: DragEvent, id: number) {
        if (this.getWordById(id)) {
            return;
        }
        const payload = event.dataTransfer?.getData('payload');
        if (payload) {
            const word: Word = JSON.parse(
                event.dataTransfer?.getData('payload') || '',
            );
            this.$emit('update:words-list', word, id);
        }
    }
}
</script>

<style lang="scss" scoped>
.playground {
    width: 250px;
    height: 250px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    align-content: flex-start;
}
</style>
