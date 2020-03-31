<template>
  <div id="app">
    <Header />
    <Intro />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";

export default {
  name: "App",
  components: {
    Header,
    Intro
  }
};
</script>

<style>
:root {
  --hoverclr: rgba(100, 255, 218, 0.1);
  --darkclr: #8892b0;
  --lightclr: #ccd6f6;
  --accentclr: #64ffda;
  --fullydark: #020c1b;
  --bgclr: #0a192f;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bgclr);
  widows: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
a,
ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
