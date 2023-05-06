<template>
  <header class="header">
    <a class="logo" href="/">
      <svg
        class="logo__image"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Логотип 'Cтатист'"
      >
        <path
          d="M17.45 15.18L22 7.31V21H2V3h2v12.54L9.5 6 16 9.78l4.24-7.33 1.73 1-5.23 9.05-6.51-3.75L4.31 19h2.26l4.39-7.56 6.49 3.74z"
        />
      </svg>
      <span class="logo__text">Статист</span>
    </a>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/" class="nav__link">Графики</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/table" class="nav__link">Таблицы</router-link>
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
  position: relative;
  padding: 20px 30px;
  --basic-color: #2aabfa;
  --secondary-color: #1e8aa5;
}

.header::before {
  content: '';
  position: absolute;
  width: 630px;
  height: 1px;
  bottom: 0;
  left: 0px;
  background-color: var(--basic-color);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--basic-color);
  transition: color 0.3s;
}

.logo:hover {
  color: var(--secondary-color);
}

.logo:active {
  opacity: 0.6;
}

.logo__image {
  fill: currentColor;
}

.logo__text {
  font-size: 1.5rem;
  margin-left: 10px;
  font-weight: 700;
}

.nav__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;

  flex-wrap: wrap;
}

.nav__item {
  margin-left: 3px;
}

.nav__item * {
  text-decoration: none;
  color: #ffffff;
  font-size: 1.1rem;
  padding: 8px 16px;
  font-weight: 500;
  display: block;
  background-color: var(--secondary-color);
  transition: background-color 0.3s;
  border-radius: 5px;
}

.nav__item *:hover {
  background-color: var(--basic-color);
}

.nav__item *:active {
  opacity: 0.6;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
