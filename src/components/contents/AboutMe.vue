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
    <img class="imageme" src="@/assets/me.png" />
  </section>
</template>

<style scoped>
.aboutme {
  padding: 16em 0;
  grid-column: 2 / 5;
}

.imageme {
  position: relative;
  width: 100%;
  padding: 4em;
  grid-column: 6 / 8;
  justify-self: center;
  align-self: center;
}

.aboutme_title {
  color: var(--lightclr);
  margin-bottom: 2em;
  font-size: 2rem;
}
.aboutme_title::after {
  content: "";
}

.aboutme_body {
  color: var(--darkclr);
  line-height: 1.4;
  font-size: 1.4rem;
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
</style>
