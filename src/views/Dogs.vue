<template>
  <div>
    <PetsTable Íspecies="`Dogs`" :pets="dogs"/>
  </div>
</template>

<script>
import PetsTable from '@/components/PetsTable.vue';
import { mapState } from 'vuex';

export default {
  components:{
    PetsTable
  },
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState([
      'dogs'
    ])
  }
};
</script>