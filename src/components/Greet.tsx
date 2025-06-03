type GreetProp= {
    name: string
    age: number
}
const Greet = (prop : GreetProp) => {
  return (
    <div>
      Hi, my name is {prop.name} and my age is {prop.age} 
    </div>
  )
}

export default Greet
