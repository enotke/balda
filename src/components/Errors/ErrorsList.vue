<template>
    <div class="error-list">
        <Error v-for="error in errors" :key="error" :error="error" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Error as ErrorType } from '@/common';
import Error from '@/components/Errors/Error.vue';

@Options({
    components: { Error },
    props: {
        errors: Array,
    },
})
export default class ErrorsList extends Vue {
    errors!: Array<ErrorType>;
}
</script>

<style lang="scss" scoped>
.error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-bottom: 25px;
}
</style>
