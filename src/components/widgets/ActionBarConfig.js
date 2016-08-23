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
      overflow: 'visible',
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Add Service Appt.',
      icon: <EntypoTools />,
      overflow: 'visible',
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Generate Offer',
      icon: <EntypoPriceTag />,
      overflow: 'visible',
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'View Attachments',
      icon: <EntypoAttachment />,
      overflow: 'visible',
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Show Letters',
      icon: <EntypoMail />,
      overflow: 'visible',
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
    {
      label: 'Show Tasks',
      icon: <EntypoOpenBook/>,
      overflow: 'visible',
      actionMethod: 'collapsiblePanel',
      actionComponent: <TestActionWidget/>
    },
  ],
  actionDropdowns: [
    {
      label: 'AdditionalAction1',
      overflow: 'hidden',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction2',
      overflow: 'hidden',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction3',
      overflow: 'hidden',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction4',
      overflow: 'hidden',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction5',
      overflow: 'hidden',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction6',
      overflow: 'hidden',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
    {
      label: 'AdditionalAction7',
      overflow: 'hidden',
      actionMethod: 'dropdown',
      actionComponent: <TestActionPopup/>
    },
  ]
};




