

<template>
  <div class="purchase-form">
    <h2>Purchase this Item?</h2>
    <h4>Name</h4>
    <input type="text" v-model="name" placeholder="name">
    <h4>Contact Email</h4>
    <input type="text" v-model="email" placeholder="myemail@gmail.com">
    <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1YGi9pVnsIbiRlJGetVk7nVTL7hLfyek-QfUm8K-fhw4mMA/viewform?embedded=true" width="640" height="627" frameborder="0" marginheight="0" marginwidth="0">
      Loading...
    </iframe> -->
    <!-- <form action="https://docs.google.com/forms/d/e/1FAIpQLSd1YGi9pVnsIbiRlJGetVk7nVTL7hLfyek-QfUm8K-fhw4mMA/formResponse">

      <input type='text'>Your Name</input>
      <button type='submit'>Submit</button>
    </form> -->
    <a :href="this.mailto">Request</a>
  </div>
</template>

<script>
export default {
  name: "PurchaseForm",
  props: {
    index: Number,
    itemMeta: Object,
  },
  data() {
    return {
      name: undefined,
      email: undefined,
    };
  },
  computed: {
    mailto: function() {
      const address = 'memoryswap@gmail.com', 
        subject = `Requesting ${this.itemMeta.name}, Item #${this.index}`,
        body = 
`Hi, my name is ${this.name || '[name]'} requesting the ${this.itemMeta.name}. I want to give this piece of clothing another life!
When the item is ready for pickup, please contact me at ${this.email || '[email]'}

This is item #${this.index}.
`; 
      
      console.log(`mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; 
      return `test`; 
    }
  }
 
};
</script>


<style scoped>
.purchase-form {
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
h4 {
  color: black;
  width: auto;
}
a {
  margin-top: 2rem;
  padding: 10px; 
  border-radius: 20px;
  background: black; 
  width: 100px;
  transition: background 222ms ease, color 222ms ease;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
a:hover {
  border: 1px solid black;
  background: white;
  color: black;
}

</style>