<template>
  <div class="friends">
    <ul>
      <li class="friends_item"  v-for="friend in friendsList" :key="friend.id">
        <article class="friends_item__container">
          <span class="friends_item__user">
            <UserAvatar class="friends_item_user__image" :username="friend.name" :userAvatarImageLink="friend.profile_image_url"></UserAvatar>
          </span>
          <UserSingleItem :userItemData="friend"></UserSingleItem>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex";
  import UserAvatar from '@/components/UserAvatar.vue'
  import UserSingleItem from '@/components/UserSingleItem.vue'

  export default {
    name: "friends",
    components: {
      UserAvatar,
      UserSingleItem
    },
    props: {},
    data() {
      return {
        name: "pepe"
      };
    },
    computed: {
      ...mapState(["friendsList"]),
      ...mapGetters(["get_friendsList"]),
      ...mapActions(["act_setFriendsList"])
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
      this.$store.dispatch('act_setFriendsList');
      console.log('friendslist data::--> ', this.$store.state.friendsList);
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

<style scoped lang="scss">
  .friends {
    &__unreade {
      padding: 1vmin;
    }

    ul {
      margin: 0;
      padding: 0 1vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &_item {
      box-shadow: 0px 1px 2px grey;
      list-style: none;
      padding: 1vh .5vw;
      text-align: left;
      // background-color: orange;
      min-width: 25vw;
      max-width: 50vw;
      width: 27vw;
      margin: 2vmin;
      &__container {
        // border-bottom: 1px solid #3e3860;
        display: flex;
        // margin-bottom: 2vh;
      }
      &__user{
        // background-color: #2331fd;
        min-width: 10vmin;
        min-height: 10vmin;
        // &__image {
        //   width: 6vmin;
        //   max-width: 7vmin;
        // }
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
