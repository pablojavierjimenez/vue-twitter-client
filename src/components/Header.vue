<template>
    <header id="header">

        <span id="hamburger_image__container" class="header_button__container">
          <img class="header_logo__image" alt="Vue logo" src="../assets/hamburger.svg">
        </span>

        <span id="brand" class="header_button__container">
          <router-link to="/">
            <img class="header_logo__image" alt="Vue logo" src="../assets/logo-loro.svg">
          </router-link>
          <span id="page_title">
            <slot></slot>
            Ttruchitter
          </span>
        </span>

        <span class="menulink__container">
          <MenuNav></MenuNav>
        </span>

        <span class="header_button__container">
          <UserAvatar :username="user.name" userAvatarImageLink="https://pbs.twimg.com/profile_images/3372666559/d2638511dec55b489c51ce254755089a_bigger.jpeg"></UserAvatar>
        </span>

    </header>
</template>

<script>
  import UserAvatar from '@/components/UserAvatar.vue'
  import MenuNav from '@/components/MenuNav.vue'

  export default {
    name: 'Header',
    components: {
      UserAvatar,
      MenuNav
    },
    data: function () {
      return {
        user: {
          avatar: "../assets/userAvatar.svg",
          name: "un chabon"
        }
      };
    }
  }
</script>

<style lang="scss">

#header {
  background-color: #7042b9;
  display: flex;
  justify-content: space-between;
  padding: .5vh 2vmin 1vh;
  position: fixed;
  top: 0;
  align-items: flex-end;
  max-width: 100vw;
  box-shadow: 0px 0px 3px grey;
  &>span.header_button__container {
    width: 8vmin;
  }

  #hamburger_image__container {
    display: none;
  }

  .header_logo__image {
    max-width: 7vmin;
  }

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    margin: 1vmin;
    &.router-link-exact-active {
      color: #d8d414;
    }
  }

  #brand {
    display: flex;
    align-items: flex-end;
  }

  #page_title {
    display: block;
    letter-spacing: .2vmin;
    color: #ffffff;
    text-shadow:2px 2px 3px #212121;
  }

  .menulink__container {
    color: #ffffff;
  }
}
</style>
