<template>
    <div class="word-list">
        <div
            v-for="word in wordList"
            :key="word"
            :draggable="!isDisabled"
            @dragstart.self="onDrag($event, word)"
            @dragover.prevent
            @dragenter.prevent>
            <Square  :value="word"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Word } from '@/common';
import Square from '@/components/Square.vue';

@Options({
    components: { Square },
    props: {
        wordList: Array,
        isDisabled: Boolean,
    },
    methods: {
        onDrag(event: DragEvent, word: Word): void {
            event.dataTransfer?.setData(
                'payload',
                JSON.stringify(word),
            );
        },
    },
})
export default class WordList extends Vue {
}

</script>

<style lang="scss" scoped>
.word-list {
    width: 280px;
    height: 250px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    align-content: flex-start;
}
</style>
