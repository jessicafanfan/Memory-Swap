<template>
  <div id="app" v-cloak>
    <router-link to="/" class="site-logo">
      Memory
      <br>Swap
    </router-link>
    <nav>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view :meta="meta"/>
  </div>
</template>

<script>
import globalMeta from './data/globalMeta.js';
// import FirebaseController from './controllers/FirebaseController.js';
// const firebaseController = new FirebaseController();

export default {
  name: "app",
  data() {
    return {
      fbData: [], 
      meta: globalMeta,
    }
  },
  // created() {
  //   let vueApp = this; 
  //   firebaseController.getAllClothesData(querySnapshot => {
  //     // this.clothesMeta = data; console.log(data)
  //     querySnapshot.forEach((doc) => {vueApp.fbData.push(doc.data())});
  //   }); 
  // }
};
</script>

<style>
@font-face {
  font-family: "Adieu";
  font-display: block;
  src: url("../src/assets/fonts/Adieu.otf") format("opentype");
  font-weight: 600;
}
@font-face {
  font-family: "Eh";
  font-display: block;
  src: url("../src/assets/fonts/Eh.otf") format("opentype");
  font-weight: 400;
}
html {
  font-size: 10px;
  cursor: default;
}
a {
  color: inherit;
  text-decoration: inherit;
}
button {
  all: unset;
}
#app {
  font-family: "Eh", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #161616;
  font-size: 1.2rem;
}
.site-logo {
  font-family: "Adieu";
  font-size: 5rem;
  text-align: left;
  text-transform: uppercase;
  line-height: 4.5rem;
  position: fixed;
  top: 5rem;
  left: 5rem;
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

nav {
  display: flex;
  flex-direction: column;
  text-align: right;
  text-transform: uppercase;
  line-height: 1.9rem;
  letter-spacing: 0.04rem;
  position: fixed;
  top: 5rem;
  right: 5rem;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
