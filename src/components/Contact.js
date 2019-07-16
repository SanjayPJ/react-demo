import React, { Component } from "react";

export default class Contact extends Component {
    state = {
        show_contact_info: true
    };

    show_contact = () => {
        this.setState({
            show_contact_info: !this.state.show_contact_info
        });
    };

    render() {
        const { data } = this.props;
        return (
            <div className="border-red">
                <h1 onClick={this.show_contact}>Contact Component +</h1>

                {this.state.show_contact_info ? (
                    <p className="border-red">
                        <strong>name</strong>: {data.name} <br />
                        <strong>phone</strong>: {data.phone}
                    </p>
                ) : null}
            </div>
        );
    }
}
