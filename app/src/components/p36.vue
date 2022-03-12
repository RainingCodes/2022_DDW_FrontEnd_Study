<template>
    <div id="app">
        <!-- <h1>Hello DDWU World</h1> -->
        <h1>Hello {{ msg }}</h1> <!-- p32 -->
        <h3>Enter your name</h3>
        <input v-model="msg"> <!-- p33 -->
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.cjs.min.js"></script>
<script>
    export default {
        name: 'p36',
        props: {
            msg: String
        }
    }
</script>
