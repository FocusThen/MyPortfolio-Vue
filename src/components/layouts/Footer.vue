<template>
  <footer class="footer">
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

    <a
      href="https://github.com/FocusThen/MyPortfolio-Vue"
      class="credit"
    >Redesigned & Built by M. Mücahit Tezcan</a>
  </footer>
</template>

<style soped>
.footer {
  height: 90px;
  width: 100%;
  background-color: var(--fullydark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.credit {
  color: var(--darkclr);
  font-size: 0.9rem;
  transition: all 0.3s;
}
.credit:hover,
.credit:focus {
  color: var(--accentclr);
}

.social-links {
  display: none;
}

@media (max-width: 768px) {
  .footer {
    height: 145px;
  }
  .social-links {
    display: flex;
    align-items: center;
  }
  .social-links li {
    margin-right: 1em;
  }
  .social-links a {
    display: block;
    color: var(--darkclr);
    margin-bottom: 1em;

    font-size: 1.7rem;
    transition: all 0.3s;
  }
  .social-links a:hover {
    color: var(--accentclr);
    transform: translateY(-5px);
  }
  .social-links li:last-child {
    margin-right: 0;
  }
}
</style>
