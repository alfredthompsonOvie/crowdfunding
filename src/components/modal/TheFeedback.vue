<template>
	<section class="modal--success modal--feedback card">
		<img src="@/assets/images/icon-check.svg" alt="checkmark icon" />
		<h1 class="subHeading">Thanks for your support!</h1>
		<p class="text">
			Your pledge brings us one step closer to sharing Mastercraft Bamboo
			Monitor Riser worldwide. You will get an email once our campaign is
			completed.
		</p>
		<button type="button" class="cta btn" @click.prevent="store.toggleFeedback">
			Got it!
		</button>
	</section>
	<section class="overlay--bg" @click.prevent="closeModal"></section>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";
import { onMounted } from "vue";

const store = useModalStore();
const closeModal = () => {
	store.toggleFeedback();
};

onMounted(() => {
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && store.showFeedback) {
			closeModal();
		}
	});
});
</script>

<style lang="scss" scoped></style>
