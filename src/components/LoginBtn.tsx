import { useState } from "react";


const LoginBtn = () => {
  const [loggedIn] = useState(true);

//   if else rendering 
//   if (loggedIn) {
//     return <button>Logout</button>;
//   } else {
//     return <button>Login</button>;
//   }

//   Ternary Operator
  return <div>
    {/* {loggedIn ? <button>Logout</button> : <button>Login</button>} */}

    {loggedIn && <button>logout</button>} {/* logical operator */}
  </div>;
};

export default LoginBtn;
