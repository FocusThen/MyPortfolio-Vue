<template>
  <section class="grid" id="buildbyme">
    <div class="buildbyme">
      <div class="left-side">
        <img class="work-image" src alt="Google Extension" />
      </div>
      <div class="right-side">
        <h3>Featured Project</h3>
        <h1>Dizibox Ad Remover</h1>
        <div class="right-box">
          <p>A nicer look with out ads</p>
        </div>
        <div class="what-i-used">
          <ul>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>HTML</li>
          </ul>
        </div>
        <ul class="project-links">
          <li>Google Extension href</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  color: white;
}

.buildbyme {
  grid-column: 3/7;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}
/* 
img {
  width: 100%;
} */

.left-side {
  grid-column: 1/3;
}
.right-side {
  grid-column: 3/6;
  text-align: right;
}
.right-side h3 {
  color: var(--accentclr);
}
.right-side h1 {
  color: var(--lightclr);
}
.right-box {
  padding: 1em;
  background: var(--boxclr);
  text-align: center;
}

.what-i-used ul {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}
.what-i-used li {
  margin-left: 1em;
}
</style>
