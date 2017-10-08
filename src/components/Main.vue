<template>
    <div class="timer">
            <app-players-list></app-players-list>
        <v-layout row>
            <app-timer v-for="timer in timers" v-if="timer.docked === false" :multiplier="timer.multiplier" :title="timer.title" :card-image="timer.imgUrl" @dock=" timer.docked = $event " :key="timer.id" :startTime="timer.startTime" @resetSleep="sleepNow"></app-timer>
        </v-layout>
        <div class="dock" v-show="dockedTimersCount > 0">
            <h5 class="dock__title"> Docked Timers: </h5>
            <div v-for="timer in timers" :key="timer.id">
                <app-docked-timers v-show="timer.docked === true" :title="timer.title" :card-image="timer.imgUrl" @dock="timer.docked = $event"></app-docked-timers>
            </div>
        </div>
    </div>
</template>

<script>
// node packages
import * as firebase from "firebase";

// vuex store
import { mapGetters, mapMutations, mapActions } from 'vuex'

// components
import Timer from './Timer.vue'
import DockedTimers from './DockedTimers.vue'
import PlayersList from './PlayersList.vue'

// images
import minecraftImage from '../assets/minecraft-hero.jpg'
import realLifeImage from '../assets/pinocchio.jpg'

// firebase setup
const config = {
    apiKey: "AIzaSyCbhQ2IWvUovrSYMBYN-UKje87BM12JNIE",
    authDomain: "minecraft-timer.firebaseapp.com",
    databaseURL: "https://minecraft-timer.firebaseio.com",
    projectId: "minecraft-timer",
    storageBucket: "minecraft-timer.appspot.com",
    messagingSenderId: "186781546353"
}

firebase.initializeApp(config)

// vue export
export default {
    data: () => ({
        timers: [{
            id: 'bradsRealm',
            title: 'Minecraft Time - Brads Realm',
            imgUrl: minecraftImage,
            multiplier: 72,
            docked: false,
            startTime: '',
            dawnCorrection: 300000
        }, {
            id: 'realtime',
            title: 'Real Time',
            imgUrl: realLifeImage,
            multiplier: 1,
            docked: false,
            startTime: '',
            dawnCorrection: 0
        }]
    }),
    computed: {
        dockedTimersCount() {
            return this.timers.reduce((sum, current) => {
                const y = current.docked === true ? 1 : 0
                return sum = parseInt(sum) + y
            }, 0);
        }
    },
    methods: {
        sleepNow() {
            firebase.database().ref('timers/bradsRealm').set({
                time: new Date().getTime()
            })
        }
    },
    components: {
        AppTimer: Timer,
        AppDockedTimers: DockedTimers,
        AppPlayersList: PlayersList

    },
    beforeCreate() {
        const timerPath = 'bradsRealm';
        const timers = firebase.database().ref(`timers/${timerPath}`)

        timers.on('value', (snapshot) => {
            const res = snapshot.val()
            this.timers.map(timer => timer.startTime = (res.time - timer.dawnCorrection))
        })
    }

}
</script>

<style scoped>
.timer {
    min-height: 300px;
}

.dock {
    height: 100%;
    position: fixed;
    top: 10px;
    left: 0;
    width: 1px;
    /* background-color: rgba(0, 17, 17, 0.32); */
    z-index: 9999;
}

.dock__title {
    background-color: rgba(255, 255, 255, 0.51);
    border-radius: 10px;
    width: 64px;
}
</style>