import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="border-red">
                <h1>Header Component</h1>
                <p>
                    <strong>data</strong>: {this.props.data} <br />
                    <strong>college</strong>: {this.props.college}
                    <p className="border-red">this is called prop</p>
                </p>
            </div>
        );
    }
}

Header.defaultProps = {
    college: "College of Engineering Perumon"
};
