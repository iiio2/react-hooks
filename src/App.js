import { useEffect, useState } from 'react'; 
import Toggle from "./components/Toggle";
import { useNameInput } from "./hooks/useNameInput";
import useAbortableFetch from 'use-abortable-fetch';


function App() {
  const [name,setName] = useNameInput('');
  //const [dishes,setDishes] = useState([]);
  // const ref = useRef();  
  // console.log('ref', ref.current); 


  // const fetchData = async ()=> {
  //   const res = await fetch('http://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'); 
  //   const data = await res.json(); 
  //   setDishes(data); 
  //   console.log('heu'); 
  // }

  const { data, loading } = useAbortableFetch('http://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');

  if(loading) return <p>loading...</p>

  if(!data) return null; 


  // useEffect(()=>{
  //   fetchData(); 
  // },[name]); 


  return (
    <div className="my-4 container" >
      <Toggle />
      <h5>{name}</h5>
      <form className="mt-5">
        <input type="text" 
          className="form-control"
          value={name}
          onChange={(e)=> setName(e.target.value)} 
        />
      </form>

      <br/> 
      <hr/>
      <br/> 

      {data.map(dish=> <article key={dish.name} style={{backgroundColor:'#ddec22'}} >
      <h4>{dish.name}</h4>
      <h5>{dish.desc}</h5>
      </article> )}
      



    </div>
  );
}





export default App;
