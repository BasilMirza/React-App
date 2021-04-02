import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          Name: "Basil",
          EmpID: "1",
          Designation: "Software Engineer",
          Address: "Jubilee hills",
          Company: "Fission Labs",
        },
        {
          Name: "Mirza",
          EmpID: "2",
          Designation: "Software Engineer 2",
          Address: "Banjara Hills",
          Company: "Fission Labs",
        },
        {
          Name: "Michael",
          EmpID: "4",
          Designation: "Software Engineer 4",
          Address: "USA",
          Company: "Google",
        },
        {
          Name: "Suresh",
          EmpID: "5",
          Designation: "Software Engineer 5",
          Address: "India",
          Company: "Google",
        },
        {
          Name: "John",
          EmpID: "3",
          Designation: "Software Engineer 3",
          Address: "United Kingdom",
          Company: "Facebook",
        },
        {
          Name: "Raju",
          EmpID: "6",
          Designation: "Software Engineer 6",
          Address: "India",
          Company: "Amazon",
        },
        {
          Name: "Ballack",
          EmpID: "7",
          Designation: "Software Engineer 7",
          Address: "USA",
          Company: "Facebook",
        },
      ],
      currentCompany: "",
    };
  }

  renderTableData() {
    let tempEmployees = [...this.state.employees];
    if (this.state.currentCompany) {
      const filteredEmployees = tempEmployees.filter((val) => {
        return val.Company === this.state.currentCompany;
      });
      tempEmployees = filteredEmployees;
    }

    return tempEmployees.map((employee, index) => {
      const { Name, EmpID, Designation, Address, Company } = employee;
      return (
        <tr key={EmpID}>
          <td>{Name}</td>
          <td>{EmpID}</td>
          <td>{Designation}</td>
          <td>{Address}</td>
          <td>{Company}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  setFissionLab = () => {
    this.setState({
      currentCompany: "Fission Labs",
    });
  };
  setGoogle = () => {
    this.setState({
      currentCompany: "Google",
    });
  };
  setFacebook = () => {
    this.setState({
      currentCompany: "Facebook",
    });
  };
  setAmazon = () => {
    this.setState({
      currentCompany: "Amazon",
    });
  };

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <button onClick={this.setFissionLab}>Fission Labs</button>
        <button onClick={this.setFacebook}>Facebook</button>
        <button onClick={this.setGoogle}>Google</button>
        <button onClick={this.setAmazon}>Amazon</button>

        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
