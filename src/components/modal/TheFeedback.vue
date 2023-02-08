<template>
  <section class="modal feedback" >
    <div class="modal--success modal--feedback card">
      <img src="@/assets/images/icon-check.svg" alt="a checkmark icon" />
      <h2 class="subHeading">Thanks for your support!</h2>
      <p class="text">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button 
      class="cta btn"
      @click.prevent="store.toggleFeedback"
      >Got it!</button>
    </div>
  </section>
	<section class="overlay--bg"></section>
</template>

<script setup>
import { useModalStore } from '@/stores/modal';

const store = useModalStore()
</script>

<style lang="scss" scoped></style>
