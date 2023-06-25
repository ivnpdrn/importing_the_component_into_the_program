const Counter = {
    data() {
      return {
        count: 0
      };
    },
    template: "<p>The counter is: {{ count }}</p>",
    created() {
      setInterval(() => {
        this.count += 1;
      }, 1000);
    }
  };
  
  export default Counter;
  
  