<template>
    <div style="
    height: 200px;
">
        <v-bottom-nav :value="true" :active.sync="e1" class="transparent">
            <v-btn flat color="teal" value="Crew">
                <span>Crew</span>
                <v-icon>tag_faces</v-icon>
            </v-btn>
            <v-btn flat color="teal" value="Dock">
                <span>Dock</span>
                <v-icon>view_list</v-icon>
            </v-btn>
        </v-bottom-nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            e1: 'recent'
        }
    }
}
</script>

<style scoped>

</style>