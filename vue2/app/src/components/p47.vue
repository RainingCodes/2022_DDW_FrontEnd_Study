<template>
    <div id="app">
        <h2 v-for="(animal, index) in animals" :key="index">{{animal}} 인덱스는 :: {{index}}</h2>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                이름은 {{user.name}} 이고 직업은 {{user.job}}
            </li>

        </ul>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.cjs.min.js"></script>
<script>
    export default {
        name: 'p46',
        data() {
            return {
                animals: ["monkey", "rat", "dog"] ,
                users: [
                    { name : "철수", job : "회사원"},
                    { name : "영희", job : "개발자"}
                ]
            }
        }
    }
</script>
