<template>
  <div class="card-wrapper">
    <router-link :to="`/item/${index}`">
      <div :class="{visible: toggled, 'item-wrapper': true}">
        <div class="item-name">{{ card.name }}</div>
        <div class="item-memory">"{{ card.memory }}"</div>
      </div>
      <div :class="{visible: !toggled, 'item-wrapper': true}">
        <img class="item-image" :src="imageSrc">
      </div>

      <div class="btn-wrapper">
        <button class="b-learn-more">Learn More / Reserve</button>
        <!-- <button class="b-reserve">Reserve</button> -->
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    card: Object,
    toggled: Boolean,
    index: Number, 
  },
  data() {
    return {
      imageSrc: require(`@/assets/clothes/item-${this.index}-small.jpg`)
      // imageSrc: this.card.src
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.card-wrapper {
  border: 1px rgba(16, 16, 16, 0.2) solid;
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  height: 25vw;
  overflow: hidden;
}
.card-wrapper:hover .item-wrapper .item-image {
  transform: scale(1.06)
}
.item-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 15rem 4rem; */
  padding: 5px;
  padding-top: 25px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: scroll;
  position: absolute;
  transition: opacity 222ms ease-in; 
  opacity: 0.1;
  z-index: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
.item-wrapper.visible {
  opacity: 1;
  z-index: 10;
}

.item-name {
  font-family: "Adieu";
  font-size: 1.8rem;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  margin-top: 1rem;
}
.item-memory {
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0 10px;
}
.item-image {
  /* position: absolute; */
  width: 100%;
  /* top: 25px; */
  /* left: 0; */
  transform-origin: 50% 0;
  transition: transform 333ms ease;
}
.btn-wrapper {
  position: absolute;
  height: 10%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%); 
  /* width: 50%; */
  display: flex;
  flex-direction: row;
}
.btn-wrapper button {
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  padding: 0.5rem 2rem;
  border-radius: 100px;
  font-size: 10px;
  line-height: 1.2rem;
}
.b-learn-more {
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-right: 2rem;
  transition: background 333ms ease, color 333ms ease;
}
.b-learn-more:hover {
  background: #161616;
  color: #eee;
}
.b-reserve {
  background: #161616;
  color: #fff;
}
</style>
