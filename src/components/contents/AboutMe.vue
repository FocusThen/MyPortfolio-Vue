<template>
  <section id="aboutme" class="grid">
    <div class="aboutme">
      <h1 class="aboutme_title">
        <span class="numbers">01.</span>
        About Me
      </h1>

      <p class="aboutme_body">
        Hello! I'm Mücahit, a software developer based in Istanbul, I develop
        websites, bots and web apps.
      </p>
      <p class="aboutme_body">
        Shortly after graduating from
        <span class="color-accent">Istanbul Arel University</span>
        , I worked more on
        <span class="color-accent">JavaScript</span> and i watched a lot front
        end courses form Scrimba, Frontend Masters ... and more. I am keep
        learning
      </p>

      <ul class="skills">
        <li>JavaScript (ES6+)</li>
        <li>Vue</li>
        <li>React</li>
        <li>Node.JS</li>
        <li>HTML & (S)CSS</li>
        <li>GraphQL</li>
        <li>Express</li>
      </ul>
    </div>
    <div class="imageme"></div>
  </section>
</template>

<style scoped>
.aboutme {
  padding: 16em 0;
  grid-column: 2 / 5;
}

.imageme {
  background: url("../../assets/me.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 80%;
  height: 50%;
  padding: 4em;
  grid-column: 6 / 8;
  justify-self: center;
  align-self: center;
}

.aboutme_title {
  position: relative;
  color: var(--lightclr);
  margin-bottom: 2em;
  font-size: 2rem;
}
.aboutme_title::after {
  content: "";
  position: absolute;
  background-color: var(--darkclr);
  opacity: 0.5;
  width: 60%;
  height: 1px;
  bottom: 45%;
  margin-left: 0.5em;
}

.aboutme_body {
  color: var(--darkclr);
  font-size: 1.4rem;
}
.aboutme_body {
  margin-bottom: 0.5em;
}

.color-accent {
  color: var(--accentclr);
}

.skills {
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
}

.skills li {
  color: var(--darkclr);
  margin: 0 0 1em;
  font-size: 0.9rem;
}

.skills li::before {
  content: "▹";
  color: var(--accentclr);
}

@media (max-width: 1440px) {
  .imageme {
    width: 100%;
  }
}

@media (max-width: 1050px) {
  .imageme {
    height: 30%;
    margin-left: 3em;
  }
}
@media (max-width: 768px) {
  .aboutme {
    grid-column: 1 / 8;
    padding-bottom: 5em;
  }
  .imageme {
    grid-column: 3 / 7;
    height: 400px;
    max-width: 100%;
    background-size: contain;
    margin-bottom: 4em;
  }
}

@media (max-width: 575px) {
  .aboutme {
    grid-column: 1/9;
  }
  .aboutme_title::after {
    width: 30%;
  }
  .imageme {
    height: 300px;
    max-width: 100%;
    grid-column: 3/7;
  }
}

@media (max-width: 320px) {
  .aboutme_title::after {
    display: none;
  }
}
</style>
