type AccoucementProp = {
    children : React.ReactNode
}

const Annoucement = (prop: AccoucementProp) => {
  return (
    <div>
      {prop.children}
    </div>
  )
}

export default Annoucement
