<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The counter is : {{counter}}</p>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The counter is : {{counter2}}</p>
        <button type="button" @click="one(), two()">Click</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0,
      counter2: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter = this.counter + 1
    },
    setCount (counter) {
      this.counter2 = counter
    },
    one () {
      alert('One')
    },
    two () {
      alert('Two')
    }
  }
}
</script>
