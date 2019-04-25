<template>
  <div class="item-page">
    <section class="item-wrapper">
      <h1>{{itemMeta.name}}</h1>
      <img :src="itemSrc" />
      <h3>{{itemMeta.memory}}</h3>
    </section>
    <PurchaseForm :id="itemMeta.id" />
  </div>
</template>

<script>
import PurchaseForm from '@/components/PurchaseForm.vue'

export default {
  name: "item",
  components: {
    PurchaseForm, 
  },
  props: {
    meta: Object,
    index: Number, 
  },
  data() {
    return {
      itemMeta: this.meta.cards[this.$route.params.id],
      itemSrc: require(`@/assets/clothes/item-${this.$route.params.id}-big.jpg`)
    };
  }
};
</script>

<style scoped>
.item-page {
  margin: 14vw 5rem 10vw 5rem;

}
.item-wrapper {
  position: absolute;
  width: 60%;
  left: 20%;
  z-index: 0;
}
.item-wrapper img {
  width: 100%;
}


</style>
