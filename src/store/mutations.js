export default {
  appendPet: (state, {pet, species}) => {
    state[species].unshift(pet);
  }
}