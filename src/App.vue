<template>
  <div id="app">
    <!-- Layout & Fixed -->
    <div class="body">
      <Fixed />

      <!-- Navbar -->
      <Header />

      <!-- Contents -->
      <Intro />
      <AboutMe />
      <MyWorks />
      <Contact />
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
//Navbar
import Header from "@/components/navbar/Header.vue";

//Content
import Intro from "@/components/contents/Intro.vue";
import AboutMe from "@/components/contents/AboutMe.vue";
import MyWorks from "@/components/contents/MyWorks.vue";
import Contact from "@/components/contents/Contact.vue";

// Layout & fixed
import Fixed from "@/components/layouts/Fixed.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Intro,
    AboutMe,
    MyWorks,
    Contact,
    Footer,
    Fixed
  }
};
</script>

<style>
/* Globals */
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
  font-size: 16px;
  line-height: 1.4;
}
.body {
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

/* Button */
.btn {
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
.btn:hover,
.btn:focus {
  background: var(--hoverclr);
}

@media (max-width: 1050px) {
  body {
    font-size: 14px;
  }
  .btn {
    width: 40%;
  }
}
@media (max-width: 768px) {
  body {
    font-size: 12px;
  }
  .btn {
    width: 45%;
  }
}
</style>
