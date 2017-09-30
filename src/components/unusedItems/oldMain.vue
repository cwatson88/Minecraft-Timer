/**
*This is the old timer that worked on date that was set, 
* this would not work due to the fact the timer is a counter

 */

<template>
    <div class="name">
        <span>{{days | two_digits}} : {{hours | two_digits}} : {{minutes | two_digits}} : {{seconds | two_digits}} </span>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Vue from 'vue'

// new Vue({
//     // ...
//     filters: {
//         two_digits: function(value) {
//             if (value.toString().length <= 1) {
//                 return "0" + value.toString();
//             }
//             return value.toString();
//         }
//     }
// })

Vue.filter('two_digits', function(value) {
    if (value.toString().length <= 1) {
        return "0" + value.toString();
    }
    return value.toString();
});

export default {
    data: () => ({
        now: '',
        startDate: new Date(),
        timerType: {
            name: "",
            time: 72
            // time: 300000
        }
    }),
    computed: {
        seconds() {
            console.log(
            this.startDate,
            this.now, this.startDate.getTime() - this.now
            )

            return (this.startDate.getTime() + this.now) % 60;
        },

        minutes() {
            return Math.trunc((this.startDate.getTime()  + this.now) / 60) % 60;
        },

        hours() {
            return Math.trunc((this.startDate.getTime()  + this.now) / 60 / 60) % 24;
        },

        days() {
            return Math.trunc((this.startDate.getTime()  + this.now) / 60 / 60 / 24);
        }
    },
    methods: {
        ...mapMutations(['..']),
        ...mapActions(['...', '..']),
        // Start method functions
        setTime() {

        },
        // startTimer() {
        //     window.setInterval(() => {
        //         this.now = Math.trunc((new Date()).getTime() / 1000) * 72;
        //     }, 1000);
         // var mcTime = time => (Math.floor((time + 300000) / 100) / 10) * 72

        // }
    },
    mounted() {
        const vm = this;

        window.setInterval(() => {
            // console.log(vm.now)
            vm.now = Math.trunc(new Date().getTime() / 1000);
        }, 1000);
    }
}
</script>

<style scoped>

</style>
