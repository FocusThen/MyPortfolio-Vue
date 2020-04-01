<template>
  <div class="flex">
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
    <div class="right-fixed">
      <a class="mail" href="mailto:mmucahit.tezcan@gmail.com">mmucahit.tezcan@gmail.com</a>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 90%;
  max-width: 1650px;
  bottom: 0;
  z-index: 10;
}
.left-fixed {
  left: 100px;
}

.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-links a {
  display: block;
  color: var(--darkclr);
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

.right-fixed {
  right: 100px;
  position: relative;
}
.mail {
  display: inline-block;
  position: absolute;
  transform: rotate(90deg);
  color: var(--darkclr);
  margin-top: 8em;
}
.mail::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 1px;
  background: var(--darkclr);
  right: -110px;
  bottom: 50%;
}

.mail:hover,
.mail:focus {
  color: var(--accentclr);
}
</style>
