<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">DB Html</router-link> |
    <router-link to="/dbInputText">DB Input Text</router-link> |
    <router-link to="/dbInputNumber">DB Input Number</router-link> |
    <router-link to="/dbTextarea">DB Textarea</router-link> |
    <router-link to="/dbSelect">DB Select</router-link> |
    <router-link to="/dbCheckbox">DB Checkbox</router-link> |
    <router-link to="/dbRadio">DB Radio</router-link> |
    <router-link to="/dbImage">DB Image</router-link> |
    <router-link to="/dbButton">DB Button</router-link> |
    <router-link to="/dbClass">DB Class</router-link> |
    <router-link to="/dbClass2">DB Class2</router-link> |
    <router-link to="/dbList">DB List</router-link>  |
    <router-link to="/dbList2">DB List2</router-link>  |
    <router-link to="/RednderingIF">RednderingIF</router-link> |
    <router-link to="/dbStyle1">Style1</router-link> |
    <router-link to="/dbStyle2">Style2</router-link> |
    <router-link to="/eventClick">eventClick</router-link> |
    <router-link to="/eventChange">eventChange</router-link> |
    <router-link to="/oneComputed">oneComputed</router-link> |
    <router-link to="/twoComputed">twoComputed</router-link> |
    <router-link to="/nestedComponent">nestedComponent</router-link> |
    <router-link to="/parentComponent2">parentComponent2</router-link> |
    <router-link to="/parentComponent3">parentComponent3</router-link> |
    <router-link to="/parentComponent4">parentComponent4</router-link> |
    <router-link to="/parentComponent5">parentComponent5</router-link> 

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
