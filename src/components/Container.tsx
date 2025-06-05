type ContainerProp = {
    styles: React.CSSProperties
}

const Container = (prop: ContainerProp) => {
  return (
    <div style={prop.styles}>
      This is a Container
    </div>
  )
}

export default Container
