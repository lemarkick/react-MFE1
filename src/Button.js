import React, { useState } from "react";
import { ReactComponentElement } from "react";

class Button extends React.Component {
  state = {
    filter: "0000000000",
    data: [
      {
        rocId: "S222222222",
        fname: "Jayne",
        lname: "Washington",
        email: "jaynewashington@exposa.com",
        gender: "female",
      },
      {
        rocId: "F111111111",
        fname: "Peterson",
        lname: "Dalton",
        email: "petersondalton@exposa.com",
        gender: "male",
      },
      {
        rocId: "A101066999",
        fname: "Velazquez",
        lname: "Calderon",
        email: "velazquezcalderon@exposa.com",
        gender: "male",
      },
      {
        rocId: "G101010101",
        fname: "Norman",
        lname: "Reed",
        email: "normanreed@exposa.com",
        gender: "male",
      },
    ],
  };

  handleChange = () => {
    if (
      this.props.value == null ||
      this.props.value == "" ||
      this.props.value.length != 10
    ) {
      this.setState({ filter: "0000000000" });
    } else {
      this.setState({ filter: this.props.value });
    }
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data
      .filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toLowerCase().includes(lowercasedFilter)
        );
      })
      .filter((filteredData) => !!filteredData);

    return (
      <div>
        <button onClick={this.handleChange}>查詢</button>
        {filteredData.map((item) => (
          <div key={item.rocId}>
            <div>
              <li>姓名: {item.fname}</li>
              <li>性別: {item.gender}</li>
              <li>Email: {item.email}</li>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Button;
