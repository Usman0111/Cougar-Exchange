import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Offercard from './offercard';

const Example = (props) => {
  return (
    <div>
      <Jumbotron style={{ padding: '2%' }}>
<h3 className="display-5">Offer</h3>
		<Offercard />	
      </Jumbotron>
    </div>
  );
};

export default Example;
