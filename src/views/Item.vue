<template>
  <div class="item page">
    <h2>Item Page</h2>
    <h1>{{itemMeta.name}}</h1>
    <img :src="itemMeta.src" />
    <h3>{{itemMeta.memory}}</h3>
  </div>
</template>

<script>

import globalMeta from '../data/globalMeta.js'

export default {
  data() {
    // console.log(globalMeta.cards[this.$route.params.id])
    return {
      itemMeta: globalMeta.cards[this.$route.params.id]
    }
  },
  name: "item",
  components: {

  }
};
</script>
