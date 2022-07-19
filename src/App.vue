<template>
  <!-- <friend-nav></friend-nav>
  <friend-form></friend-form>
  <friend-card></friend-card> -->
  <Navbar></Navbar>
  <FormInput></FormInput>
  <FriendCard></FriendCard>
</template>

<script>
import Navbar from"./components/FriendNav.vue";
import FormInput from"./components/FriendForm.vue";
import FriendCard from"./components/FriendCard.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    FormInput,
   FriendCard,
  }
}
</script>

<style>

</style>
