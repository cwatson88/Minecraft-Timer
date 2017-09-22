<template>
    <div class="name">
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    data: () => ({
        dataOne: "data object here"
    }),
    computed: {
    },
    methods: {
        ...mapMutations(['..']),
        ...mapActions(['...', '..']),
        // Start method functions
        methodOne() {
            //method stuff here
        }
    }

}
</script>

<style lang="scss" scoped>
// @import '../../global-styles.scss';
</style>
