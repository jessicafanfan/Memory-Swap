<template>
  <div class="item-page">
    <section class="item-wrapper">
      <div class="item-img">
        <img :src="itemSrc">
      </div>
      <div class="infoBlock">
        <h1 class="item-title">{{itemMeta.name}}</h1>
        <h3 class="item-memory">{{itemMeta.memory}}</h3>
        <PurchaseForm :index="itemIndex" :itemMeta="itemMeta"/>
      </div>
    </section>
  </div>
</template>

<script>
import PurchaseForm from "@/components/PurchaseForm.vue";

export default {
  name: "item",
  components: {
    PurchaseForm
  },
  props: {
    meta: Object,
    index: Number
  },
  data() {
    return {
      itemMeta: this.meta.cards[this.$route.params.id],
      itemIndex: this.$route.params.id,
      itemSrc: require(`@/assets/clothes/item-${this.$route.params.id}-big.jpg`)
    };
  }
};
</script>

<style scoped>
.item-page {
  margin: 14vw 5rem 10vw 5rem;
}

.infoBlock {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  float: right;
  width: 30vw;
  margin-right: 10vw;
}
.item-img {
  position: fixed;
  top: 2vw;
  left: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-wrapper img {
  width: 90%;
}

.item-title {
  font-family: "adieu";
  font-size: 2.5rem;
  text-transform: uppercase;
}

.item-memory {
  font-family: "eh";
  font-weight: 400;
  padding-bottom: 6rem;
  border-bottom: 1px gainsboro solid;
}
</style>
