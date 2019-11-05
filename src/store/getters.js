export default {
  catsCount: (state) => {
    return state.cats.length
  },
  dogsCount: (state) => {
    return state.dogs.length
  },
   animalsCount: (state, getters) => {
     return getters.catsCount + getters.catsCount
   }
}