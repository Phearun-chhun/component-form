<template>
  <Navbar></Navbar>
  <FormInput/>
</template>

<script>
import Navbar from"./components/FriendNav.vue";
import FormInput from"./components/FriendForm.vue";
// import FriendCard from"./components/FriendCard.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    FormInput,
    // FriendCard,
  },
  data() {
    return {
      firstname: null,
      lastname: null,
      comment: null,
    }
  },
  methods:{
    setData(firstname, lastname, comment){
      this.firstname = firstname;
      this.lastname = lastname;
    this.comment = comment;
    }
  }
}
</script>

<style>

</style>
