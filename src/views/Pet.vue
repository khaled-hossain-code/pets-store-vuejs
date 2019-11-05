<template>
  <div>
    <p>{{animal.name}}</p>
    <p>{{animal.age}}</p>
    <p>{{animal.breed}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogs", "cats"]),
    animal() {
      const { species, id } = this.$route.params;

      return this[species][id];
    }
  }
};
</script>
