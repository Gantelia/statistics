<template>
  <footer class="footer">© Gantelia 2023</footer>
</template>

<style>
.footer {
  min-height: 50px;
  padding: 20px;
  position: relative;
  text-align: center;
  color: #1e8aa5;
}

.footer::before {
  content: '';
  position: absolute;
  width: 630px;
  height: 1px;
  top: 0;
  right: 0px;
  background-color: currentColor;
}
</style>
