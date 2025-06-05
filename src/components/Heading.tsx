type HeadingProps = {
  children: string;
};

const Heading = (Head: HeadingProps) => {
  return (
    <div style={{color: 'red'}}>
      <h1>{Head.children}</h1>
    </div>
  );
}

export default Heading
