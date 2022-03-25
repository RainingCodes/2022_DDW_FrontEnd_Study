<template>
    <div id="app">
        <!-- <h1>Hello DDWU World</h1> -->
        <h1>{{ msg }}</h1> <!-- p32 -->
        <input v-model="msg"> <!-- p33 -->
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.cjs.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    export default {
        name: 'p31',
        props: {
            msg: String
        }
    }
</script>
