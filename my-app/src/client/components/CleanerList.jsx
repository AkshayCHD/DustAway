import React from 'react';
import CleanerDetails from './CleanerDetails';
import '../../App.css';

const CleanerList = (props) => {
  console.log("Start");
  console.log(props.cleaners);
  console.log("End");
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
