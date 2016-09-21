export const schema = {
  "type": "object",
  "properties": {
    "appointments": {
      "type": "array",
      "minItems": 0,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "minimum": 1
          },
          "time": {
            "type": "string",
            "faker": "date.future"
          },
          "type": {
            "type": "string",
            "pattern": "Meeting|Phone|Email"
          },
          "status": {
            "type": "string",
            "pattern": "Confirmed|Complete|Not Confirmed"
          },
          "vehicle": {
            "type": "object",
            "properties": {
              "year": {
                "type": "number",
                "minimum": 1997,
                "maximum": 2017
              },
              "make": {
                "type": "string",
                "pattern": "Ford|Chevrolet|Chrysler|Nissan"
              },
              "model": {
                "type": "string",
                "pattern": "F150|Sierra|Taurus|Maxima|Altima"
              }
            },
            "required": ['year', 'make', 'model']
          }
        },
        "required": ['id', 'time','type','status','vehicle']
      }
    },
    "dealerTeam": {
      "type": "array",
      "minItems": 10,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "minimum": 0
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "role": {
            "type": "string",
            "pattern": "Sales Rep|Manager|BD Agent|CSI Agent|Service Sales Lead|Service Rep|Parts Sales Lead"
          }
        },
        "required": ['id', 'name', 'role']
      }
    },
    "customer": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "minimum": 1
        },
        "photo": {
          "type": "string",
          "faker": "image.people"
        },
        "firstName": {
          "faker": "name.firstName"
        },
        "lastName": {
          "faker": "name.lastName"
        },
        "phone": {
          "type": "string",
          "faker": "phone.phoneNumber"
        },
        "email": {
          "faker": "internet.email"
        },
        "address": {
          "type": "object",
          "properties": {
            "street": {
              "faker": "address.streetAddress"
            },
            "street2": {
              "faker": "address.secondaryAddress"
            },
            "city": {
              "faker": "address.city"
            },
            "state": {
              "faker": "address.stateAbbr"
            },
            "postal": {
              "faker": "address.zipCode"
            }
          },
          required: ['street', 'city', 'state', 'postal'],
        },
        "ebr": {
          "type": "boolean",
        },
        "ebrExpressConsent": {
          "type": "boolean"
        },
        "memo": {
          "type": "string",
          "faker": "lorem.paragraph"
        },
        "tasks": {
          "type": "array",
          "minItems": 2,
          "maxItems": 15,
          "items": {
            "type": "object",
            "properties": {
              "icon": {
                "type": "string",
                "pattern": "phone|reply|new"
              },
              "primetext": {
                "type": "string",
                "faker": "lorem.sentence"
              },
              "typetext": {
                "type": "string",
                "faker": "lorem.sentence"
              },
              "taskbuttonlabel": {
                "type": "string",
                "pattern": "Log Call|Reply"
              }
            },
            "required": ['icon', 'primetext', 'typetext', 'taskbuttonlabel']
          }
        }
      },
      "required": ['id', 'photo', 'firstName', 'lastName', 'phone', 'email', 'address', 'ebr', 'ebrExpressConsent', 'memo', 'tasks', 'dealerTeam']
    }
  },
  "required": ['appointments', 'dealerTeam', 'customer']
};


