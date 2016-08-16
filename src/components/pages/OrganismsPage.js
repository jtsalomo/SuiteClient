import React from 'react';
import {PageHeader, Panel, Table} from 'react-bootstrap';
import StepIndicator from '../widgets/Organisms/StepIndicator';
import VehicleDetail from '../widgets/Organisms/VehicleDetail';

const OrganismsPage = () => {
  return (
    <div>
      <PageHeader>Organisms <small>Reusable Components</small></PageHeader>

      <h3>User Interface Components</h3>
      <p className='lead'>Like the <a href='http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/' target='_blank'>media object</a>{' '}
      made popular by <a href='https://twitter.com/stubbornella?lang=en' target='_blank'>Nicole Sullivan</a> and the <a href='http://csswizardry.com/2013/05/the-flag-object/'
      target='_blank'>flag object</a>{' '}
      by <a href='http://csswizardry.com/' target='_blank'>Harry Roberts</a>, Fusion comes equipped with a library of components that implement common UI patterns.</p>

      {/* Step Indicator */}
      <Panel header='Step Indicator'>
        <StepIndicator labels={["Buy Computer", "Buy Software", "Learn Flash", "(...?)", "Profit!"]} activeStep={3} />
        <pre><small><code>{'<StepIndicator labels={["Buy Computer", "Buy Software", "Learn Flash", "(...?)", "Profit!"]} activeStep={3} />'}</code></small></pre>
        <br/>
        <h4>Props</h4>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>labels</td>
              <td>array</td>
              <td>&nbsp;</td>
              <td>Labels for each step. Minimum 3, maximum 5.</td>
            </tr>
            <tr>
              <td>activeStep</td>
              <td>number</td>
              <td>0</td>
              <td>Highlights active step. Preceeding steps are marked completed.</td>
            </tr>
            <tr>
              <td>id</td>
              <td>string</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </Table>
      </Panel>

      <h3>Application Components</h3>
      <p className='lead'>These components solve for application specific UI patterns.</p>

      {/* Vehicle Detail */}
      <Panel header='Vehicle Detail'>
        <Panel>
          <VehicleDetail />
        </Panel>
        <pre><small><code>{'<VehicleDetail vehicleData={vehicle}/>'}</code></small></pre>
        <br/>
        <h4>Props (Proposed)</h4>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>vehicleData</td>
              <td>object</td>
              <td>&nbsp;</td>
              <td>A JSON formatted object of the vehicle info to be handled by the component.</td>
            </tr>
            <tr>
              <td>id</td>
              <td>string</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </Table>
      </Panel>

    </div>
  );
};

export default OrganismsPage;
