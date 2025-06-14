import { Component, type ReactNode } from "react";

interface ClassFunProps {
  text: string;
}

interface ClassFunState {
  count: number;
}

class ClassFun extends Component<ClassFunProps, ClassFunState> {
  constructor(props: ClassFunProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): ReactNode {
    const { text } = this.props;

    return (
      <>
        <p>{text}</p>
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      </>
    );
  }
}

export default ClassFun;
