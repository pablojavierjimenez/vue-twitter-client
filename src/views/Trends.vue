<template>
  <div class="trends">
    <h2>trends</h2>
    <ul>
      <li class="trends_item"  v-for="trendItem in trendsList" :key="trendItem.name">
        <a :href="trendItem.url" target="blank" :alt="trendItem.name">{{trendItem.name}}</a>
        <span> {{trendItem.tweet_volume}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex";
  // import UserAvatar from '@/components/UserAvatar.vue'
  // import UserSingleItem from '@/components/UserSingleItem.vue'

  /**
   * {
   *  name: "#VamosLasPibas",
   *  url: "http://twitter.com/search?q=%23VamosLasPibas",
   *  promoted_content: null,
   *  query: "%23VamosLasPibas",
   *  tweet_volume: null
   * },
  */
  export default {
    name: "Trends",
    components: {},
    props: {},
    data() {
      return {
        name: "pepe"
      };
    },
    computed: {
      ...mapState(["trendsList"]),
      // ...mapGetters(["get_trendsList"]),
      ...mapActions(["act_setTrendsList"])
    },
    methods: {},
    /**
     * HOOKS
     */
    beforeCreated() {},
    // created se recomienda como el mejor hook para interactuar con data del servidor
    created() {
      // osea que aca tendria ( creo ) que hacer la llamada para traer la data de server
      // this.$store.dispatch('act_setUserListDataFromServer', count);
      this.$store.dispatch('act_setTrendsList');
    },
    beforeMount() {},
    mounted() {
      // console.log('monted data::--> ', this.$store.state.trendsList);
    },
    // ciclo de actualizacion de los componentes beforeUpdate y updated
    beforeUpdated() {
      // este es equivalente a beforeMount
    },
    updated() {
      // este es equivalente a mounted
    },
    beforeDestroy() {},
    destroyed() {}
  };
</script>

<style scoped lang="scss">
  .trends {
    &__unreade {
      padding: 1vmin;
    }

    ul {
      margin: 0;
      padding: 0 1vw;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
    }

    &_item {
      padding: 5vmin 3vmin;
      list-style: none;
      text-align: left;
      margin: 2vmin 1vmin;
      min-width: 20vw;
      width: 22vw;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      background-color: #a5ce20;
      font-weight: bolder;
      border-radius: 2vmin;
      box-shadow: 0px 1px 2px grey;

      a {
        text-decoration: none;
        letter-spacing: .5px;
        color:#fff;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

    }
  }
  .twitterListItem_userAvatar {
    max-width: 8vmin;
    max-height: 8vmin;

    &__image {
      max-width: 7vmin;
    }
  }
</style>
