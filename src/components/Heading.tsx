type HeadingProps = {
  children: string;
};

const Heading = (Head: HeadingProps) => {
  return (
    <div>
      <h1>{Head.children}</h1>
    </div>
  );
}

export default Heading
