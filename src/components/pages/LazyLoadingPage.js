import React from 'react';
import {PageHeader, Panel, Button} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

const LazyLoadingPage = () => {
  return (
    <div>
      <PageHeader>Lazy Loading</PageHeader>

      {/* React Lazy Load */}
      <Panel header='React Lazy Load'>
        <p>Lazyload your Components, Images or anything matters the performance. Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/jasonslyvia/react-lazyload'>{'https://github.com/jasonslyvia/react-lazyload'}</Button>.</p>
      </Panel>
      <Panel>
        <img src={require('../../../assets/images/vehicles/vehicle1.jpg')} style={{width:'100%', height:'auto'}} />
      </Panel>
      <Panel>
        <img src={require('../../../assets/images/vehicles/vehicle2.jpg')} style={{width:'100%', height:'auto'}} />
      </Panel>
      <Panel>
        <LazyLoad overflow={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle3.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
       <Panel>
        <LazyLoad overflow={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle4.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle5.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle6.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle7.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle8.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle9.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle10.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle11.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle12.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle13.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle14.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
      <Panel>
        <LazyLoad overflow={true} once={true} height={'100%'}>
          <img src={require('../../../assets/images/vehicles/vehicle15.jpg')} style={{width:'100%', height:'auto'}} />
        </LazyLoad>
      </Panel>
    </div>
  );
};

export default LazyLoadingPage;
