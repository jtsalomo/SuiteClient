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
      label: 'Add Lead',
      icon: <EntypoAddToList />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Add Service Appt.',
      icon: <EntypoTools />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Generate Offer',
      icon: <EntypoPriceTag />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'View Attachments',
      icon: <EntypoAttachment />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Show Letters',
      icon: <EntypoMail />,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Show Tasks',
      icon: <EntypoOpenBook/>,
      responsive: {button: '', icon: '', label: 'hidden-xs'},
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




