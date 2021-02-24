<template>
  <div id="app">

     <el-menu  class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/vue">home</el-menu-item>
      
      <el-menu-item index="/vue/doc" >doc</el-menu-item>

      <el-menu-item index="/three" >three</el-menu-item>
     
    </el-menu>
    <keep-alive>
    <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">

// html,body{

//   width:100%;
//   height:100%;
//   padding:0px;
//   margin:0px;
//   position:relative;
// }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   width:100%;
//   height:100%;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
