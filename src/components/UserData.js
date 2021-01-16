import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const UserData = [
  {
    title: 'All Users',
    path: '/',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },

  {
    title: 'Male Users',
    path: '/MaleUsers',
    icon: <FaIcons.FaMale />,
    cName: 'nav-text'
  },

  {
    title: 'Female Users',
    path: '/FemaleUsers',
    icon: <FaIcons.FaFemale />,
    cName: 'nav-text'
  }
]
