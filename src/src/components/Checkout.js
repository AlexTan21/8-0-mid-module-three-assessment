import { Component } from "react";

class Checkout extends Component {
    constructor() {
        super();
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          creditCard: "",
          zipCode:"",
        };
      }
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
      handleSubmit = (event) => {
        event.preventDefault();
        const { zipCode , creditCard , firstName , lastName , email} = this.state;

        if (zipCode.length != 5 || isNaN(zipCode)) {
            window.alert('Zip code is not valid')
            return;
        }
        if (creditCard.length != 16 || isNaN(creditCard)) {
            window.alert('Credit card number is not valid')
            return;
        }
        if (firstName.length === 0) {
            window.alert('Input is not valid')
            return;
        }
        if (lastName.length === 0) {
            window.alert('Input is not valid')
            return;
        }
        if (email.length === 0) {
            window.alert('Email is not valid')
            return;
        }

        window.alert('Purchase complete' + ` $${this.props.total}`)
    }
    render() {
      return (
        <form id="checkout">
          <p>Checkout</p>
          <label>
            First Name
            <input type="text" name="firstName" value={this.state.firstName} />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName " value={this.state.lastName} />
          </label>
          <label>
            Email <input type="text" name="email " value={this.state.email} />
          </label>
          <label>
            Credit Card
            <input type="text" name="creditCard" value={this.state.creditCard} />
          </label>
          <label>
            Zip Code
            <input type="text" name="zipCode " value={this.state.zipCode} />
          </label>
          <button type="submit">Buy Now</button>
        </form>
      );
    }
}