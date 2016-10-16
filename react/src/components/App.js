// App.js
import React, { Component } from 'react';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }

  }

  componentDidMount() {
    $.ajax({
      url: '/api/v1/cooks'
    })
    .done(data=> {
      this.setState({ contacts: data })
    })
  }


  render() {
    let contacts = this.state.contacts.map(contact => {
      return (
          <Contact
          key={contact.id}
          id={contact.id}
          firstName={contact.first_name}
          phoneNumber={contact.phone_number}
          />

      );
    });

    return(
      <div>
        dopetastic
        <ul>
          {contacts}
        </ul>
      </div>
    )

  }
}

export default App;
