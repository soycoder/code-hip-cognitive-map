<template>
  <!-- Header -->
  <nav id="banner" class="navbar navbar-dark bg-warning justify-content-center flex-row flex-nowrap">
    <div class="container">
      <span class="h1 font-weight-bold mt-2 center">HIP - Human Information Processing</span>
      
    </div>
  </nav>

  <!-- Router view -->
  <div class="container-fluid mt-5">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  
};
</script>

<style>
@font-face {
  font-family: "KrungthaiFast-Regular";
  src: url("https://soycoder.github.io/hip-map-project/assets/font/KrungthaiFast-Regular.ttf");
}
.hidden {
  display: none;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
* {
  font-family: "KrungthaiFast-Regular", sans-serif;
}

</style>