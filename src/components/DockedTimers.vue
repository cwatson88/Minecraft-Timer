<template>
    <div @click="unDock">
        <v-chip>
            <v-avatar>
                <img :src="cardImage">
            </v-avatar>
            {{title}}
            <v-icon right>input</v-icon>
        </v-chip>
    </div>
</template>

<script>
export default {
    props: ['cardImage', 'title'],
    data: () => ({

    }),
    methods: {
        unDock() {
            this.$emit('dock', false)
        }
    },
}
</script>

<style scoped>
.chip {
    cursor: pointer;
}
</style>