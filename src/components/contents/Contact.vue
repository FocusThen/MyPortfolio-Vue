<template>
  <section class="grid" id="contact">
    <div class="contact">
      <h2 class="whats">03. What's Next?</h2>
      <h1 class="touch">Get In Touch</h1>
      <p class="text">
        Although I'm not currently looking for freelance opportunities, my inbox
        is always open. Whether for a potential project or just to say hi, I'll
        try my best to answer your email!
      </p>
      <a class="btn" href="mailto:mmucahit.tezcan@gmail.com">Say Hello</a>
    </div>
  </section>
</template>

<style scoped>
#contact {
  padding: 16em 0;
}
.contact {
  grid-column: 3/7;
  text-align: center;
}
.whats {
  font-size: 1.2rem;
  color: var(--accentclr);
  font-family: var(--ff-secondary);
  font-weight: 400;
}
.touch {
  margin: 0.5em 0;
  font-size: 3rem;
  color: var(--lightclr);
}

.text {
  font-size: 1.2rem;
  width: 90%;
  margin: 0 auto;
  color: var(--darkclr);
}
@media (max-width: 768px) {
  #contact {
    padding: 9em 0;
  }
  .contact {
    grid-column: 2/8;
  }
  .text {
    width: 100%;
  }
}
</style>
