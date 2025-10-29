import React, {useState, useMemo} from 'react'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("hello")

    const expensiveCalculation = () =>{

        let total = 0;
        for(let i =0; i<100000; i++){
            console.log(i)
            total = total+i;
            // setTotal(total+i)
        }
        return total;
    }

//    let total = expensiveCalculation()
   let total = useMemo(expensiveCalculation,[text]);


  return (
    <div>
        <p>Expensive Total : {total}</p>

        <button onClick={()=>{
            setCount(count+1)
        }}>Increment Count</button>

        <p>Count:{count}</p>

        {/* <input type="text" value={text} /> */}

    </div>
  )
}

export default Memo