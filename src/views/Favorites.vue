<template>
  <div id="favorites">
    <h2>FAVORITES</h2>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
// import SingleUser from "@/components/SingleUser.vue";

export default {
  name: "favorites",
  components: {},
  props: {},
  data() {
    return {
      name: "pepe"
    };
  },
  computed: {},
  methods: {},
  /**
   * HOOKS
   */
  beforeCreated() {},
  // created se recomienda como el mejor hook para interactuar con data del servidor
  created() {
    // osea que aca tendria ( creo ) que hacer la llamada para traer la data de server
    // this.$store.dispatch('act_setUserListDataFromServer', count);
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

<style scoped>
</style>
