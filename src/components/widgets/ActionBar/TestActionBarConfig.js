/**/

import React from 'react';
import {
  EntypoAddToList,
  EntypoTools,
  EntypoPriceTag,
  EntypoAttachment,
  EntypoMail,
  EntypoOpenBook
} from 'react-entypo';

import TestActionWidget from './TestActionWidget';
import TestActionPopup from './TestActionPopup';

export const actionSelections = {
  actionTabs: [
    {
      label: 'Action Button 1',
      icon: <EntypoAddToList />,
      responsive: {button: '', icon: '', label: ''},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Action Button 2',
      icon: <EntypoTools />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Action Button 3',
      icon: <EntypoPriceTag />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Action Button 4',
      icon: <EntypoAttachment />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Action Button 5',
      icon: <EntypoMail />,
      responsive: {button: 'hidden-md-down', icon: '', label: ''},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Action Button 6',
      icon: <EntypoOpenBook/>,
      responsive: {button: 'hidden-lg-down', icon: '', label: ''},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
  ],
  actionDropdowns: [
    {
      label: 'Action Button 5',
      responsive: {button: 'hidden-md-up'},
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'Action Button 6',
      responsive: {button: 'hidden-lg'},
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },

    {
      label: 'AdditionalAction 1',
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction 2',
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction 3',
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction 4',
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction 5',
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction 6',
      actionMethod: 'modal',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'External Link Example',
      actionMethod: 'link',
      actionLink: 'http://google.com',
    },
  ]
};




