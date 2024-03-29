<template>
	<section class="about card">
		<header class="card__header">
			<div class="title">
				<h2 class="subHeading subHeading--about">About this project</h2>
			</div>
		</header>
		<p class="text">
			The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
			elevates your screen to a more comfortable viewing height. Placing your
			monitor at eye level has the potential to improve your posture and make
			you more comfortable while at work, helping you stay focused on the task
			at hand.
		</p>
		<p class="text">
			Featuring artisan craftsmanship, the simplicity of design creates extra
			desk space below your computer to allow notepads, pens, and USB sticks to
			be stored under the stand.
		</p>

		<section class="pledges">
			<section 
			class="card" 
			v-for="pledge in pledges" 
			:key="pledge.title"
			>
				<header class="card__header">
					<section class="title">
						<h1 class="subHeading">{{ pledge.title }}</h1>
						<h2 class="subHeading subHeading--pledge">{{ pledge.pledgeInfo }}</h2>
					</section>
				</header>
				<p class="text">
					{{ pledge.content }}
				</p>
				<section class="card__footer">
					<p class="inStock">
						<span class="figure">{{ pledge.pledgeCount }}</span>
						<span class="text">left</span>
					</p>
					<button 
					type="button"
					class="btn cta" 
					:disabled="pledge.pledgeCount === 0"
					v-if="!pledge.pledgeCount"
					>Out of Stock
				</button>
					<button 
					type="button"
					class="btn cta" 
					:disabled="pledge.pledgeCount === 0"
					@click.prevent="handleClick(pledge.title)"
					v-else
					>Select Reward
				</button>
				</section>
			</section>
		</section>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePledgesStore } from "@/stores/pledges"
import { useModalStore } from "@/stores/modal"

const store = usePledgesStore();
const modalStore =  useModalStore()

const pledges = ref([
	{
		title: "Bamboo Stand",
		pledgeInfo: "Pledge $25 or more",
		content:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		pledgeCount: computed(() => store.bambooStand),
	},
	{
		title: "Black Edition Stand",
		pledgeInfo: "Pledge $75 or more",
		content:
			"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		pledgeCount: computed(() => store.blackEditionStand),
	},
	{
		title: "Mahogany Special Edition",
		pledgeInfo: "Pledge $200 or more",
		content:
			"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		pledgeCount: computed(() => store.mahoganySpecialEdition),
	},
]);

const handleClick = (anchor) => {
	anchor = anchor.split(' ').join('')
	store.updatePledgeId(anchor);
	modalStore.toggleBackProject()
}
</script>

<style lang="scss" scoped></style>
