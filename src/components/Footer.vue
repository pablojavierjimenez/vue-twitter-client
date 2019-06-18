<template>
    <footer id="footer">
      <MenuNav></MenuNav>
    </footer>
</template>

<script>
import MenuNav from '@/components/MenuNav.vue'

export default {
  name: 'Footer',
  components: {
    MenuNav
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
#footer {
  background-color: #3e3860;
  padding: 1vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  .MenuNav {
    width: 100vw;
    a {
      font-weight: bold;
      color: #42b983;
      display: flex;
      &.router-link-exact-active {
        color: #d8d414;
      }
      span {
        .link_text {
          // background: blanchedalmond;
          line-height: 5vmin;
        }
        .link_icon {
          color: #ffffff;
          margin: 0 1vmin;
          // width: 5vmin;
          // height: 5vmin;
          padding: 1vmin 1vmin 0 1vmin;
        }
      }
    }
  }
}
</style>
