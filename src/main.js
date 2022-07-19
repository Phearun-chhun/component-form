import { createApp } from 'vue'
import App from './App.vue'
import FriendCard from './components/FriendCard.vue';
import Navbar from './components/FriendNav.vue';
import FormInput from './components/FriendForm.vue';
const app = createApp(App);
app.component("friend-nav", Navbar);
app.component("friend-form", FormInput);
app.component("friend-card", FriendCard);
app.mount("#app");
