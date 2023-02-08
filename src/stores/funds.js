import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFundsStore = defineStore('funds', () => {
  const balance = ref(89914)
  const showBalance = computed(()=> new Intl.NumberFormat().format(balance.value))
  const backers = ref(5007)
  const showBackers = computed(() => new Intl.NumberFormat().format(backers.value))
  const daysLeft = ref(56)
  const showDaysLeft = computed(() => new Intl.NumberFormat().format(daysLeft.value))

  const bambooStandPledge = ref(101)
  const showBambooStandPledge = computed(() => new Intl.NumberFormat().format(bambooStandPledge.value))
  
  const blackEditionStandPledge = ref(64)
  const showBlackEditionStandPledge = computed(() => new Intl.NumberFormat().format(blackEditionStandPledge.value))

  const mahoganySpecialEditionPledge = ref(0)
  const showmahoganySpecialEditionPledge = computed(() => new Intl.NumberFormat().format(mahoganySpecialEditionPledge.value))
  // function increment() {
    
  // }
  const calProgressBar = computed(() => {
    if (balance.value >= 100000) {
      return 100
    }
    const result = (balance.value / 100000) * 100
    return result
  })

  const addToFunds = (funds) => {
    balance.value += funds,
    backers.value++
  }

  return {
    showBalance,
    showBackers,
    showDaysLeft,
    showBambooStandPledge,
    showBlackEditionStandPledge,
    showmahoganySpecialEditionPledge,
    calProgressBar,
    addToFunds
  }
})
