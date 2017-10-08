<template>
    <v-card class="player__list">
        <v-list subheader>
            <v-subheader>Crew:</v-subheader>
            <v-list-tile avatar v-for="item in items" :key="item.title">
                <v-list-tile-avatar>
                    <img v-if="item.avatar" :src="item.avatar" />
                    <v-icon v-if="!item.avatar">face</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-icon :class="item.active ? 'online' : 'offline'">videogame_asset</v-icon>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { active: true, title: 'Camwhitt' },
                { active: true, title: 'BG Bainyj', avatar: '' },
                { title: 'NewKizOnThebloc', avatar: '' },
                { title: 'BG Watson', avatar: '' },
                // { title: 'BG Watson', avatar: '/static/doc-images/lists/4.jpg' },
            ]
        }
    }
}
</script>

<style scoped>
.online {
    color:#52b043 !important;
}

.offline {
    color: grey;
}
.player__list{
    height: auto;
    z-index: 9999;
    position: absolute;
    /* margin: 63px; */
    right: 0px;
}
</style>