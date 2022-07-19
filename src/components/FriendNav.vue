<template>

  <body>
    <nav>
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>CONTACT</li>
        <li>HELP?</li>
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
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
}

ul li {
  padding: 7px;
  list-style-type: none;
}
</style>
