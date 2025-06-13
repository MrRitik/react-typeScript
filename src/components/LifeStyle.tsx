import { useEffect, useState } from "react";

type lifeCycleprops = {
  name: string;
};

const LifeCycle = (prop: lifeCycleprops) => {
  const [fname, setFname] = useState("Ritik");

  useEffect(()=>{
console.log("This code will run on mount")
  },[])

  useEffect(() => {
    console.log("this code will run on update");
    setFname(prop.name);
  }, [prop.name]);

  useEffect(()=> {
    return () => {
        console.log("This code will run on unMount")
    }
  },[])
  return (
    <div>
      <p>My name is {fname}</p>
    </div>
  );
};

export default LifeCycle;
