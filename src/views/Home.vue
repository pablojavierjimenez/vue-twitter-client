<template>
  <div class="home">
    <TwitterList msg="4"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TwitterList from '@/components/TwitterList.vue'

export default {
  name: 'home',
  components: {
    TwitterList
  }
}
</script>
