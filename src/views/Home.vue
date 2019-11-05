<template>
  <div class="home">
    {{animalsCount}}
    <h1>Adopt a new best friend.</h1>
    <button class="btn btn-primary" @click="toglePetForm">Add New Pet</button>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select id="input-2" v-model="form.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.age"
          required
          type="number"
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "home",
  components: {},
  data() {
    return {
      showPetForm: false,
      form: {
        name: "",
        age: 0,
        species: null
      }
    };
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const payload = {
        pet: this.form,
        species: this.form.species
      };

      this.addPet(payload);
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters(['animalsCount'])
  }

};
</script>
