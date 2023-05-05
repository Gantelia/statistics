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
        <li class="nav__item"><a class="nav__link" href="/">Графики</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Таблицы</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 20px;
  --basic-color: #5bb0e5;
  --secondary-color: #2e8398;
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

.nav a {
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

.nav a:hover {
  background-color: var(--basic-color);
}

.nav a:active {
  text-decoration: underline;
}
</style>
