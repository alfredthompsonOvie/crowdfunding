import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const showBackProject = ref(false);
  const showForm = ref(false);
  const showFeedback = ref(false);
  
  const toggleBackProject = () => {
    showBackProject.value = !showBackProject.value
  }
  const toggleFeedback = () => {
    showFeedback.value = !showFeedback.value
  }
  const toggleForm = () => {
    showForm.value = !showForm.value
  }

  return {
    showBackProject,
    showFeedback,
    toggleFeedback,
    toggleBackProject,
    showForm,
    toggleForm,
  }
})
