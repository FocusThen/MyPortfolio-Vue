<template>
  <div id="app">
    <!-- Layout & Fixed -->
    <Fixed />

    <!-- Navbar -->
    <Header />

    <!-- Contents -->
    <Intro />
    <AboutMe />
    <MyWorks />
  </div>
</template>

<script>
//Navbar
import Header from "@/components/navbar/Header.vue";

//Content
import Intro from "@/components/contents/Intro.vue";
import AboutMe from "@/components/contents/AboutMe.vue";
import MyWorks from "@/components/contents/MyWorks.vue";

// Layout & fixed
import Fixed from "@/components/layouts/Fixed.vue";

export default {
  name: "App",
  components: {
    Header,
    Intro,
    AboutMe,
    MyWorks,
    Fixed
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;700&display=swap");

:root {
  --hoverclr: rgba(100, 255, 218, 0.1);
  --darkclr: #8892b0;
  --lightclr: #ccd6f6;
  --accentclr: #64ffda;
  --fullydark: #020c1b;
  --bgclr: #0a192f;

  --boxclr: #172a45;

  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Roboto Mono", monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bgclr);
  width: 90%;
  max-width: 1650px;
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

.numbers {
  color: var(--accentclr);
  margin-right: 0.5em;
  font-family: var(--ff-secondary);
}

#app {
  font-family: var(--ff-primary);
}
</style>
