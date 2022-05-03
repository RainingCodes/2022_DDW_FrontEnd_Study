<template>
<div>
    <h1>5.6 이벤트 처리(v-on)</h1>
    <div>
        <h2>5.6.1 클릭 이벤트</h2>
        <button type="button" @click="increaseCounter">Add 1</button>
        <button type="button" @click="setCount(7)">set 7</button>
        <p>The counter is : {{counter}} </p><br>
        <button type="button" @click="one(), two()">alert 띄우기</button>
    </div>
    <div>
        <h2>5.6.2 change 이벤트</h2>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
    <div>
        <h2>5.6.3 key 이벤트</h2>
        <input @keyup.alt.enter="clear"/>
        <div @click.ctrl="doSomething">Do Something</div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            counter:0,
            selectedValue:''
        };
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter+1;
        },
        setCount(counter) {
            this.counter = counter;
        },
        one() {
            alert('one');
        },
        two() {
            alert('two');
        },
        changeSelect() {
            alert(this.selectedValue);
        }
    }
}
</script>