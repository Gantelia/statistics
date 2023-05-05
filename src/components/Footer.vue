<template>
  <footer class="footer">© Gantelia 2023</footer>
</template>

<style>
.footer {
  min-height: 50px;
  padding: 20px;
  position: relative;
  text-align: center;
  color: #2e8398;
}

.footer::before {
  content: '';
  position: absolute;
  width: 630px;
  height: 1px;
  top: 0;
  right: 0px;
  background-color: #2e8398;
}
</style>
