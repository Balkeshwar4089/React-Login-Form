import React from "react";
import Table from "react-bootstrap/Table";
function TableData({ userData }) {
  return (
    <div>
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length >= 1 ? (
            userData.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{obj.uname}</td>
                  <td>{obj.uemail}</td>
                  <td>{obj.upassword}</td>
                  <td>
                    <button>Delete</button>
                    <button>Update</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr colSpan="6">
              <td>Data not found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TableData;
