<template>
  <div class="timeLine">

    <TwitterList class="twitList" :twitItemList="showedTwitItemList" />

    <TwitSingleItemDetails />

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import TwitterList from '@/components/TwitterList.vue'
import TwitSingleItemDetails from '@/components/TwitSingleItemDetails.vue'

export default {
  name: 'TimeLine',
  components: {
    TwitterList,
    TwitSingleItemDetails
  },
  data() {
      return {
        // twitList: this.timeLineTwitList ,
        user: {
          avatar: "../assets/userAvatar.svg",
          name: "inexsistencia",
          nameId: "@inexsistencia",
          twitDate: "33 minutos ago"
        }
      };
  },
  computed: {
    ...mapState(["timeLineTwitList", "showedTwitItemList"]),
    ...mapGetters([
      "get_timeLineTwitList",
      "get_timeLineTwitListQuantity",
      "get_showedTwitItemList"
    ]),
    ...mapActions([
      "act_setTimeLineTwiterList",
      "act_setTimeLineItemsOnShowedTwitItemList"
    ]),
    // hasta donde entiendo no deberia iportar la mutaciones y manejarme exclusivamente con las acciones
    // pero con eso de esto combiene en sincrono y esto en no-cincrono ya no se bien
    // por las dudas dejo el ejemplo
    ...mapMutations([
      "mut_setTimeLineTwiterList",
      "mut_setShowedTwitItemList",
      "mut_setTimeLineItemsOnShowedTwitItemList"
    ])
  },
  created() {
    let count = 100;
    let limit = 10;
    // osea que aca tendria ( creo ) que hacer la llamada para traer la data de server
    if ( this.$store.getters.get_timeLineTwitListQuantity <= 0 ) {
      console.log('no tengo mas voy abuscar mas', this.$store.getters.get_timeLineTwitListQuantity);
      this.$store.dispatch('act_setTimeLineTwiterList', count);
      this.$store.dispatch('act_setTimeLineItemsOnShowedTwitItemList', limit);
    } else {
      console.log('todabia tengo', this.$store.getters.get_timeLineTwitListQuantity);
      this.$store.dispatch('act_setTimeLineItemsOnShowedTwitItemList', limit);
    }

    console.log('itemlist', this.twitItemList);
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
.timeLine {
  display:flex;
  flex-direction: column;
  .twitList {
    // background-color: #c3fd45;
    min-width: 40vw;
  }
}
</style>
