<template>
  <span class="UserSingleItem__content">
    <header class="UserSingleItem__header">
      <span class="UserSingleItem__userName">
        {{userItemData.name}}
      </span>
      <div class="UserSingleItem_dataRow UserSingleItem__userId">
        <a :href="userItemData.url" target="blank">@{{userItemData.screen_name}}</a>
      </div>
      <div class="UserSingleItem_dataRow UserSingleItem__userLocation">{{userItemData.location}}</div>
      <div class="UserSingleItem_dataRow UserSingleItem__userDescription">{{userItemData.description}}</div>
    </header>

    <section class="UserSingleItem__text">
      {{userItemData.text}}
    </section>

    <!-- <footer class="UserSingleItem__footer">
      <span class="TwitSingleItem__commentsQuantity">
        <img class="UserSingleItem__footer_icon" src="../assets/icon/baseline-chat_bubble_outline-24px.svg" alt="response">
        3
      </span>
      <span class="TwitSingleItem__retwitQuantity">
        <img class="UserSingleItem__footer_icon" src="../assets/icon/baseline-repeat-24px.svg" alt="response">
        {{userItemData.favorite_count}}
      </span>
      <span class="TwitSingleItem__favoriteQuantity">
        <img class="UserSingleItem__footer_icon" src="../assets/icon/baseline-favorite-24px.svg" alt="favorite">
        {{userItemData.favorite_count}}
      </span>
    </footer> -->
  </span>
</template>

<script>
// hay que agregaresto despues {{retweet_count}}
/**
 * id: 131418981,
 * id_str: "131418981",
 * name: "cornelio del  🍿",
 * screen_name: "miguegranados",
 * location: "Buenos Aires, Argentina",
 * description: "CEO de mí. Radio y TV. Comer y beber. Vite como e.",
 * url: "https://t.co/6QwGntwmX8",
*/



export default {
  name: 'UserSingleItem',
  props: {
    userItemData: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .UserSingleItem {
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
      .UserSingleItem_dataRow {
        line-height: 1.6rem;
      }
    }
    &__userId {
      color: #ffffff;
      font-weight: bold;
      letter-spacing: .04rem;
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
