<template>
    <form @submit.prevent="addPerson">
        <div class="form">
            <input type="text" id="firstname" placeholder="First name" v-model="firstname">
            <input type="text" id="lastname" placeholder="Last name" v-model="lastname">
            <input type="text" id="comment" placeholder="comment" v-model="comment">
            <button>ADD</button>
        </div>
    </form>
    <FriendCard  :object='lists'/>
</template>
<script >
import FriendCard from "./FriendCard.vue";
export default {
    components: {
        FriendCard
    },
    data() {
        return {
            firstname: null,
            lastname: null,
            comment: null,
            lists: [],
            fullname: "",
        };
    },
    methods: {
        addPerson() {
            if (this.firstname != null && this.lastname != null && this.comment != null) {
                let object = { name: this.fullname, comment: this.comment };
                this.firstname = "",
                    this.lastname = "",
                    this.comment = "",
                    this.lists.push(object);
            }
        }
    },
    computed: {},
    watch: {
        firstname(value) {
            this.fullname = value + " " + this.lastname;
        },
        lastname(value) {
            this.fullname = this.firstname+ " "+value ;
        },
    },
};
</script>
<style scoped>
.form {
    width: 40%;
    box-sizing: border-box;
    border-radius: 7px;
    margin-top: 10%;
    margin-left: 30%;
    padding: 20px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form input {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;

}

button {
    width: 100%;
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
