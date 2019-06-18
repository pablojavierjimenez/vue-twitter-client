<template>
  <div id="favorites">

    <TwitterList class="twitList" :twitItemList="favoritesList" />

    <TwitSingleItemDetails></TwitSingleItemDetails>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import TwitterList from '@/components/TwitterList.vue'
import TwitSingleItemDetails from '@/components/TwitSingleItemDetails.vue'

export default {
  name: "favorites",
  components: {
    TwitterList,
    TwitSingleItemDetails
  },
  props: {},
  data() {
    return {
      name: "pepe"
    };
  },
  computed: {
    ...mapState(["favoritesList"]),
    ...mapGetters(["get_favoritesList"]),
    ...mapActions(["act_setFavoritesList"]),
    // hasta donde entiendo no deberia iportar la mutaciones y manejarme exclusivamente con las acciones
    // pero con eso de esto combiene en sincrono y esto en no-cincrono ya no se bien
    // por las dudas dejo el ejemplo
    ...mapMutations(["mut_setFavoritesList"])
  },
  created() {

    this.$store.dispatch('act_setFavoritesList');

    console.log('itemlist', this.favoritesList );
    // twitterListFromServer () {
    //   console.log( 'tuiter list compo: ', this.$store.getters.get_TwitList);
    //   return this.$store.getters.get_TwitList;
    // }

  },
  beforeMount() {},
  mounted() {},
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

<style lang="scss">
.favorites {
  display:flex;
  flex-direction: column;
  .twitList {
    // background-color: #c3fd45;
    min-width: 40vw;
  }
}
</style>
