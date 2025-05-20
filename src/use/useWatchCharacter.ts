import { watch, type Ref } from 'vue'

export function useWatchCharacter(valueToWatch: Ref<string>) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === 100) {
      alert('You have reached the maximum number of characters')
    }
  })
}
