<template>
  <div class="home">
    <div class="switch-wrapper">
      <div class="switch-clothing">Clothing</div>
      <toggle-button
        @change="toggled = $event.value"
        :color="{checked: '#161616', unchecked: '#161616'}"
        :height="24"
        :width="40"
        :margin="3.5"
      />
      <div class="switch-memory">Memory</div>
    </div>
    <pre>State: {{toggled}}</pre>
    <section class="grid-container">
      <div v-for="card in cards" :key="card.id + 'id'">
        <BaseCard :toggled="toggled" :card="card"/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import globalMeta from "../data/globalMeta.js";

export default {
  name: "home",
  data() {
    console.log(globalMeta.cards)
    return {
      toggled: false,
      cards: globalMeta.cards, 
    };
  }
};
</script>
<style scoped>
.grid-container {
  margin: 14vw 5rem 10vw 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-column-gap: 4rem;
  grid-row-gap: 9rem;
}
.switch-wrapper {
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  width: 50px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
}
.switch-clothing {
  padding-right: 2rem;
}
.switch-memory {
  padding-left: 2rem;
}
</style>
