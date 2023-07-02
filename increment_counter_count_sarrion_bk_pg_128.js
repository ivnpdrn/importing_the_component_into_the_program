
const Counter = {
    data ()  {
        return {
            count : 0
        }
    },
    template :`

    <button @click="count++">Increment counter by count++</button>
        &nbsp;&nbsp; count = {{count}}  <br><br>

    <button @click="incr()">Increment counter by incr()</button>
        &nbsp; &nbsp; count = {{count}}   
    
    `,

    methods: {
        incr()  {
    this.count++;
        }
    }
}

export default Counter;

// it is possible to write several method calls in row during the processing to be performed (separated by a comma or a semicolon).
// It is enough that these methods are defined in the methods section of the component.

// for example, @click="incr(); incr()" allows the incr() method to be executed twice each time the button is clicked.