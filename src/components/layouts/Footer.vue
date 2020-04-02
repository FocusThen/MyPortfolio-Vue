<template>
  <footer class="footer">
    <a href="https://github.com/FocusThen/MyPortfolio-Vue" class="credit"
      >Redesigned & Built by M. Mücahit Tezcan</a
    >
  </footer>
</template>

<style soped>
.footer {
  height: 90px;
  width: 100%;
  background-color: var(--fullydark);
  display: flex;
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
</style>
