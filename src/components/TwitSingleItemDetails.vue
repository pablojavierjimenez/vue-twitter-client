<template>
  <div class='TwitSingleItemDetails__content' >
    <header class='TwitSingeItem__header'>
      <span class='TwitSingeItem__userName'>
        <!-- {{singleTwitDetailsData.itemData.user.name}} -->
      </span>
      <span class='TwitSingeItem__userId'>
        <!-- <a href='#'>@{{singleTwitDetailsData.itemData.user.screen_name}}</a> -->
      </span>
      <span class='TwitSingeItem__userDate'>{{getCreatedAtDate}}</span>
    </header>

    <section class='TwitSingeItem__text'>
      {{singleTwitDetailsData.itemData.text}}
    </section>

    <!-- <footer class='TwitSingeItem__footer'>
      <span class='TwitSingleItem__commentsQuantity'>
        <img class='TwitSingeItem__footer_icon' src='../assets/icon/baseline-chat_bubble_outline-24px.svg' alt='response'>
        3
      </span>
      <span class='TwitSingleItem__retwitQuantity'>
        <img class='TwitSingeItem__footer_icon' src='../assets/icon/baseline-repeat-24px.svg' alt='response'>
        {{singleTwitDetailsData.itemData.favorite_count}}
      </span>
      <span class='TwitSingleItem__favoriteQuantity'>
        <img class='TwitSingeItem__footer_icon' src='../assets/icon/baseline-favorite-24px.svg' alt='favorite'>
        {{singleTwitDetailsData.itemData.favorite_count}}
      </span>
    </footer> -->
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import UserAvatar from '@/components/UserAvatar.vue'

  export default {
    name: 'TwitSingleItemDetails',
    components: {
      UserAvatar,
    },
    props: {},
    data() {
      return {
        nameDetail: 'pepe'
      };
    },
    computed: {
      ...mapState(['singleTwitDetailsData'])
    },
    methods: {},
    /**
     * HOOKS
     */
    beforeCreated() {},
    created() {
      // created se recomienda como el mejor hook para interactuar con data del servidor
    },
    beforeMount() {},
    mounted() {},
    // ciclo de actualizacion de los componentes beforeUpdate y updated
    beforeUpdated() {
      // este es equivalente a beforeMount
    },
    updated() {
      // este es equivalente a mounted
      console.log('details', this.singleTwitDetailsData);
    },
    beforeDestroy() {},
    destroyed() {}
  };
</script>

<style scoped lang='scss'>
  .TwitSingleItemDetails {
    &__content {
      align-self: center;
      background-color: #da45fd;
      width: 60vw;
    }
  }
</style>
