import React from "react";
import Menu from "./Menu";
import Table from "react-bootstrap/Table";

function Sobre() {
  return (
    <div>
      <Menu />
      <div className="sobre-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Primeiro nome</th>
              <th>Sobrenome</th>
              <th>Instagram</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guilherme</td>
              <td>Ferraresi</td>
              <td>@gui_ferraresi</td>
              <td>GuizinSX7</td>
            </tr>
            <tr>
              <td>Henry</td>
              <td>Gabriel</td>
              <td>@henrygabriel.rb</td>
              <td>HenryBRweb</td>
            </tr>
            <tr>
              <td>Mateus</td>
              <td>Silvério</td>
              <td>@teusoliveiraz</td>
              <td>Oliveirazmatias</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Sobre;
