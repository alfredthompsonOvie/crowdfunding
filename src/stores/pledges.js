import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePledgesStore = defineStore('pledges', () => {
  const bambooStand = ref(101);
  const blackEditionStand = ref(64);
  const mahoganySpecialEdition = ref(0);
  
  const bambooStandCount = computed(() => bambooStand.value)
  const blackEditionStandCount = computed(() => blackEditionStand.value)
  const mahoganySpecialEditionCount = computed(() => mahoganySpecialEdition.value)
  const reducePledgeCount = (pledgeCount) => {
    console.log(pledgeCount.toLowerCase())
    if (pledgeCount.toLowerCase().startsWith('bamboo')) {
      bambooStand.value -= 1
    }
    if (pledgeCount.toLowerCase().startsWith('black')) {
      blackEditionStand.value -= 1
    }
    if (pledgeCount.toLowerCase().startsWith('mahogany')) {
      mahoganySpecialEdition.value -= 1
    }
  }

  return {
    bambooStand,
    blackEditionStand,
    mahoganySpecialEdition,
    bambooStandCount,
    blackEditionStandCount,
    mahoganySpecialEditionCount,
    reducePledgeCount
  }
})
