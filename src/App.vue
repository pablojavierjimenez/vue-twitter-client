<template>
  <section id="app">

    <Header>
      <div id="device_mode">
        <span id="desktop_modo" class="mq_mode">MODO ESCRITORIO</span>
        <span id="smallDesktop_modo" class="mq_mode">MODO smallDesktop</span>
        <span id="tablets_modo" class="mq_mode">MODO tablets</span>
        <span id="mobiles_modo" class="mq_mode">modo MOBILE</span>
        <span id="small_mobiles_modo" class="mq_mode">modo SMALL MOBILE</span>
        <span id="feature_modo" class="mq_mode">FEATURE PHONE</span>
      </div>
    </Header>

    <main id="main">
      <router-view></router-view>
    </main>

    <Footer></Footer>

  </section>
</template>

<script>
//General imports
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {

  components: {
    Header,
    Footer
  },

  computed: mapState([
    'timeLineTwitList',   //initial state: []
    'friendList',         //initial state: []
    'trendsTwitList',     //initial state: []
    'searchTwitList',     //initial state: []
    'timeLineTwitList',   //initial state: []
    'showSingleTwit'      //initial state: {}
  ]),

  methods: {
    ...mapMutations(['mut_setTimelineItemList']),
    ...mapGetters(['get_TwitList']),
    ...mapActions(['act_getTimelineData'])
  },

  created: function() {}
}
</script>


<style lang="scss">

@import '@/styles/global.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  display: flex;
}

#device_mode {
  .mq_mode {
    display: none;
  }
}

#main {
  padding: 8vh 0;
  // background: aquamarine;
}

@import '@/styles/mediaQueries.scss';

</style>
