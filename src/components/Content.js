import React, { Component } from "react";
import Contact from "./Contact";

export default class Content extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karen Smith",
                email: "karen@gmail.com",
                phone: "222-222-2225"
            },
            {
                id: 3,
                name: "Jacob Williams",
                email: "jw@gmail.com",
                phone: "333-333-3335"
            },
            {
                id: 4,
                name: "Will I Am",
                email: "william@gmail.com",
                phone: "999-999-9995"
            }
        ]
    };
    render() {
        const { contacts } = this.state;
        return (
            <div className="border-red">
                <h1>Content Component</h1>
                <p>{this.props.data}</p>

                {/* {console.log(contacts.map(contact => console.log(contact)))} */}

                {contacts.map(contact => (
                    <Contact data={contact} key={contact.id} />
                ))}
            </div>
        );
    }
}
