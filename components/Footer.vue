<template>
  <footer>
    <img class="footer-image" src="~/assets/images/footer.png" />
    <div class="footer-text">
      <div class="links">
        <span class="links-1">
          <a href="http://mlh.io/code-of-conduct" target="_blank"
            >MLH Code of Conduct</a
          >
          | <a href="/sponsor" target="_blank">Sponsor Us</a></span
        >
        <span class="links-separator"> | </span>
        <span class="links-2">
          <a href="/brand.pdf" target="_blank">Brand Guidelines</a> |
          <a href="mailto:hello@bit.camp">Contact Us</a>
        </span>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 - 2023 Bitcamp. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>

<script setup lang="ts"></script>

<style scoped>
footer {
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 60vw;
  color: white;
  font-size: 1.125rem;
  line-height: 1.4;
}

.footer-image {
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer-text {
  position: absolute;
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 5vw;
}

a {
  color: white;
}

@media (max-width: 768px) {
  .footer-text {
    font-size: min(3vw, 1.125rem);
  }
  .links-1,
  .links-2 {
    display: block;
  }
  .links-separator {
    display: none;
  }
}
</style>
