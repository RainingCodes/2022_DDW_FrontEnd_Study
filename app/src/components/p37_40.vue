<template>
    <div id="app">
        <textarea v-model="message">
        </textarea>
        <button v-show="display">
            I can see
        </button>
        <pre>
            {{ data }}
        </pre>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.cjs.min.js"></script>
<script>
    export default {
        name: 'p37_40',
        data() {
            return {
                message : 'World',
                data : 'Hello',
                // display: false // 화면에 안 나타남 코드로만 보임
                display: true // 화면에 나타남
            }
        }
    }
</script>
