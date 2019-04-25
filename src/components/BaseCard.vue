<template>
  <div class="card-wrapper">
    <router-link :to="`/item/${card.id}`">
      <div v-show="toggled" class="item-wrapper">
        <div class="item-name">{{ card.name }}</div>
        <div class="item-memory">{{ card.memory }}</div>
      </div>
      <div v-show="!toggled" class="item-wrapper">
        <img :src="imageSrc">
      </div>

      <div class="btn-wrapper">
        <button class="b-learn-more">Learn More</button>
        <button class="b-reserve">Reserve</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    card: Object,
    toggled: Boolean
  },
  data() {
    return {
      imageSrc: this.card.src
    };
  }
};
</script>

<style scoped>
.card-wrapper {
  border: 1px rgba(16, 16, 16, 0.2) solid;
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  height: 30vw;
}
.item-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rem 4rem;
  background-repeat: no-repeat;
  background-size: cover;
}
.item-name {
  font-family: "Adieu";
  font-size: 1.8rem;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.item-memory {
  font-size: 1.5rem;
  line-height: 2rem;
}
.btn-wrapper {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  right: 4rem;
  display: flex;
  flex-direction: row;
}
.btn-wrapper button {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  padding: 1.3rem 2.8rem;
  border-radius: 100px;
}
.b-learn-more {
  flex: 1;
  border: 1px #161616 solid;
  margin-right: 2rem;
}
.b-reserve {
  background: #161616;
  color: #fff;
}
</style>
