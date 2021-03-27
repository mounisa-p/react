import React from "react";
import "./style.css";

export default class App extends React.Component {
  state = {
    cart: []
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };
  removeInput = (sIndex) => {
    this.setState({ id: sIndex });
  };

  addNewItem = () => {
    let { cart, input } = this.state;
    cart.push(input);
    this.setState(cart);
    // this.state.cart.push(this.state.input); // same as above, though bad practice
  };
  handleRemove = (sIndex) => {
    const cart = [...this.state.cart];
    //this.setState({ cart: this.state.cart.splice(sIndex, 1) });
    cart.splice(sIndex, 1);
    this.setState({ cart: cart });
  };

  render() {
    return (
      <div class="react-form">
        <h1>First Add To Do</h1>
        <input type="text" onChange={this.saveInput} />
        <button onClick={this.addNewItem}> Add Item </button>
        <table>
          {this.state.cart.map((subItems, sIndex) => {
            return (
              <tr key={sIndex} onChange={this.removeInput}>
                {" "}
                {subItems}
                <button onClick={() => this.handleRemove(sIndex,subItems)}>Remove</button>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
