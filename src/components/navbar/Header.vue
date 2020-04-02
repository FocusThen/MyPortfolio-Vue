<template>
  <header class="header">
    <a class="logo-link" href="/">
      <svg
        id="logo"
        class="logo"
        width="101"
        height="99"
        viewBox="0 0 101 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="textM"
          d="M41.6362 36.4394L50.0034 57.3222L58.3706 36.4394H62.7476V62.0331H59.3726V52.0663L59.689 41.3085L51.2866 62.0331H48.7026L40.3179 41.3613L40.6519 52.0663V62.0331H37.2769V36.4394H41.6362Z"
          stroke="#64FFDA"
          stroke-width="1"
        />

        <path
          class="circle"
          d="M98.7825 49.6381C98.7825 76.0248 77.0286 97.4576 50.1413 97.4576C23.254 97.4576 1.5 76.0248 1.5 49.6381C1.5 23.2513 23.254 1.81851 50.1413 1.81851C77.0286 1.81851 98.7825 23.2513 98.7825 49.6381Z"
          stroke="#64FFDA"
          stroke-width="3"
        />
      </svg>
    </a>
    <nav class="nav">
      <ul class="nav-links">
        <li>
          <a href="#aboutme">
            <span class="numbers">01.</span>
            About me
          </a>
        </li>
        <li>
          <a href="#myworks">
            <span class="numbers">02.</span>
            My works
          </a>
        </li>
        <li>
          <a href="#contact">
            <span class="numbers">03.</span>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
}

.nav-links {
  display: flex;
}

.nav-links a {
  color: var(--lightclr);
  margin-left: 4em;
  transition: all 0.3s;
  font-size: 1.1rem;
}

.nav-links a:hover,
.nav-links a :focus {
  color: var(--accentclr);
}

.logo {
  width: 85px;
  height: 85px;
}

.circle {
  stroke-dasharray: 781;
  stroke-dashoffset: 781;
  animation: line-anim 2s ease forwards;
}
.textM {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: line-fill 2s ease forwards;
}

@keyframes line-fill {
  from {
    fill: transparent;
  }
  to {
    fill: #64ffda;
  }
}

@keyframes line-anim {
  to {
    stroke-dashoffset: 0;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>
