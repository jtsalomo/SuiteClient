const customerinfo = {
  "photo": "http://placehold.it/160x160",
  "name": {
    "first": "Kyla",
    "last": "Gonzalez"
  },
  "phone": "(419) 555-3985",
  "email": "kgonzalez@gmail.com",
  "address": {
    "street": "5171 Horton",
    "city": "Mission",
    "state": "KS",
    "postal": 66202
  },
  "ebr": {
    "ebr": true,
    "expressConsent": true
  },
  "memo": "Kyla has two young kids and is always in a hurry to get things done. Please be quick.",
  "tasks": [
    {
      icon: "phone",
      primetext: "Reminder to Call Customer",
      secondarytext: "Assigned to Gene Smith",
      typetext: "Yesterday",
      taskbuttonlabel: "Log Call"
    },
    {
      icon: "reply",
      primetext: "Reply to Customer Email",
      secondarytext: "Assigned to Aaron Eggleston",
      typetext: "3 days ago",
      taskbuttonlabel: "Reply"
    },
    {
      icon: "new",
      primetext: "Prospect just viewed this email ",
      secondarytext: "Assigned to Jerry Fox ",
      typetext: "1 week ago",
      taskbuttonlabel: "",
      alert : true
    },
    {
      icon: "reply",
      primetext: "Reply to Customer Email",
      secondarytext: "Assigned to Aaron Eggleston",
      typetext: "3 days ago",
      taskbuttonlabel: "Reply"
    },
    {
      icon: "new",
      primetext: "Prospect just viewed this email ",
      secondarytext: "Assigned to Jerry Fox ",
      typetext: "1 week ago",
      taskbuttonlabel: "",
      alert : true
    },
  ],

  "DealerTeam": {
    "salesperson": [
      {
        role: "Sales Rep",
        assignment: "Jerry Wells",
      },
      {
        role: "Manager",
        assignment: "Diane Huff",
      },
      {
        role: "BD Agent",
        assignment: "Corey Owen",
      },
      {
        role: "CSI Agent",
        assignment: "Joe Murphy",
      },
      {
        role: "Service Sales Lead",
        assignment: "Bobby Jordan",
      },
      {
        role: "Service Rep",
        assignment: "Owen Glover",
      },
      {
        role: "Split Sales Rep",
        assignment: "Jerry Wells",
      },
    ],
    "Manager": [
      {
        role: "Sales Rep",
        assignment: "Jerry Wells",
        options: ["Jerry Wells", "Diane Huff", "Corey Owen", "Joe Murphy", "Bobby Jordan", "Owen Glover"]
      },
      {
        role: "Manager",
        assignment: "Diane Huff",
        options: ["Diane Huff", "Corey Owen", "Joe Murphy", "Bobby Jordan", "Owen Glover", "Jerry Wells"]
      },
      {
        role: "BD Agent",
        assignment: "Corey Owen",
        options: ["Corey Owen", "Joe Murphy", "Bobby Jordan", "Owen Glover", "Jerry Wells", "Diane Huff"]
      },
      {
        role: "Split Sales Rep",
        assignment: "Jerry Wells",
        options: ["Jerry Wells", "Diane Huff", "Corey Owen", "Joe Murphy", "Bobby Jordan", "Owen Glover"]
      },
      {
        role: "CSI Agent",
        assignment: "Joe Murphy",
        options: ["Joe Murphy", "Bobby Jordan", "Owen Glover", "Jerry Wells", "Diane Huff", "Corey Owen"]
      },
      {
        role: "Service Sales Lead",
        assignment: "Bobby Jordan",
        options: ["Bobby Jordan", "Owen Glover", "Jerry Wells", "Diane Huff", "Corey Owen", "Joe Murphy"]
      },
      {
        role: "Service Rep",
        assignment: "Owen Glover",
        options: ["Owen Glover", "Jerry Wells", "Diane Huff", "Corey Owen", "Joe Murphy", "Bobby Jordan"]
      },
    ],
  },
  "Appointments": [
    {
      time: "8/9/16 4:00pm",
      type: "Meeting",
      status: "Confirmed",
      vehicleYear: "2017",
      vehicleMake: "Misubishi",
      vehicleModel: "Lancer Evolution FE"
    },
    {
      time: "8/9/16 5:00pm",
      type: "Phone",
      status: "Complete",
      vehicleYear: "2017",
      vehicleMake: "Misubishi",
      vehicleModel: "Lancer Evolution FE"
    },
    {
      time: "9/19/16 2:00pm",
      type: "Email",
      status: "Not Confirmed",
      vehicleYear: "2017",
      vehicleMake: "Misubishi",
      vehicleModel: "Lancer Evolution FE"
    }
  ],
};


export default customerinfo;
