import React from 'react';
import TestActionWidget from './TestActionWidget';

export const actionSelections = [
  {label: 'Add Lead', icon: 'bullseye', overflow: 'visible', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Add Service Appt.', icon: 'wrench', overflow: 'visible', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Generate Offer', icon: 'tag', overflow: 'visible', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'View Attachments', icon: 'paperclip', overflow: 'visible', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Show Letters', icon: 'envelope', overflow: 'visible', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Show Tasks', icon: 'pencil-square-o', overflow: 'visible', actionMethod: 'collapsiblePanel', actionComponent: <TestActionWidget/>},
  {label: 'Add Lead', icon: 'bullseye', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Add Service Appt.', icon: 'wrench', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Generate Offer', icon: 'tag', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'View Attachments', icon: 'paperclip', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Show Letters', icon: 'envelope', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Show Tasks', icon: 'pencil-square-o', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Add Lead', icon: 'bullseye', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
  {label: 'Generate Offer', icon: 'tag', overflow: 'hidden', actionMethod: 'popup', actionComponent: <TestActionWidget/>},
];
