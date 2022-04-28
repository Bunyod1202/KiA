  <template>
    <div v-if="loaded">
       <span id="time">{{ Hours }}:{{ Minutes }}:{{Seconds}}</span>
       <div v-if="!expired" >Buy Now</div>
       <div v-else >Buy Now</div>
    </div>
  </template>
  
  <script>  

  export default {
    props:['year','month','date','hour','minute','second','millisecond'],
      data: () => ({
      Days: 0,
      Hours:0,
      Minutes: 0,
      Seconds: 0,
      loaded: false,
      expired: false
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days(){
      return this._hours * 24
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond,
      )
    },
  },
  mounted() {
    this.showRemaining()
  },
  methods:{
    formatName: num =>( num < 10 ? "0" + num : num),
    
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
   //     const end =new Date(2021,11,29,1,1,1,1);
        const ditance = this.end.getTime() - now.getTime();

        if(ditance < 0){
          clearInterval(timer);
          return
        }

        const days = Math.floor((ditance / this._days));
        const hours = Math.floor((ditance % this._days) / this._hours);
        const minutes = Math.floor((ditance % this._hours) / this._minutes);
        const seconds = Math.floor((ditance % this._minutes) / this._seconds);
        this.Minutes = this.formatName(minutes)
        this.Seconds = this.formatName(seconds) 
        this.Hours = this.formatName(hours) 
        this.Days = this.formatName(days)
        this.loaded = true;      
        },1000);
    }
  },
 
}
  </script>
  
  <style>
  
  </style>
