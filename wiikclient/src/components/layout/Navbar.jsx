import React from 'react';

const Navbar = () => {
  return (
    <nav
      className='w3-sidebar w3-collapse w3-white w3-animate-left'
      id='mySidebar'
    >
      <br />
      <div className='w3-container w3-row'>
        <div className='w3-col s4'>
          <img
            src='https://www.w3schools.com/w3images/avatar2.png'
            id='avatarm'
            className='w3-circle w3-margin-right'
            alt='avatar profile'
          />
        </div>
        <div className='w3-col s8 w3-bar'>
          <span>
            Welcome, <strong>Mike</strong>
          </span>
          <br />
          <a href='/' className='w3-bar-item w3-button'>
            <i className='fa fa-envelope' />
          </a>
          <a href='/' className='w3-bar-item w3-button'>
            <i className='fa fa-user' />
          </a>
          <a href='/' className='w3-bar-item w3-button'>
            <i className='fa fa-cog' />
          </a>
        </div>
      </div>
      <hr />
      <div className='w3-container'>
        <h5>Dashboard</h5>
      </div>
      <div className='w3-bar-block'>
        <a
          href='/'
          className='w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black'
          title='close menu'
        >
          <i className='fa fa-remove fa-fw' />
          &nbsp; Close Menu
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding w3-blue'>
          <i className='fa fa-users fa-fw' />
          &nbsp; Overview
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-eye fa-fw' />
          &nbsp; Views
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-users fa-fw' />
          &nbsp; Traffic
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-bullseye fa-fw' />
          &nbsp; Geo
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-diamond fa-fw' />
          &nbsp; Orders
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-bell fa-fw' />
          &nbsp; News
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-bank fa-fw' />
          &nbsp; General
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-history fa-fw' />
          &nbsp; History
        </a>
        <a href='/' className='w3-bar-item w3-button w3-padding'>
          <i className='fa fa-cog fa-fw' />
          &nbsp; Settings
        </a>
        <br />
        <br />
      </div>
    </nav>
  );
};

export default Navbar;
