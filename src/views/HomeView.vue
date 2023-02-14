<template>
	<main class="main">
		<section class="card__container">
			<section class="card card--main">
				<img
					src="@/assets/images/logo-mastercraft.svg"
					alt="Mastercraft logo"
					class="logo--mastercraft"
				/>
				<h1 class="heading heading--main">Mastercraft Bamboo Monitor Riser</h1>
				<p class="text">
					A beautiful & handcrafted monitor stand to reduce neck and eye strain.
				</p>
				<section class="ctaWrapper">
					<button
						type="button"
						class="cta cta--project js-project"
						@click.prevent="modalStore.toggleBackProject"
					>
						Back this project
					</button>
					<button
						type="button"
						class="cta--Bookmark btn__bookmark"
						
						@click.prevent="handleClick"
					>
						<span class="cta--bookmark--img">
							<img
								src="@/assets/images/icon-bookmark.svg"
								alt="bookmark"
								class="bookmark__img"
								:class="{ 'bookmark--img': bookmark }"
							/>
						</span>
						<span class="cta--bookmark--content" v-if="!bookmark">
							Bookmark
						</span>
						<span class="cta--bookmark--content" :class="{'bookmark--content': bookmark}" v-else> Bookmarked </span>
					</button>
				</section>
			</section>

			<FundsStats />

			<ProjectDetails />

		</section>
	</main>
	<ThePledges v-if="modalStore.showBackProject" />
	<TheFeedback v-if="modalStore.showFeedback" />
</template>

<script setup>
import FundsStats from "../components/FundsStats.vue";
import ProjectDetails from "../components/ProjectDetails.vue";
import ThePledges from "../components/modal/ThePledges.vue";
import TheFeedback from "../components/modal/TheFeedback.vue";

import { useModalStore } from "@/stores/modal";
import { ref } from "vue";

const modalStore = useModalStore();
const bookmark = ref(false);
const handleClick = () => {
	bookmark.value = !bookmark.value;
};
// const element = ref(null);
// const handleScroll = (el) => {
// 	element.value = el
// 	// console.log("el", el.getBoundingClient());
// }
</script>

<style lang="scss" scoped>
.cta--Bookmark {
	display: flex;
	align-items: center;
	gap: 0.5em;
	border-radius: 50px;
	color: var(--DarkGray);
	font-weight: var(--fw-bold);
	font-size: 0.9rem;
	transition: all 0.3s linear;
	// @media(min-width: 500px){
	//   background-color: var(--DarkGray-opacity);
	//   padding-right: 1.5em;
	// }
	@media (min-width: 545px) {
		// background-color: var(--DarkGray-opacity);
		background-color: var(--DarkGray-opac);
		padding-right: 1.5em;
	}
}
.cta--bookmark--img img {
	width: 3em;
}
.cta--bookmark--content {
	display: none;

	@media (min-width: 545px) {
		display: inline;
	}
}
.cta--Bookmark:hover {
	opacity: 0.8;
}
// active state of .cta--bookmark-active
.bookmark--content {
	opacity: 0.8;
	color: var(--DarkCyan);
}
.bookmark--img {
	filter: brightness(2) sepia(1) hue-rotate(130deg) saturate(2) contrast(1);
}
</style>
