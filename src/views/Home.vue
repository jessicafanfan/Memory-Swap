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
      <div v-for="card in cards">
        <BaseCard :toggled="toggled" :card="card"/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      toggled: false,
      cards: [
        {
          name: "Red Jacket",
          memory:
            "This was a jacket given to me by my lovely aunt who loves overseas in Tokyo. I fondly remember the time she visited the States.",
          src: "https://source.unsplash.com/random/200x300"
        },
        {
          name: "White Shirt",
          memory:
            "I proposed to my wife wearing this t-shirt. I still remember the day like it was yesterday. We have been married for 80 years and things are pretty good. I hope to be married another 80 years"
        },
        {
          name: "Beige Pants",
          memory: "My ex-boyfriend left these pants at my apartment."
        },
        {
          name: "Gray T-shirt",
          memory:
            "This is my uniform shirt for my part-time job at Starbucks. A lot of free coffee, friendly people but also hard work and long hours."
        },
        {
          name: "Graphic T-shirt",
          memory:
            "I got this shirt for free at this super dope film festival in Amsterdam. "
        },
        {
          name: "Black Pants",
          memory: "My mom bought be these pants and I never wear them."
        },
        {
          name: "Green Pants",
          memory:
            "When I was in high school, I bought this pair of pants with my mother. "
        },
        {
          name: "Yellow T-Shirt",
          memory:
            "This was my free dorm room shirt. I remember that day was blazingly hot but I was excited at my new college adventure."
        }
      ]
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
