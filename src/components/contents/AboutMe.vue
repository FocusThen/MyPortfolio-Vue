<template>
  <section id="aboutme" class="flex">
    <div class="flex-row">
      <div class="aboutme">
        <h1 v-scrollanimation class="aboutme_title">
          <span class="numbers">01.</span>
          About Me
        </h1>

        <p v-scrollanimation class="aboutme_body">
          Hello! I'm Mücahit, a software developer based in Istanbul, I develop
          websites, bots and web apps.
        </p>
        <p v-scrollanimation class="aboutme_body">
          Shortly after graduating from
          <span class="color-accent">Istanbul Arel University</span>
          , I worked more on
          <span class="color-accent">JavaScript</span> and i watched a lot front
          end courses form Scrimba, Frontend Masters ... and more. I'm still
          learning
        </p>

        <ul v-scrollanimation class="skills">
          <li>JavaScript (ES6+)</li>
          <li>Vue</li>
          <li>React</li>
          <li>Node.JS</li>
          <li>HTML & (S)CSS</li>
          <li>GraphQL</li>
          <li>Express</li>
        </ul>
      </div>
      <div v-scrollanimation class="imageme">
        <img src="../../assets/me.png" alt="thats me!" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutme {
  padding: 16em 0;
  width: 50%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img {
  width: 50%;
  height: auto;
}

.imageme {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 40%;
}

.aboutme_title {
  position: relative;
  color: var(--lightclr);
  margin-bottom: 2em;
  font-size: 2rem;
}
.aboutme_title::after {
  content: '';
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
  content: '▹';
  color: var(--accentclr);
}

@media (max-width: 1440px) {
  .imageme {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .aboutme {
    padding-bottom: 5em;
    width: 90%;
  }
  .flex-row {
    flex-direction: column;
  }
  .imageme {
    justify-content: center;
    width: 100%;
    margin-bottom: 4em;
  }
}

@media (max-width: 575px) {
  .aboutme_title::after {
    display: none;
  }
}
</style>
