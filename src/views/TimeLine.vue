<template>
  <div class="timeLine">

    <TwitterList class="twitList" msg=4 />

    <TwitSingleItemDetails></TwitSingleItemDetails>
  </div>
</template>

<script>
// @ is an alias to /src
import TwitterList from '@/components/TwitterList.vue'
import TwitSingleItemDetails from '@/components/TwitSingleItemDetails.vue'

export default {
  name: 'TimeLine',
  components: {
    TwitterList,
    TwitSingleItemDetails
  }
}
</script>

<style lang="scss">
.timeLine {
  display:flex;
  flex-direction: column;
  .twitList {
    // background-color: #c3fd45;
    min-width: 40vw;
  }
}
</style>
