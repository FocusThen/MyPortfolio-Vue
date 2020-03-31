<template>
  <section class="grid">
    <div class="intro">
      <h2 class="hi">Hi, my name is</h2>
      <h1 class="name">M. Mücahit Tezcan.</h1>
      <h1 class="build">I build things for the web.</h1>

      <a class="btn-touch" href="mailto:mmucahit.tezcan@gmail.com">
        Get In Touch
      </a>
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
}
.name {
  font-size: 3rem;
  color: var(--lightclr);
}
.build {
  color: var(--darkclr);
  font-size: 3rem;
}

.btn-touch {
  display: inline-block;
  text-align: center;
  width: 25%;
  margin-top: 5em;
  padding: 1.2em 1.5em;
  border-radius: 5px;
  color: var(--accentclr);
  border: 1px solid var(--accentclr);
  font-size: 1rem;
  word-spacing: 0.2em;
  transition: all 0.3s;
}
.btn-touch:hover,
.btn-touch:focus {
  background: var(--hoverclr);
}
</style>
