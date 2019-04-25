<template>
  <div class="panel">
    <!-- <section class="firebase-cards">
      <h3 class='section-header'>Firebase Stored Clothing Items</h3>
      <div class="grid-container">
        <PanelCard v-for="card in cards" :key="card.id + 'id'" :card="card"/>
      </div>
    </section>
    <section class="edit-form">
      
    </section> -->
  </div>
</template>

<script>
// import FirebaseController from '@/controllers/FirebaseController.js';
// import PanelCard from '@/components/PanelCard.vue';
// const firebaseController = new FirebaseController();

// export default {
//   name: "panel",
//   props: {
//     meta: Object,
//   },
//   components: {
//     PanelCard,
//   },
//   data() {
//     return {
//       toggled: false,
//       cards: [], 
//     };
//   },
//   created() {
//     let vueApp = this; 
//     firebaseController.getAllClothesData(querySnapshot => {
//       querySnapshot.forEach((doc) => {vueApp.cards.push(doc.data())});
//     }); 
//   }
// };
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  border: 1px solid  rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 30px;
  margin-top: 180px;
  background: white;
  z-index: 100;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: block;
  font-size: 30px;
  text-align: left;
  margin: 0;
  margin-bottom: 25px;
}

.grid-container {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
}


</style>
