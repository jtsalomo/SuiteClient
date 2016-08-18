import React from 'react';
import TestActionWidget from './TestActionWidget';

export const actionButtons = [
  {label: 'Add Lead', icon: 'bullseye', overflow: 'visible', component: 'AddLead', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Add Service Appt.', icon: 'wrench', overflow: 'visible', component: 'AddServiceAppt', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Generate Offer', icon: 'tag', overflow: 'visible', component: 'GenerateOffer', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'View Attachments', icon: 'paperclip', overflow: 'visible', component: 'ViewAttachments', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Show Letters', icon: 'envelope', overflow: 'visible', component: 'ShowLetters', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Show Tasks', icon: 'pencil-square-o', overflow: 'visible', component: 'ShowTasks', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Add Lead', icon: 'bullseye', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Add Service Appt.', icon: 'wrench', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Generate Offer', icon: 'tag', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'View Attachments', icon: 'paperclip', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Show Letters', icon: 'envelope', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Show Tasks', icon: 'pencil-square-o', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Add Lead', icon: 'bullseye', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Generate Offer', icon: 'tag', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
];
