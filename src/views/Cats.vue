<template>
  <div>
    <PetsTable species="`Cats`" :pets="cats"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PetsTable from '@/components/PetsTable.vue';

export default {
  components: {
    PetsTable
  },
  computed:{
    ...mapState([
      'cats'
    ])
  }
};
</script>