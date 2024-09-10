---
sidebar_label: "Get counties population"
sidebar_postion: 5
---

# Get counties population

This endpoint retrieves information about the population of each county in Kenya.

```bash
    curl -X GET http://localhost:3000/counties/population \
         -H "x-api-key: your api key"
```

### Response Format:

The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:

- County Code: A unique identifier for the county.
- County Name: The official name of the county.
- Population: The total population of the county.

### Example Response:

```json
[
  {
    "countyCode": "022",
    "countyName": "Kiambu",
    "population": 2417735
  },
  {
    "countyCode": "002",
    "countyName": "Kwale",
    "population": 866820
  },
  {
    "countyCode": "046",
    "countyName": "Nyamira",
    "population": 605576
  },
  {
    "countyCode": "029",
    "countyName": "Nandi",
    "population": 885711
  },
  {
    "countyCode": "031",
    "countyName": "Laikipia",
    "population": 518560
  },
  {
    "countyCode": "041",
    "countyName": "Siaya",
    "population": 993183
  },
  {
    "countyCode": "010",
    "countyName": "Marsabit",
    "population": 459785
  }
]
```
