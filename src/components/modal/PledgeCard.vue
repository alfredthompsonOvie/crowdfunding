<template>
	<div
		class="pledge__card"
    :class="{selected: pledge.open, outOfSock: 0 === pledge.pledgeRemaining}"
    >
		<!-- @click.prevent="handleClick" -->
		<div class="pledge__card--content">
			<div class="checkbtn">
				<label for="checkbox"></label>
				<input 
        type="checkbox"
        name="checkbox"
        id="checkbox"
        v-model="selected"
        @change.prevent="handleClick"
        />
        
			</div>
			<header class="card__header card__header--pledge-subHeading">
				<div class="title">
					<h2
          class="subHeading subHeading--title"
          @click.prevent="handleClick"
          >{{ pledge.title }}</h2>
					<h2 class="subHeading subHeading--pledge">
						{{ pledge.pledgeInfo }}
					</h2>
				</div>
			</header>
			<p class="text">
				{{ pledge.details }}
			</p>
			<div class="card__footer">
				<div class="inStock">
					<span class="figure">{{ pledge.pledgeRemaining }}</span>
					<span class="text" v-if="pledge.title !== 'Pledge with no reward'">left</span>
				</div>
			</div>
		</div>
		<!-- Selected pledge start -->
		<form 
    class="pledge__form"
    @submit.prevent="onSubmit"
    v-if="pledge.open">
			<p class="text">Enter your pledge</p>
			<div class="form__group">
				<label for="amount">
					<input
						type="number"
						name="amount"
						id="amount"
						:placeholder="pledge.placeholder"
						class="form__control"
            required
            v-model="pledgeAmount"
					/>
					<small class="currency">$</small>
				</label>
				<input type="submit" value="Continue" class="form__control cta" />
			</div>
		</form>
		<!-- Selected pledge end -->
	</div>
</template>

<script setup>
import { useFundsStore } from "@/stores/funds";
import { useModalStore } from "@/stores/modal";

import { computed, ref } from "vue";
const fundsStore = useFundsStore();
const modalStore = useModalStore();



const props = defineProps({
  pledge: {
    type: Object,
    required: true
  },
  index: {
    type: Number
  }
})
const emit = defineEmits(['toggleForm'])

const showForm = ref(false)
const selected = computed(()=>props.pledge.open)
// const selected = ref(props.pledge.open)
const pledgeAmount = ref('')

const handleClick = () => {
  showForm.value = !showForm.value
  emit('toggleForm', props.index)
}

const onSubmit = () => {
  fundsStore.addToFunds(pledgeAmount.value)
  modalStore.toggleBackProject()
  modalStore.toggleFeedback()
}
</script>

<style lang="scss" scoped>
.checkbtn {
  position: relative;
}
input[type="checkbox"] {
  width: 1.4em;
  height: 1.4em;
  border-radius: 50%;
  border: 1px solid var(--DarkGray-opacity);
  appearance: none;
  background-color: #fff;
  margin: 0;
  display: grid;
  place-content: center;
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}
input[type="checkbox"]::before {
  content: '';
  width: .8em;
  height: .8em;
  /* align-self: center;
  justify-self: center; */
  border-radius: 50%;
  background-color: var(--ModerateCyan);
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  position: absolute;
  top: .23em;
  left: .23em;

  cursor: pointer;
  /* margin: auto; */
}
input[type="checkbox"]:checked::before {
  transform: scale(1);
}
.pledge__card.selected {
  border: 2px solid var(--ModerateCyan);
}
.outOfSock {
  cursor: not-allowed;
  opacity: .5;
}
</style>
