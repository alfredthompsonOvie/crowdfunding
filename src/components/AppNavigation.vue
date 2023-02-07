<template>
	<header>
		<nav class="nav__bar">
			<router-link to="/">
				<img src="@/assets/images/logo.svg" alt="crowdfunding homepage link" />

				<!-- mobile nav -->
        <template v-if="isMobile">
          <ul v-if="menu">
            <li class="nav__item">
              <router-link :to="{ name: 'about' }" class="nav__link"
                >About</router-link
              >
            </li>
            <li class="nav__item">
              <router-link :to="{ name: '' }" class="nav__link"
                >Discover</router-link
              >
            </li>
            <li class="nav__item">
              <router-link :to="{ name: '' }" class="nav__link"
                >Get Started</router-link
              >
            </li>
          </ul>
        </template>
        <section class="hamburger">
          <button type="button" class="btn openMenu js__openMenu" v-if="!menu">
            <img src="@/assets/images/icon-hamburger.svg" alt="open menu button">
          </button>
          <button type="button" class="btn closeMenu js__closeMenu" v-else>
            <img src="@/assets/images/icon-close-menu.svg" alt="close nav menu icon">
          </button>
        </section>
				<!-- desktop nav -->
				<ul v-if="!isMobile">
					<li class="nav__item">
						<router-link :to="{ name: 'about' }" class="nav__link"
							>About</router-link
						>
					</li>
					<li class="nav__item">
						<router-link :to="{ name: '' }" class="nav__link"
							>Discover</router-link
						>
					</li>
					<li class="nav__item">
						<router-link :to="{ name: '' }" class="nav__link"
							>Get Started</router-link
						>
					</li>
				</ul>
			</router-link>
			<ul></ul>
		</nav>
	</header>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const isMobile = ref(null)
const menu = ref(null)
const windowWidth = ref(null)

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen)
})
const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    isMobile.value = true;
    menu.value = false;
    return;
  }
  isMobile.value = false;
  menu.value = false
}
</script>

<style lang="scss" scoped>
header {
	grid-row: 1;
	grid-column: 2;
}
</style>
