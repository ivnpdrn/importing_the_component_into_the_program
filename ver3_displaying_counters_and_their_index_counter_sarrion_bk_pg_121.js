
const Counter = {

    data()  {
        return {
            counts : ["Counter 1", "Counter 2", "Counter 3", "Counter 4", "Counter 5","Counter 6", "Counter7"]

        }

    },

    template : `
    
    <ul>
    
        <li v-for="(count, index) in counts">
            <span>Index {{index}} : {{count}}</span>

        </li>

    </ul>

    `,

}

export default Counter;


// v-for directive on the element that we want to repeat (in this case, the <li> element).
// the value associated with the v-for directive is a character string of the form "count in counts" 
// knowing that counts is the variable on which we are iterating.
// the count variable thus corresponds to each of the elements of the countss array.
