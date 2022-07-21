<template>
    <section v-for="people in object" :key="people"> 
        <h2>{{people.name}}</h2>
        <p>{{people.comment}}</p>
    </section>

</template>

<script>
export default {
    props: {
        object:Object
    }
}
</script>

<style scoped>
section {
    width: 40%;
    box-sizing: border-box;
    border-radius: 7px;
    margin-top: 2%;
    margin-left: 30%;
    padding: 10px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

ul {
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
}

ul li {
    padding: 10px;
    list-style-type: none;
}
</style>
