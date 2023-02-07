<template>
	<div class="card">
		<ul class="funds__list">
			<li class="funds__item">
				<span class="funds__figure funds__current__amount"> ${{ store.showBalance }} </span>
				<span class="funds__total text funds__text"> of $100,000 backed </span>
			</li>
			<li class="funds__item">
				<span class="funds__figure funds__current__amount"> {{ store.showBackers }} </span>
				<span class="funds__total text funds__text"> total backers </span>
				<span class="border__line"></span>
			</li>
			<li class="funds__item">
				<span class="funds__figure funds__current__amount"> {{ store.showDaysLeft }} </span>
				<span class="funds__total text funds__text"> days left </span>
				<span class="border__line"></span>
			</li>
		</ul>
		<div class="funds__progressBar">
			<span class="progress__bar" :style="{width: `${store.calProgressBar}%`}"></span>
		</div>
	</div>
</template>

<script setup>
import { useFundsStore } from "@/stores/funds"

const store = useFundsStore();
</script>

<style lang="scss" scoped></style>
