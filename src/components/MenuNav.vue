<template>
    <div class="MenuNav">
      <router-link to="/configuration">
        <span class="link_icon">
          <img src="../assets/icon/sharp-settings-24px.svg" />
        </span>
        <span class="link_text">configuration</span>
      </router-link>
      <router-link to="/friends">
        <span class="link_icon">
          <img src="../assets/icon/sharp-group-24px.svg" />
        </span>
        <span class="link_text">friends</span>
      </router-link>
      <router-link to="/trends">
        <span class="link_icon">
          <img src="../assets/icon/sharp-trending_up-24px.svg" />
        </span>
        <span class="link_text">trends</span>
      </router-link>
      <router-link to="/favorites">
        <span class="link_icon">
          <img src="../assets/icon/sharp-favorite_border-24px.svg" />
        </span>
        <span class="link_text">favorites</span>
      </router-link>
      <router-link to="/search">
        <span class="link_icon">
          <img src="../assets/icon/sharp-search-24px.svg" />
        </span>
        <span class="link_text">search</span>
      </router-link>
    </div>
</template>
<script>
export default {
  name: 'MenuNav',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.MenuNav {
  display: flex;
  justify-content: space-around;
  min-width: 50vw;
  color: #ffffff;
  // background-color: #d8d414;
  // padding: 2vh;
  // position: fixed;
  // bottom: 0;
  // border: 1px solid #000;
  a {
    // border: 1px solid #000;
    display: flex;
    justify-content: flex-end;
    // background: blue;
    align-items: center;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
      // color: #d8d414;
    }
    span.link_text {
    // border: 1px solid #000;
      // background: blanchedalmond;
      // line-height: 5vmin;
    }
    span.link_icon {
      margin: 0 1vmin;
      // width: 5vmin;
      // height: 5vmin;
    }
  }
}
</style>
