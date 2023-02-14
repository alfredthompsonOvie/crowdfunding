<template>
	<section class="card modal--support">
		<header class="card__header card__header--pledge-heading">
			<section class="title">
				<h1 class="subHeading">Back this project</h1>
			</section>
			<button
				type="button"
				class="btn"
				@click.prevent="closePledgeModal"
			>
				<img
					src="@/assets/images/icon-close-modal.svg"
					alt="close the modal"
				/>
			</button>
		</header>
		<p class="text">
			Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
			the world?
		</p>

		<section class="pledge__category">
			<PledgeCard
				v-for="(pledge, i) in pledges"
				:key="pledge.title"
				:pledge="pledge"
				:index="i"
				@toggleForm="toggleForm"
				:id="singleWord(pledge.title)"
			/>
		</section>
	</section>
	<section class="overlay--bg" @click.prevent="closePledgeModal"></section>
</template>

<script setup>
import { usePledgesStore } from "@/stores/pledges"
import { useModalStore } from "@/stores/modal";
import { ref, onMounted } from "vue";
import PledgeCard from "./PledgeCard.vue";

const modalStore = useModalStore();
const pledgesStore = usePledgesStore();

const pledges = ref([
	{
		title: "Pledge with no reward",
		pledgeInfo: "",
		details:
			"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
		pledgeCount: "",
		open: false,
	},
	{
		title: "Bamboo Stand",
		pledgeInfo: "Pledge $25 or more",
		details:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		pledgeCount: pledgesStore.bambooStandCount,
		placeholder: 25,
		open: false,
		min: 25,
	},
	{
		title: "Black Edition Stand",
		pledgeInfo: "Pledge $75 or more",
		details:
			"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		pledgeCount: pledgesStore.blackEditionStandCount,
		placeholder: 75,
		open: false,
		min: 75,
	},
	{
		title: "Mahogany Special Edition",
		pledgeInfo: "Pledge $200 or more",
		details:
			"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		pledgeCount: pledgesStore.mahoganySpecialEditionCount,
		placeholder: 200,
		open: false,
		min: 200,
	},
]);

const toggleForm = (index) => {
	pledges.value = pledges.value.map((pledge, i) => {
		if (i === index) {
			pledge.open = !pledge.open;
		} else {
			pledge.open = false;
		}
		return pledge;
	});
};
const singleWord = (w) => w.split(' ').join('')

	const closePledgeModal = ()=> {
		modalStore.toggleBackProject()
		pledgesStore.resetPledgeId()
		window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
}
onMounted(() => {
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalStore.showBackProject) {
			closePledgeModal();
  }
});
})
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
	cursor: pointer;
	appearance: initial;
	margin: 3px 3px 3px 4px;
	padding: initial;
	width: 1.2em;
	height: 1.2em;
	border: 1px solid var(--DarkCyan);
	border-radius: 50%;
}
input[type="checkbox"]:checked {
	background-color: var(--DarkCyan);
}
span.checked {
	background-color: var(--DarkCyan);
	width: 1em;
	height: 1em;
	border-radius: 50%;
}
</style>
