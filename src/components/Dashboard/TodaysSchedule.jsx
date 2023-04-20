import React from 'react';
import './DashboardCssfiles/TodaysSchedule.css';
import { TbChevronRight } from 'react-icons/tb';

// todays-schedule-section
const TodaysSchedule = () => {
  return (
    <div className='todays-schedule-main'>
      <div className='todays-schedule-header'>
        <h1>Today's schedule</h1>
        <div className='see-all'>
          <h1>See All</h1>
          <TbChevronRight />
        </div>
      </div>
      <div className='schedules-container'>
        <div className='schedule' style={{ borderLeft: '5px solid #9BDD7C' }}>
          <h1>Meeting with suppliers from Kuta Bali</h1>
          <h2>14.00-15.00</h2>
          <h2>at Sunset Road, Kuta, Bali</h2>
        </div>
        <div className='schedule' style={{ borderLeft: '5px solid #6972c4' }}>
          <h1>Check Operation at Giga Factory 1</h1>
          <h2>18.00-20.00</h2>
          <h2>at Central Jakarta</h2>
        </div>
      </div>
    </div>
  );
};

export default TodaysSchedule;
