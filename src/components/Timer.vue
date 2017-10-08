<template>
    <v-flex xs6>
        <v-card>
            <v-card-media :src="cardImage" height="200px">
            </v-card-media>
            <v-card-title primary-title class="timer__text">
                <v-flex xs12>
                    <h3 class="time__title">{{title}}</h3>

                    <h5>{{days | two_digits}} : {{hours | two_digits}} : {{minutes | two_digits}} : {{seconds | two_digits}} </h5>
                    <p class="time__units">days : hours : minutes : seconds </p>

                </v-flex>
            </v-card-title>
            <v-card-actions>
                <v-btn flat class="green--text" @click="sendToDock">Dock</v-btn>
                <v-btn flat class="red--text" @click="goToSleep">Sleep</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Vue from 'vue'

Vue.filter('two_digits', function(value) {
    if (value.toString().length <= 1) {
        return "0" + value.toString();
    }
    return value.toString();
});

export default {
    props: ['multiplier', 'title', 'cardImage', 'startTime'],
    data: () => ({
        now: '',
        timer: 0,
        docked: false

    }),
    computed: {
        seconds() {
            return Math.floor(this.timer % 60);
        },

        minutes() {
            // return (timer / 60) % 60;
            return Math.floor((this.timer / 60) % 60);
        },

        hours() {
            return Math.floor((this.timer / 60 / 60) % 24);
        },

        days() {
            return Math.floor((this.timer / 60 / 60 / 24));
        }
    },
    methods: {
        ...mapMutations(['..']),
        ...mapActions(['...', '..']),
        // Start method functions
        sendToDock() {
            this.$emit('dock', true)
        },
        goToSleep() {
            this.$emit('resetSleep')
        }
    },
    mounted() {

        window.setInterval(() => {
            this.now = new Date().getTime() - this.startTime
            this.timer = (this.now * this.multiplier)
            this.timer = Math.trunc((this.now / 100) / 10 * this.multiplier)
        }, 1000);
    }
}


/**TODO:
 *  + send the date it was set to the firebase client,
 *  when the person opens the app it gets the date.
 *
 *  + cloud function if the time is reset then push it to users?
 *  OR if the time changes add an event listener.
 */
</script>

<style scoped>
.time__title {
    color: #092345;
}

.timer__text {
    text-align: center;
    min-height: 228px;
    /* keep the height stretched */
}

.time__units {
    font-size: 0.6em;
}
</style>
