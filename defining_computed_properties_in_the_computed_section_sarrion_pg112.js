const Counter = {

    data () {
        return {
            count: 0
        }
    },

    template : `{{time()}} &nbsp;&nbsp;
    
    
    The counter is: {{count}}, double is:  {{countX2}}`,


    created() {

        setInterval(() => {
            this.count += 1;
        }, 1000)
    },

    methods : {

        time () {

            // return time as HH:MM:SS

            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();

            if (hour < 10) hour = "0" + hour;
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;

            return "" + hour + ":" + min + ":" + sec + "";

        }
    },

    computed : {
        countX2 () {
            return 2 * this.count;
        }
    }

}

export default Counter;

// the time() method is defined in the section methods section and 
// is then directly used in the component template within the doube braces {{ and }}
// A method defined in the methods section can use the other methods of this section
// or the reactive variables of the data section by prefixing then with the this keyword
