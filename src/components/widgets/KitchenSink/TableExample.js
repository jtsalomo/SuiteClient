import React from 'react';
import {Table} from 'react-bootstrap';

const TableExample = () => {
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Tables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Michael</td>
            <td>Are formatted like this</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lucille</td>
            <td>Do you like them?</td>
          </tr>
          <tr className="success">
            <td>3</td>
            <td>Success</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="danger">
            <td>4</td>
            <td>Danger</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="warning">
            <td>5</td>
            <td>Warning</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="active">
            <td>6</td>
            <td>Active</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered condensed>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Tables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Michael</td>
            <td>This one is bordered and condensed</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lucille</td>
            <td>Do you still like it?</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableExample;
