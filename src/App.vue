<template>
  <div id="app">
    <v-app>

      <!-- <header></header> -->

      <main>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <img src="./assets/minecraft-grass-block.png" alt="Soil Block" width="150px">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <h2 class="title-font"> MineTime</h2>
            </v-flex>
          </v-layout>

          <router-view></router-view>
        </v-container>
      </main>
      <app-navigation-bottom></app-navigation-bottom>
    </v-app>
  </div>
</template>

<script>
import NavigationBottom from './components/NavigationBottom.vue';

export default {
  name: 'app',
  data: () => ({
  }),
  components: {
    AppNavigationBottom: NavigationBottom
  }
}
</script>

<style>
@font-face {
  font-family: minecraft-reg;
  src: url('./assets/Minecrafter.Reg.ttf')
}

body {
  margin: 0;
  background-color: #fafafa;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.title-font {
  font-family: minecraft-reg;
  font-size: 43px;
  color: #33606f;
  text-shadow: 1px 4px #FF9800;
  -webkit-text-stroke: 2px #d8bb2c;
}
</style>
