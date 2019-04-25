

<template>
  <div class="purchase-form">
    <h2 class="request-title">Request This Item</h2>
    <input type="text" v-model="name" placeholder="Name">
    <input type="text" v-model="email" placeholder="Contact email">
    <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1YGi9pVnsIbiRlJGetVk7nVTL7hLfyek-QfUm8K-fhw4mMA/viewform?embedded=true" width="640" height="627" frameborder="0" marginheight="0" marginwidth="0">
      Loading...
    </iframe>-->
    <!-- <form action="https://docs.google.com/forms/d/e/1FAIpQLSd1YGi9pVnsIbiRlJGetVk7nVTL7hLfyek-QfUm8K-fhw4mMA/formResponse">

      <input type='text'>Your Name</input>
      <button type='submit'>Submit</button>
    </form>-->
    <a :href="this.mailto">Request</a>
  </div>
</template>

<script>
export default {
  name: "PurchaseForm",
  props: {
    index: Number,
    itemMeta: Object
  },
  data() {
    return {
      name: undefined,
      email: undefined
    };
  },
  computed: {
    mailto: function() {
      const address = "memoryswap@gmail.com",
        subject = `Requesting ${this.itemMeta.name}, Item #${this.index}`,
        body = `Hi, my name is ${this.name || "[name]"} requesting the ${
          this.itemMeta.name
        }. I want to give this piece of clothing another life!
When the item is ready for pickup, please contact me at ${this.email ||
          "[email]"}

This is item #${this.index}.
`;

      console.log(
        `mailto:${address}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`
      );
      return `mailto:${address}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return `test`;
    }
  }
};
</script>


<style scoped>
.purchase-form {
  z-index: 1000;
  margin-top: 2rem;
}
.request-title {
  text-transform: uppercase;
  font-weight: 400;
}
h4 {
  width: auto;
  text-align: center;
  font-weight: 400;
}
input {
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

input:last-of-type {
  margin-bottom: 3rem;
}
a {
  padding: 1rem 3rem;
  border-radius: 20px;
  background: #161616;
  transition: background 222ms ease, color 222ms ease;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  text-transform: uppercase;
}
a:hover {
  border: 1px solid #161616;
  background: white;
  color: #161616;
}
</style>