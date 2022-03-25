<template>
    <div id="app">
        <h1>Hello</h1> 
        <h1 v-if="gender == 'female'">Miss {{ msg }}</h1>
        <h1 v-else-if="gender == 'male'">Mister {{ msg }}</h1>
        <h3>Enter your gender</h3>
        <input v-model="gender"> 
        <h3>Enter your name</h3>
        <input v-model="msg"> 
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.cjs.min.js"></script>
<script>
    export default {
        name: 'p46',
        data() {
            return {
                msg : 'World',
                gender : 'gender'
            }
        }
    }
</script>
