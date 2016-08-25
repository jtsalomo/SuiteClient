import React from 'react';
import {
  EntypoPhone,
  EntypoReply,
  EntypoNew
} from 'react-entypo';

import TaskItem from '../widgets/TaskItem';

const TaskItemConfig = () => {
  return (
      <span>

  <TaskItem
  leftIcon={<EntypoPhone />}
  primaryText= 'Reminder to Call Customer'
  secondaryText='Assigned to Gene Smith'
  typeText='Yesterday'
  taskButtonlabel='Log Call'
   />
    <TaskItem
      leftIcon={<EntypoReply />}
      primaryText= 'Reply to Customer Email'
      secondaryText='Assigned to Gene Smith'
      typeText='Yesterday'
      taskButtonlabel='Reply'
    />
    <TaskItem
      alert = {true}
      leftIcon={<EntypoNew />}
      primaryText= 'Prospect just viewed this email'
      secondaryText='Assigned to Gene Smith'
      typeText='Yesterday'
    />

   </span>
    );
};

export default TaskItemConfig;
