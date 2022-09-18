<template>
    <div class="error">
        {{ error }}
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        error: String,
    },
})
export default class Error extends Vue {
}
</script>

<style lang="scss" scoped>
.error {
    border-radius: 5px;
    padding: 15px;
    background-color: rgba(194, 15, 15, 0.1);
    color: #e02020;
}
</style>
