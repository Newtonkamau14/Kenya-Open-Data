---
sidebar_label: "Get constituencies by county"
sidebar_postion: 10
---

# Get constituencies by county

This endpoint retrieves a list of constituencies within a specific county in Kenya.

```bash
    curl -X GET https://kenya-open-data.onrender.com/api/v1/counties/constituencies \
         -H "x-api-key: your api key"
```

### Response Format:

The endpoint will typically return a list of objects, each representing a constituency. The objects may include the following fields:

- County Name: The officail name of th county.
- Constituencies: An array of objects with each object containing constituency code  and constituency name.


### Example Response:

```json
[
  {
    "countyName": "Baringo",
    "constituencies": [
      {
        "Constituency Code": "157",
        "Constituency Name": "TIATY"
      },
      {
        "Constituency Code": "158",
        "Constituency Name": "BARINGO NORTH"
      },
      {
        "Constituency Code": "160",
        "Constituency Name": "BARINGO SOUTH"
      },
      {
        "Constituency Code": "161",
        "Constituency Name": "MOGOTIO"
      },
      {
        "Constituency Code": "162",
        "Constituency Name": "ELDAMA RAVINE"
      },
      {
        "Constituency Code": "159",
        "Constituency Name": "BARINGO CENTRAL"
      }
    ]
  },
  {
    "countyName": "Bomet",
    "constituencies": [
      {
        "Constituency Code": "194",
        "Constituency Name": "SOTIK"
      },
      {
        "Constituency Code": "198",
        "Constituency Name": "KONOIN"
      },
      {
        "Constituency Code": "196",
        "Constituency Name": "BOMET EAST"
      },
      {
        "Constituency Code": "197",
        "Constituency Name": "BOMET CENTRAL"
      },
      {
        "Constituency Code": "195",
        "Constituency Name": "CHEPALUNGU"
      }
    ]
  }
]
```
