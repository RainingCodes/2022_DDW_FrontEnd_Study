<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindingHtml">Data Binding Html</router-link> |
    <router-link to="/databindingInputText">Data Binding Input Text</router-link> |
    <router-link to="/databindingInputNumber">Data Binding Input Number</router-link> |
    <router-link to="/databindingTextarea">Data Binding Textarea</router-link> |
    <router-link to="/databindingSelect">Data Binding Select</router-link> |
    <router-link to="/databindingCheckbox">Data Binding Checkbox</router-link> |
    <router-link to="/databindingCheckbox2">Data Binding Checkbox2</router-link> |
    <router-link to="/databindingRadio">Data Binding Radio</router-link> |
    <router-link to="/databindingAttribute">Data Binding Attribute</router-link> |
    <router-link to="/databindingButton">Data Binding Button</router-link> |
    <router-link to="/databindingClass">Data Binding Class</router-link> |
    <router-link to="/databindingClass2">Data Binding Class2</router-link> |
    <router-link to="/databindingStyle">Data Binding Style</router-link> |
    <router-link to="/databindingList">Data Binding List</router-link> |
    <router-link to="/renderingVIf">Rendering V If</router-link> |
    <router-link to="/eventClick">Event Click</router-link> |
    <router-link to="/eventChange">Event Change</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link>
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
