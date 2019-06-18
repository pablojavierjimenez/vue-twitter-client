<template>
  <span class="TwitSingeItem__content">
    <header class="TwitSingeItem__header">
      <span class="TwitSingeItem__userName">
        {{twitItemData.user.name}}
      </span>
      <span class="TwitSingeItem__userId">
        <a href="#">@{{twitItemData.user.screen_name}}</a>
      </span>
      <span class="TwitSingeItem__userDate">{{getCreatedAtDate}}</span>
    </header>

    <section class="TwitSingeItem__text" @click="showThisSingleTwitDetails">
      {{twitItemData.text}}
    </section>

    <footer class="TwitSingeItem__footer">
      <span class="TwitSingleItem__commentsQuantity">
        <img class="TwitSingeItem__footer_icon" src="../assets/icon/baseline-chat_bubble_outline-24px.svg" alt="response">
        3
      </span>
      <span class="TwitSingleItem__retwitQuantity">
        <img class="TwitSingeItem__footer_icon" src="../assets/icon/baseline-repeat-24px.svg" alt="response">
        {{twitItemData.favorite_count}}
      </span>
      <span class="TwitSingleItem__favoriteQuantity">
        <img class="TwitSingeItem__footer_icon" src="../assets/icon/baseline-favorite-24px.svg" alt="favorite">
        {{twitItemData.favorite_count}}
      </span>
    </footer>
  </span>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
// hay que agregaresto despues {{retweet_count}}
export default {
  name: 'TwitSingeItem',
  props: {
    twitItemData: Object
  },
  computed: {
    ...mapState(['showedSingleTwit']),
    ...mapMutations(['mut_setTrendsList']),
    ...mapActions(['act_setTrendsList']),
    getCreatedAtDate() {
      let twitDate = new Date(this.twitItemData.created_at);
      return twitDate.getDate() + '/' + twitDate.getMonth() + '/' + twitDate.getFullYear();
    }
  },
  methods: {
    showThisSingleTwitDetails() {
      let detailsData = {
        display: true,
        itemData: this.twitItemData
      };
      console.log(detailsData);
      this.$store.dispatch('act_singleTwitDetailsData', detailsData);
      return
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .TwitSingeItem {
    &__content {
      padding: 1vh 1vw 1vh 2vw;
      margin-left: 2vw;
    }
    &__header {
      padding: 0 0 1vh;
      font-size: .9rem;
      span {
        // background-color: #fd2367;
        margin: 0 1vw 0 0;
        padding: 1vh 0;
      }
    }
    &__userId {
      color: #3e3860;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    &__text {
      padding: 1vh 0;
    }
    &__footer {
      // background-color: #23fd2e;
      display: flex;
      font-size: .9rem;
      justify-content: flex-start;
      padding-top: 1vh;

      span {
        // border: 1px solid #000;
        width: 5vw;
      }

      &_icon {
        width: 2vmin;
        height: 2vmin;
      }
    }
  }
</style>
