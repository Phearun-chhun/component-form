<template>
  <body>
    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">HELP?</a></li>
      </ul>
    </nav>
  </body>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}


nav {
  width: 100%;
  background: red;
  font-family: "Jost", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
}

ul li{
  color:#FFF;
  padding: 7px;
  list-style-type: none;
}

ul li a{
  color:#FFF;
  text-decoration: none;
}
</style>
