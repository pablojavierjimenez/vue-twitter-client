<template>
    <span calss="userAvatar">
        <router-link to="/user/">
        <!--
            TODO: aca tengo que agregar el link al perfil de usuario
            pero falta hacer la vista de user individual y configurar el root
            tambien estaria bueno luego meter todas los svg en un sprite svg

            FIXME: POR QUE CUERNOS NO ANDA ESTO
            <img class="header_logo__image" :alt="username" :src="getUserAvatara">
            -->
            <img class="userAvatar__image" :alt="username" :src="userAvatarImageLink">
        </router-link>
    </span>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    username: String, // juan gomez
    userAvatarImageLink: String //../assets/userAvatar.svg
  },
  computed: {
    getUserAvatara: function () {
      return this.userAvatarImageLink
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .userAvatar {
    // width: 6vmin;
    // max-width: 7vmin;
    border-radius: 50%;
    .header_icon__container {
      min-width: 10vmin;
      min-height: 10vmin;
    }
    &__image {
      width: 100%;
      max-width: 20vmin;
      border-radius: 50%;
    }
  }
</style>
