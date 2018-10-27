import React from 'react';
import CleanerDetails from './CleanerDetails';
import '../../App.css';

const CleanerList = (props) => {
  const cleanerList = props.cleaners.map(cleaner => (
    <CleanerDetails
      cleaner={cleaner}
    />
  ));
  return (
    <div className="bid_list" align="center">
      {cleanerList}
    </div>
  );
};


export default CleanerList;
