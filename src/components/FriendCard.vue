<template>
    <section v-for="item in items " :key="item">
        <h2>{{item.name}}</h2>
        <p>{{item.description}}</p> 
    </section>
    
</template>

<script>
export default {
    data() {
        return {
            items: [
                { name: "Ronan OGOR", description: "The best teahcer" },
                { name: "Him HEY", description: "The best teacher of the Vue js" },
                {name:"Rady Y",description:"The best teacher of LARAVEL"}
            ]
        }
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
