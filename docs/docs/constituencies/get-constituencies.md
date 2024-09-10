---
sidebar_label: "Get all constituencies"
sidebar_postion: 1
---

# Get all constituencies

This endpoint retrieves a comprehensive list of all constituencies in Kenya, providing essential information about each one.

```bash
    curl -X GET http://localhost:3000/constituencies \
         -H "x-api-key: your api key"
```

### Response Format:
The endpoint will typically return a list of objects, each representing a constituencies. The objects may include the following fields:

- Constituency Code: The unique code for the constituency
- Constituency Name: The official name of the constituency.
County: The county to which the constituency belongs.
- Registered Voters: The total number of registered voters within the constituency.

### Example Response:

```json
[
  {
    "constituencyCode": "001",
    "constituencyName": "CHANGAMWE",
    "registeredVoters": 93561
  },
  {
    "constituencyCode": "002",
    "constituencyName": "JOMVU",
    "registeredVoters": 75085
  },
  {
    "constituencyCode": "003",
    "constituencyName": "KISAUNI",
    "registeredVoters": 135276
  },
  {
    "constituencyCode": "004",
    "constituencyName": "NYALI",
    "registeredVoters": 124253
  },
  {
    "constituencyCode": "005",
    "constituencyName": "LIKONI",
    "registeredVoters": 94764
  },
  {
    "constituencyCode": "006",
    "constituencyName": "MVITA",
    "registeredVoters": 118974
  },
  {
    "constituencyCode": "007",
    "constituencyName": "MSAMBWENI",
    "registeredVoters": 82261
  }
]
```
