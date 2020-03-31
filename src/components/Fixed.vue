<template>
  <div>
    <div class="left-fixed">
      <ul class="social-links">
        <li>
          <a href="https://github.com/FocusThen">
            <i class="ri-github-fill"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/m-m%C3%BCcahit-tezcan/">
            <i class="ri-linkedin-fill"></i>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/focusthen">
            <i class="ri-codepen-fill"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/wchttzcn/">
            <i class="ri-instagram-line"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Wchttzcn">
            <i class="ri-twitter-fill"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="right-fixed"></div>
  </div>
</template>

<style scoped>
.left-fixed {
  position: fixed;
  left: 100px;
  bottom: 0;
}

.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-links a {
  display: block;
  color: var(--lightclr);
  margin-top: 1em;
  font-size: 1.4rem;
  transition: all 0.3s;
}

.social-links a:hover {
  color: var(--accentclr);
  transform: translateY(-5px);
}

.social-links li:last-child {
  position: relative;
  margin-bottom: 100px;
}

.social-links li:last-child::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 100px;
  background: var(--darkclr);
  bottom: -110px;
  left: 50%;
}
</style>
