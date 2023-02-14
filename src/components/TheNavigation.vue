<template>
	<nav class="nav__bar">
		<router-link to="/" class="branding">
			<img src="@/assets/images/logo.svg" alt="crowdfunding homepage link" />
		</router-link>
		<section class="hamburger" v-if="isMobile">
			<button
				type="button"
				class="btn"
				v-if="!menu"
				@click.prevent="menu = !menu"
			>
				<img src="@/assets/images/icon-hamburger.svg" alt="open menu" />
			</button>
			<button
				type="button"
				class="btn"
				@click.prevent="menu = !menu"
				v-else
			>
				<img
					src="@/assets/images/icon-close-menu.svg"
					alt="close nav menu"
				/>
			</button>
		</section>
		<section class="overlay" v-if="menu">
			<ul class="nav__list--mobile">
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
		</section>

		<!-- desktop -->
		<ul class="nav__list--desktop" v-if="!isMobile">
			<li class="nav__item">
				<router-link :to="{ name: 'about' }" class="nav__link"
					>About</router-link
				>
			</li>
			<li class="nav__item">
				<router-link :to="{ name: '' }" class="nav__link">Discover</router-link>
			</li>
			<li class="nav__item">
				<router-link :to="{ name: '' }" class="nav__link"
					>Get Started</router-link
				>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isMobile = ref(null);
const menu = ref(null);
const windowWidth = ref(null);

onMounted(() => {
	checkScreen();
	window.addEventListener("resize", checkScreen);
});
const checkScreen = () => {
	windowWidth.value = window.innerWidth;
	if (windowWidth.value < 545) {
		isMobile.value = true;
		menu.value = false;
		return;
	}
	isMobile.value = false;
	menu.value = false;
};
</script>

<style lang="scss" scoped>
.nav__bar {
	grid-column: 2;
	grid-row: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em 0;
	height: 5em;
}
.branding {
	position: relative;
	z-index: 10;
}
.hamburger {
	margin-left: auto;
	position: relative;
	z-index: 10;
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 4;
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	/* clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); */
}
.nav__list--mobile {
	grid-column: 2;
	background-color: #fff;
	border-radius: 8px;
	position: relative;
	top: 5em;
	left: 0;
	right: 0;
	height: initial;
	align-self: flex-start;
	z-index: 6;

	// try scale 0 then on click scale 1
	// FROM TOP
	/* clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); */

	// FROM RIGHT
	// clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
}
.nav__item + .nav__item {
	border-top: 1px solid var(--DarkGray-opac);
	@media (min-width: 545px) {
		border: 0;
	}
}
.nav__link {
	display: block;
	padding: 1.2em;
	color: var(--Black);
	font-weight: var(--fw-bold);
	@media (min-width: 545px) {
		padding: 0em;
		color: #fff;
		font-weight: var(--fw-nm);
		font-size: 0.9rem;
		&:hover {
			color: rgba(255, 255, 255, 0.8);
		}
	}
}
.nav__list--desktop {
  margin-left: auto;
	display: flex;
	align-items: center;
  gap: 1em;
}
</style>
