<template>
  <div class="item page">
    <h2>Item Page</h2>
    <h1>{{itemMeta.itemName}}</h1>
    <img :src="itemMeta.itemImageSrc" />
    <h3>{{itemMeta.memoryCopy}}</h3>
  </div>
</template>

<script>

// import globalMetadata from '../data/globalMetadata.js'

const globalMeta = {
  '4': {
    itemName: 't-shirt',
    itemImageSrc: '../item6image',
    memoryCopy: 'I bought this t-shirt when I was a kid'
  },
  '6': {
    itemName: 't-shirt',
    itemImageSrc: '../item6image',
    memoryCopy: 'I bought this t-shirt when I was a kid'
  }
}


export default {
  data() {
    console.log(globalMeta[this.$route.params.id])
    return {
      itemMeta: globalMeta[this.$route.params.id]
      // itemMetadata: globalMetadata[route.params.id]
    }
  },
  name: "item",
  components: {

  }
};
</script>
