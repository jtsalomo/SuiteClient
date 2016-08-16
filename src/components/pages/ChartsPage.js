/* eslint-disable react/no-multi-comp */
import React from 'react';
import {PageHeader, Panel, Well, Button, Row, Col} from 'react-bootstrap';
import {AreaGraph, BarGraph, LineGraph, PieChart, ScatterPlot} from 'react-d3-responsive';

import chartData from '../../data/chartData';

const ChartsPage = () => {
  return (
    <div>
      <PageHeader>Charts <small>D3.js</small></PageHeader>
      <Panel header='Area Line Graph'>
        <div id='d3-area-chart'>
          <AreaGraph
            chartId="area-graph-custom-ID"
            chartClassName="area-graph-custom-CLASS"
            xAxisLabel="2016"
            yAxisLabel="Visitors"
            xData="day"
            yData="count"
            dateFormat="%m-%d-%Y"
            xFormat="%b %e"
            xToolTipLabel="Date"
            yToolTipLabel="Visitors"
            lineType="linear"
            yMaxBuffer={50}
            data={chartData.areaGraphData} />
        </div>
      </Panel>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Panel header='Line Graph'>
            <div id='d3-line-chart'>
              <LineGraph
                chartId="line-graph-custom-ID"
                chartClassName="line-graph-custom-CLASS"
                yAxisLabel="Leads"
                xAxisLabel="Date"
                xData="day"
                yData="count"
                dateFormat="%m-%d-%Y"
                xToolTipLabel="Date"
                yToolTipLabel="Leads"
                lineType="linear"
                yMaxBuffer={50}
                data={chartData.lineGraphData} />
            </div>
          </Panel>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Panel header='Pie Chart'>
            <div id='d3-pie-chart'>
              <PieChart
                height={400}
                width={400}
                chartId="pie-chart-custom-ID"
                chartClassName="pie-chart-custom-CLASS"
                data={chartData.pieTestData}
                innerRadiusRatio={2}
                labelOffset={1}
                startAngle={0}
                endAngle={360} />
            </div>
          </Panel>
        </Col>
      </Row>
      <Panel header='Bar Graph'>
        <div id='d3-bar-chart'>
          <BarGraph
            xData="month"
            xAxisLabel="Month"
            yAxisLabel="Vehicles"
            keys={['new','old','third','four']}
            data={chartData.barGraphTestData} />
        </div>
      </Panel>
      <Panel header='Scatter Plot'>
        <div id='d3-scatter-plot'>
          <ScatterPlot
            chartId="scatter-plot-custom-ID"
            chartClassName="scatter-plot-custom-CLASS"
            xData="x"
            yData="y"
            dataType="data"
            data={chartData.scatterPlotData2} />
        </div>
      </Panel>

      <Well>
        <h4>React D3 Responsive Usage Information</h4>

        <p><Button bsStyle='link' style={{padding: 0}} target='_blank' href='https://github.com/cox-auto-kc/react-d3-responsive'>{'https://github.com/cox-auto-kc/react-d3-responsive'}</Button></p>

        <Button bsSize='large' block href='https://github.com/cox-auto-kc/react-d3-responsive' target='_blank'>View React D3 Responsive Documentation</Button>
      </Well>

      <Well>
        <h4>D3 Usage Information</h4>

        <p>D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s
        emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining
        powerful visualization components and a data-driven approach to DOM manipulation. For complete documentation on D3, visit the D3 website
        at <Button bsStyle='link' style={{padding: 0}} target='_blank' href='https://d3js.org'>{'https://d3js.org'}</Button>.</p>

        <Button bsSize='large' block href='https://d3js.org' target='_blank'>View D3 Documentation</Button>
      </Well>

    </div>
  );
};

export default ChartsPage;
/* eslint-enable react/no-multi-comp */
