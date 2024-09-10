---
sidebar_label: 'Get counties population density'
sidebar_postion: 6
---

# Get counties population density

This endpoint retrieves information about the population density of each county in Kenya.

```bash
    curl -X GET http://localhost:3000/counties/populationdensity \
         -H "x-api-key: your api key"
```

### Response Format: 

The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:

- County Code: A unique identifier for the county.
- County Name: The official name of the county.
- PopulationDensity: The population density of the county, calculated as the population divided by the area.


### Example Response:

```json

[
  {
    "countyCode": "022",
    "countyName": "Kiambu",
    "populationDensity": 952
  },
  {
    "countyCode": "002",
    "countyName": "Kwale",
    "populationDensity": 105
  },
  {
    "countyCode": "046",
    "countyName": "Nyamira",
    "populationDensity": 675
  },
  {
    "countyCode": "029",
    "countyName": "Nandi",
    "populationDensity": 310
  },
  {
    "countyCode": "031",
    "countyName": "Laikipia",
    "populationDensity": 54
  },
  {
    "countyCode": "041",
    "countyName": "Siaya",
    "populationDensity": 393
  },
  {
    "countyCode": "010",
    "countyName": "Marsabit",
    "populationDensity": 6
  }
]
```
