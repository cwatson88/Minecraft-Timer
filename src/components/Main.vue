<template>
    <div class="timer">
        <v-layout row>
                <App-Timer :multiplier="72" title="Minecraft Time" :card-image="minecraftURL"></App-Timer>
                <!-- <img v-bind:src='minecraftURL'/> -->
                <App-Timer :multiplier="1" title="Real Time" :card-image="realLifeImage"></App-Timer>
        </v-layout>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Timer from './Timer.vue'
import minecraftImage from '../assets/minecraft-hero.jpg'
import realLifeImage from '../assets/pinocchio.jpg'

export default {
    data: () => ({
        minecraftURL:minecraftImage,
        realLifeImage,
    }),
    computed: {},
    methods: {},
    components: {
        AppTimer: Timer,

    }

}
</script>

<style scoped>
    .timer{
        min-height: 300px;
    }
</style>