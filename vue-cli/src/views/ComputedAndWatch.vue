<template>
    <div>
        <h1>5.7 computed와 watch</h1>
        <h2>5.7.1 computed</h2>
        <h3>Full Name : {{fullName}} </h3>
        <br>
        <h2>5.7.2 watch</h2>
        <h3>Full Name : {{watchName}} </h3>
        <button type="button" @click="changeName">변경</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName: 'Dahee',
            lastName: 'Koo',
            watchName: ''
        };
    },
    computed: {
        fullName() {
            return this.firstName+ ' ' +this.lastName;
        }
    },
    watch: {
        firstName() {
            this.watchName = this.firstName + ' ' + this.lastName;
        },
        lastName() {
            this.watchName = this.firstName + ' ' + this.lastName;
        }
    },
    methods: {
        changeName() {
            this.firstName = 'Mimi';
        }
    }
}
</script>