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
      label: 'AdditionalAction1',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction2',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction3',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction4',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction5',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction6',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction7',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
  ]
};




