<template>
  <section class="grid">
    <div class="intro">
      <h2 class="hi">Hi, my name is</h2>
      <h1 class="name">M. Mücahit Tezcan.</h1>
      <h1 class="build">I build things for the web.</h1>

      <a class="btn" href="mailto:mmucahit.tezcan@gmail.com">Get In Touch</a>
    </div>
  </section>
</template>

<style scoped>
.intro {
  color: var(--lightclr);
  padding: 10em 0;
  grid-column: 2 / 6;
}
.hi {
  color: var(--accentclr);
  margin-bottom: 0.8em;
  font-size: 1.5rem;
  font-family: var(--ff-secondary);
  font-weight: 400;
}
.name {
  font-size: 3rem;
  color: var(--lightclr);
}
.build {
  color: var(--darkclr);
  font-size: 3rem;
}

@media (max-width: 768px) {
  .intro {
    grid-column: 1 / 8;
  }
}
</style>
