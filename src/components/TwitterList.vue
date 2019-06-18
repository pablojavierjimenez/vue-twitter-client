<template>
  <div class="twitterList">
    <ul>
      <li class="twitterList_item"  v-for="twitItem in twitItemList" :key="twitItem.id">
        <article class="twitterList_item__container">
          <span class="twitterList_item__user">
            <UserAvatar class="twitterList_item_user__image" :username="twitItem.user.name" :userAvatarImageLink="twitItem.user.profile_image_url"></UserAvatar>
          </span>
          <TwitSingeItem :twitItemData="twitItem"></TwitSingeItem>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import UserAvatar from '@/components/UserAvatar.vue'
import TwitSingeItem from '@/components/TwitSingeItem.vue'

export default {
  name: 'TwitterList',
  components: {
    UserAvatar,
    TwitSingeItem
  },
  props: ["twitItemList"],
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
    // ...mapState(["timeLineTwitList", "showedTwitItemList"]),
    // ...mapGetters([
    //   "get_timeLineTwitList",
    //   "get_timeLineTwitListQuantity",
    //   "get_showedTwitItemList"
    // ]),
    // ...mapActions([
    //   "act_setTimeLineTwiterList",
    //   "act_setTimeLineItemsOnShowedTwitItemList"
    // ]),
    // // hasta donde entiendo no deberia iportar la mutaciones y manejarme exclusivamente con las acciones
    // // pero con eso de esto combiene en sincrono y esto en no-cincrono ya no se bien
    // // por las dudas dejo el ejemplo
    // ...mapMutations([
    //   "mut_setTimeLineTwiterList",
    //   "mut_setShowedTwitItemList",
    //   "mut_setTimeLineItemsOnShowedTwitItemList"
    // ])
  },
  created() {
    // let count = 100;
    // let limit = 10;
    // // osea que aca tendria ( creo ) que hacer la llamada para traer la data de server
    // if ( this.$store.getters.get_timeLineTwitListQuantity <= 0 ) {
    //   console.log('no tengo mas voy abuscar mas', this.$store.getters.get_timeLineTwitListQuantity);
    //   this.$store.dispatch('act_setTimeLineTwiterList', count);
    //   this.$store.dispatch('act_setTimeLineItemsOnShowedTwitItemList', limit);
    // } else {
    //   console.log('todabia tengo', this.$store.getters.get_timeLineTwitListQuantity);
    //   this.$store.dispatch('act_setTimeLineItemsOnShowedTwitItemList', limit);
    // }

    // console.log('itemlist', this.twitItemList);
    // // twitterListFromServer () {
    // //   console.log( 'tuiter list compo: ', this.$store.getters.get_TwitList);
    // //   return this.$store.getters.get_TwitList;
    // // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .twitterList {
    &__unreade {
      padding: 1vmin;
    }

    ul {
      margin: 0;
      padding: 0 1vw;
    }

    &_item {
      // border-bottom: 1px solid #42b983;
      list-style: none;
      padding: 1vh .5vw;
      text-align: left;
        // background-color: orange;
      &__container {
        border-bottom: 1px solid #3e3860;
        display: flex;
        margin-bottom: 2vh;
      }
      &__user{
        // background-color: #2331fd;
        &__image {
          width: 6vmin;
          max-width: 7vmin;
        }
      }
    }
  }
  .twitterListItem_userAvatar {
    max-width: 6vmin;
    max-height: 6vmin;

    &__image {
      max-width: 7vmin;
    }
  }
</style>
