<template>
  <div>
    <span>{{minutes}}:{{seconds}}</span>
  </div>
</template>

<script>
export default {

  data () {
    return{
      intervalId: 0,
      minutes: '00',
      seconds: '00'
    }
  },

  mounted () {
    this.startTimer(200)
  },
  methods: {
    startTimer () {
      let timer =
        minutes,
        seconds
      this.intervalId = setInterval(() => {
        this.minutes = parseInt(timer / 60)
        this.seconds = parseInt(timer % 60)
        
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds

    
      }, 1000)
    }
  }
}
</script>

