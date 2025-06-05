import { type GreetProp } from "./types"

const Greet = (prop: GreetProp) => {
  let message 
  if(prop.status === 'loading'){
    message = "Loading..."
  }else if(prop.status === 'success'){
    message = 'Status is Successful OK'
  }else if(prop.status === 'error'){
    message = 'Some Error Ocuur'
  }
  return (
    <div>

      {prop.islogin ? `Hi, my name is ${prop.name} and my age is ${prop.age}` : `Welcome user`}
      <h3>props pass through via object</h3>
      <p>First Name : {prop.person.fName}</p>
      <p>Last Name : {prop.person.lName}</p>

      <div>
        <h4>props pass via array</h4>
        <p>{prop.list?.map((person, key) => (
          <li key={key}>  Name {key}: {person.fName} {person.lName} </li>
        ))}</p>
      </div>
      <div>
        <h3>Status</h3>
        <p>message - {message}</p>
      </div>
    </div>
  );
};

export default Greet;
