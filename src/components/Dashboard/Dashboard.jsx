import React, { useEffect } from 'react';
import './DashboardCssfiles/dashboard.css';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import { AiOutlineSetting, AiOutlineDown } from 'react-icons/ai';
import { BiUserCircle, BiChevronDown } from 'react-icons/bi';
import { TbCalendarTime, TbClockHour3 } from 'react-icons/tb';
import { MdOutlineLocalOffer } from 'react-icons/md';
import TodaysSchedule from './TodaysSchedule';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
const values = [
  { name: 'Mon', guest: 200, user: 100, week: 'Week 0' },
  { name: 'Tue', guest: 250, user: 170, week: 'Week 0' },
  { name: 'Wed', guest: 300, user: 230, week: 'Week 0' },
  { name: 'Thu', guest: 350, user: 300, week: 'Week 0' },
  { name: 'Fri', guest: 370, user: 330, week: 'Week 0' },
  { name: 'Sat', guest: 380, user: 360, week: 'Week 0' },
  { name: 'Sun', guest: 395, user: 385, week: 'Week 0' },
  { name: 'Mon', guest: 380, user: 400, week: 'Week 1' },
  { name: 'Tue', guest: 350, user: 420, week: 'Week 1' },
  { name: 'Wed', guest: 300, user: 350, week: 'Week 1' },
  { name: 'Thu', guest: 290, user: 300, week: 'Week 1' },
  { name: 'Fri', guest: 260, user: 250, week: 'Week 1' },
  { name: 'Sat', guest: 250, user: 200, week: 'Week 1' },
  { name: 'Sun', guest: 230, user: 180, week: 'Week 1' },
  { name: 'Mon', guest: 210, user: 150, week: 'Week 2' },
  { name: 'Tue', guest: 200, user: 200, week: 'Week 2' },
  { name: 'Wed', guest: 220, user: 230, week: 'Week 2' },
  { name: 'Thu', guest: 235, user: 280, week: 'Week 2' },
  { name: 'Fri', guest: 250, user: 310, week: 'Week 2' },
  { name: 'Sat', guest: 265, user: 350, week: 'Week 2' },
  { name: 'Sun', guest: 280, user: 380, week: 'Week 2' },
  { name: 'Mon', guest: 300, user: 420, week: 'Week 3' },
  { name: 'Tue', guest: 290, user: 430, week: 'Week 3' },
  { name: 'Wed', guest: 280, user: 420, week: 'Week 3' },
  { name: 'Thu', guest: 265, user: 350, week: 'Week 3' },
  { name: 'Fri', guest: 250, user: 300, week: 'Week 3' },
  { name: 'Sat', guest: 240, user: 250, week: 'Week 3' },
  { name: 'Sun', guest: 230, user: 220, week: 'Week 3' },
  { name: 'Mon', guest: 220, user: 190, week: 'Week 4' },
  { name: 'Tue', guest: 230, user: 180, week: 'Week 4' },
  { name: 'Wed', guest: 250, user: 190, week: 'Week 4' },
  { name: 'Thu', guest: 300, user: 200, week: 'Week 4' },
  { name: 'Fri', guest: 350, user: 215, week: 'Week 4' },
  { name: 'Sat', guest: 400, user: 230, week: 'Week 4' },
  { name: 'Sun', guest: 440, user: 250, week: 'Week 4' },
];
const Dashboard = () => {
  const val1 = 14,
    val2 = 31,
    val3 = 55;
  return (
    <div className='main-dashboard-div'>
      <div className='sidebar'>
        <div className='sidebar-title'>Board.</div>
        <div className='sidebar-menu1'>
          <h1 style={{ fontWeight: '700' }}>
            <TbClockHour3 size={15} /> Dashboard
          </h1>
          <h1>
            <MdOutlineLocalOffer size={15} /> Transaction
          </h1>
          <h1>
            <TbCalendarTime size={15} /> Schedules
          </h1>
          <h1>
            <BiUserCircle size={15} /> Users
          </h1>
          <h1>
            <AiOutlineSetting size={15} /> Settings
          </h1>
        </div>
        <div className='sidebar-menu2'>
          <h1>Help</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className='dashboard-page'>
        <DashboardHeader />
        <DashboardContent />
        <div className='graph'>
          <div className='graph-headings'>
            <div className='graph-headings-left'>
              <h1>Activities</h1>
              <h2>
                May - June 2021 <BiChevronDown />
              </h2>
            </div>
            <div className='chart-vars-divs'>
              <div className='chart-vars'>
                <div
                  className='circle'
                  style={{ backgroundColor: '#E9A0A0' }}
                ></div>
                <h1>Guest</h1>
              </div>
              <div className='chart-vars'>
                <div
                  className='circle'
                  style={{ backgroundColor: '#9bdd7c' }}
                ></div>
                <h1>User</h1>
              </div>
            </div>
          </div>
          <div className='chart'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
              <LineChart data={values} width={1700} height={300}>
                <Line
                  type='monotone'
                  dataKey={'guest'}
                  stroke='#E9A0A0'
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type='monotone'
                  dataKey={'user'}
                  stroke='#9BDD7C'
                  strokeWidth={3}
                  dot={false}
                />
                <CartesianGrid stroke='#EAEAEA' vertical={false} />
                <XAxis tick={false} xAxisId={'0'} dataKey={'name'} />
                <XAxis
                  // tick={false}
                  axisLine={false}
                  xAxisId={'1'}
                  dataKey={'week'}
                  allowDuplicatedCategory={false}
                  color='#858585'
                />
                <YAxis color='#858585' />
                <Tooltip />
                {/* <Legend /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* 

        <div className='third-section'>
          <div className='top-products-section'>
            <div className='top-products-section-headings'>
              <h1>Top Products</h1>
              <h4>
                May - June 2021
                <AiOutlineDown size={20} color='#858585' />
              </h4>
            </div>
            <div className='piechart-main'>
              <div className='piechart'>
                <div
                  className='x-box'
                  style={{
                    height: '145px',
                    width: '145px',
                    borderRadius: '50%',
                    background: `
    repeating-conic-gradient(
    from 15deg,
    #ee8484 0deg calc(3.6deg * ${val1}),
    #f7dc7d calc(3.6deg * ${val1}) calc(3.6deg * ${val1 + val2}),
    #98d89e calc(3.6deg * ${val1 + val2}) calc(3.6deg * ${val1 + val2 + val3})
     `,
                  }}
                ></div>
              </div>
              <div className='piechart-details'>
                {[
                  { val: val3, name: 'Basic Tees', clr: '#98d89e' },
                  { val: val2, name: 'Custom Short Pants', clr: '#f7dc7d' },
                  { val: val1, name: 'Super Hoodies', clr: '#ee8484' },
                ].map((item, i) => {
                  return (
                    <div className='piechart-details-divs' key={i}>
                      <div className='piechart-details-divs-head'>
                        <div
                          className='circle'
                          style={{
                            backgroundColor: `${item.clr}`,
                            height: '11px',
                            width: '11px',
                            borderRadius: '50%',
                          }}
                        ></div>
                        <h1>{item.name}</h1>
                      </div>
                      <div className='piechart-details-divs-base'>{`%${item.val}`}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='todays-schedule-section'>
            <TodaysSchedule />
          </div>
        </div>
         */}
      </div>
    </div>
  );
};

export default Dashboard;
