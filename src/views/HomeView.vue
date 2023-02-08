<template>
	<main class="main">
		<div class="card__container">
			<div class="card card--main">
				<img
					src="@/assets/images/logo-mastercraft.svg"
					alt="Mastercraft logo"
					class="logo--mastercraft"
				/>
				<h1 class="heading heading--main">Mastercraft Bamboo Monitor Riser</h1>
				<p class="text">
					A beautiful & handcrafted monitor stand to reduce neck and eye strain.
				</p>
				<div class="ctaWrapper">
					<button 
          type="button" 
          class="btn cta cta--project js-project"
					@click.prevent="modalStore.toggleBackProject"
					>
						Back this project
					</button>
					<button 
          type="button" 
          class="btn cta--Bookmark js-bookmark">
						<span class="cta--bookmark--img">
							<img
								src="@/assets/images/icon-bookmark.svg"
								alt="bookmark"
								class="bookmark__img"
							/>
						</span>
						<span class="cta--bookmark--content"> Bookmark </span>
					</button>
				</div>
			</div>
			<!-- 2 -->
			<FundsStats />
			<!-- 3 -->
			<ProjectDetails />
			<!-- 4 -->
			<!-- 5 -->
		</div>
	</main>
	<ThePledges  v-if="modalStore.showBackProject"/>
	<TheFeedback v-if="modalStore.showFeedback"/>
</template>

<script setup>
import FundsStats from '../components/FundsStats.vue';
import ProjectDetails from '../components/ProjectDetails.vue';
import ThePledges from '../components/modal/ThePledges.vue';
import TheFeedback from '../components/modal/TheFeedback.vue';

import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore()
</script>

<style lang="scss" scoped>

.cta--Bookmark{
  display: flex;
  align-items: center;
  gap: .5em;
  border-radius: 50px;
  color: var(--DarkGray);
  font-weight: var(--fw-bold);
  font-size: .9rem;
  transition: all .3s linear;
  // @media(min-width: 500px){
  //   background-color: var(--DarkGray-opacity);
  //   padding-right: 1.5em;
  // }
  @media(min-width:  545px){
    // background-color: var(--DarkGray-opacity);
    background-color: var(--DarkGray-opac);
    padding-right: 1.5em;
  }
  
}
.cta--bookmark--img img {
  width: 3em;
}
.cta--bookmark--content{
  display: none;
  // @media(min-width: 500px){
  //   display: inline;
  // }
  @media(min-width:  545px){
    display: inline;
  }
}
.cta--Bookmark:hover {
  opacity: .8;
}
// active state of .cta--bookmark-active
.cta--Bookmark-active {
  opacity: .8;
  color: var(--DarkCyan);
}
.bookmark__img-active{
  filter: brightness(2) sepia(1) hue-rotate(130deg) saturate(2) contrast(1);
}

</style>
