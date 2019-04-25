<template>
  <div class="about">
    <div class="title-wrapper">
      <h1 class="title">
        <span class="blue">How</span> to:
        <br>Memory Swap
      </h1>
      <p
        class="body-text"
      >We keep our clothing, even things we no longer wear, because they represent our memories: the dress you wore on your first day of college, the hat that your dad gave you, the jacket your ex-boyfriend left at your house and you quietly held on too. When we no longer wear these clothes, they become just a placeholder for our memories, a physical burden sitting in our closet and stagnating.</p>
      <p class="body-text">
        Memory Swap is
        <span
          class="blue"
        >a chance to give these clothes a new life while keeping your memories alive.</span>
      </p>
      <p class="body-text">Find out below how you can participate in a memory swap!</p>
    </div>
    <ul class="steps-list">
      <li class="list-block">
        <div class="block-item">
          <h1 class="title list-title">
            <div class="number">1.</div>We
            <span class="blue">Collect</span>
          </h1>
          <p
            class="body-text list-text"
          >Bring an article of clothing that you think others might wear, that also represents a memory. The memory can be big or small, as long as it has meaning to you.</p>
        </div>
        <div class="block-item">
          <img src="@/assets/images/01.png" class="illustration">
        </div>
      </li>
      <li class="list-block">
        <div class="block-item">
          <h1 class="title list-title">
            <div class="number">2.</div>You
            <span class="blue">Submit</span>
          </h1>
          <p class="body-text list-text">Fill out our form so we can archive your memory.</p>
        </div>
        <div class="block-item">
          <img src="@/assets/images/02.png" class="illustration">
        </div>
      </li>
      <li class="list-block">
        <div class="block-item">
          <h1 class="title list-title">
            <div class="number">3.</div>We
            <span class="blue">Customize</span>
          </h1>
          <p
            class="body-text list-text"
          >We will turn the form into a fabric label that will be attached to the article of clothing.</p>
        </div>
        <div class="block-item">
          <img src="@/assets/images/03.png" class="illustration">
        </div>
      </li>
      <li class="list-block">
        <div class="block-item">
          <h1 class="title list-title">
            <div class="number">4.</div>We
            <span class="blue">Archive</span>
          </h1>
          <p
            class="body-text list-text"
          >The article of clothing will be uploaded to the Memory Swap website, where others can browse the shared clothing and memory.</p>
        </div>
        <div class="block-item">
          <img src="@/assets/images/04.png" class="illustration">
        </div>
      </li>
      <li class="list-block">
        <div class="block-item">
          <h1 class="title list-title">
            <div class="number">5.</div>You
            <span class="blue">Swap</span>
          </h1>
          <p class="body-text list-text">Visit the website and swap for another item!</p>
        </div>
        <div class="block-item">
          <img src="@/assets/images/05.png" class="illustration">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  width: 70vw;
  margin: auto;
  margin-top: 12vw;
  text-align: left;
}
.title-wrapper {
  padding: 0 15vw 10vw 15vw;
  border-bottom: 10px solid #ffe7c1;
}
.title {
  font-family: "Adieu";
  font-size: 3.5rem;
  text-transform: uppercase;
  line-height: 3.5rem;
  position: relative;
}
.number {
  position: absolute;
  left: -2vh;
}
.blue {
  color: #7373a7;
}
.body-text {
  font-size: 1.8rem;
  line-height: 2.2rem;
}
.steps-list {
  padding: 10vw 12vw 0 12vw;
}
.list-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 8vw;
}
.block-item {
  justify-content: space-between;
  align-items: flex-start;
}
.list-title,
.list-text {
  padding-left: 3vw;
}
.illustration {
  width: 17vw;
  margin-left: 5vw;
}
</style>

