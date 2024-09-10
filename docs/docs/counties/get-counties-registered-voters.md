---
sidebar_label: "Get counties registered voters"
sidebar_postion: 8
---

# Get counties registered voters

This endpoint retrieves information about the number of registered voters in each county of Kenya.

```bash
    curl -X GET http://localhost:3000/counties/registeredvoters \
         -H "x-api-key: your api key"
```

### Response Format:

The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:

- County Code: A unique identifier for the county.
- County Name: The official name of the county.
- Total registered voters: The total number of registered voters within the county.

### Example Response:

```json
[
  {
    "countyCode": "022",
    "countyName": "Kiambu",
    "capital": "Kiambu",
    "total_registered_voters": "1275008"
  },
  {
    "countyCode": "002",
    "countyName": "Kwale",
    "capital": "Kwale",
    "total_registered_voters": "328253"
  },
  {
    "countyCode": "046",
    "countyName": "Nyamira",
    "capital": "Nyamira",
    "total_registered_voters": "323283"
  },
  {
    "countyCode": "029",
    "countyName": "Nandi",
    "capital": "Kapsabet",
    "total_registered_voters": "406288"
  },
  {
    "countyCode": "031",
    "countyName": "Laikipia",
    "capital": "Nanyuki",
    "total_registered_voters": "263012"
  },
  {
    "countyCode": "041",
    "countyName": "Siaya",
    "capital": "Siaya",
    "total_registered_voters": "533595"
  },
  {
    "countyCode": "010",
    "countyName": "Marsabit",
    "capital": "Marsabit",
    "total_registered_voters": "166912"
  }
]
```
