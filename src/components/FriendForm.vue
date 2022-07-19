<template>
    <form>
        <div class="form">
            <input type="text" id="firstname" placeholder="First name">
            <input type="text" id="lastname" placeholder="Last name">
            <input type="text" id="comment" placeholder="comment">
            <button>ADD</button>
        </div>
    </form>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
