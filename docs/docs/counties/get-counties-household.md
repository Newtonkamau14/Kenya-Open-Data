---
sidebar_label: "Get counties household"
sidebar_postion: 7
---

# Get counties household

This endpoint retrieves information about the number of households in each county of Kenya.

```bash
    curl -X GET http://localhost:3000/counties/households \
         -H "x-api-key: your api key"
```

### Response Format:

The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:

- County Code: A unique identifier for the county.
- County Name: The official name of the county.
- NumberOfHouseholds: The total number of households within the county.
- AverageHouseholdSize: The average number of people per household in the county.

### Example Response:

```json
[
  {
    "countyCode": "022",
    "countyName": "Kiambu",
    "numberOfHouseholds": 795241,
    "averageHouseholdSize": 3
  },
  {
    "countyCode": "002",
    "countyName": "Kwale",
    "numberOfHouseholds": 173176,
    "averageHouseholdSize": 5
  },
  {
    "countyCode": "046",
    "countyName": "Nyamira",
    "numberOfHouseholds": 150669,
    "averageHouseholdSize": 4
  },
  {
    "countyCode": "029",
    "countyName": "Nandi",
    "numberOfHouseholds": 199426,
    "averageHouseholdSize": 4
  },
  {
    "countyCode": "031",
    "countyName": "Laikipia",
    "numberOfHouseholds": 149271,
    "averageHouseholdSize": 3
  },
  {
    "countyCode": "041",
    "countyName": "Siaya",
    "numberOfHouseholds": 250698,
    "averageHouseholdSize": 4
  },
  {
    "countyCode": "010",
    "countyName": "Marsabit",
    "numberOfHouseholds": 77495,
    "averageHouseholdSize": 6
  }
]
```
