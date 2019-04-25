<template>
  <div class="panel-card-wrapper">
    <div class="item-name">{{name}}</div>
    <div class="item-memory">{{memory}}</div>
    <img class="item-image" :src="src">
    <div class="btn-wrapper">
      <button class="b-edit">Edit</button>
      <button class="b-remove">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    card: Object,
  },
  data() {
    return {
      name: card.name,
      memory: card.memory,
      src: `../assets/clothes/item-${this.card.id}-small.jpg`,
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

.panel-card-wrapper {
  display: block;
  border: 1px rgba(16, 16, 16, 0.2) solid;  
  padding: 10px;
  position: relative;
  width: 150px;
  height: 200px;
  margin-bottom: 20px;
}

.item-name {
  font-family: "Adieu";
  font-size: 1.8rem;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
}
.item-memory {
  font-size: 1.5rem;
  line-height: 2rem;
}
.btn-wrapper {
  position: absolute;
  padding: 0 10px;
  width: 100%;
  left: 0;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-wrapper button {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 5px 10px;
  text-transform: uppercase;
  color: black;
  font-size: 10px;
}
.btn-wrapper button:hover {
  background: rgba(0, 0, 0, 0.05);
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
