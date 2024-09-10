---
sidebar_label: "Get counties capital"
sidebar_postion: 9
---

# Get counties capital

This endpoint retrieves a list of counties in Kenya, along with their respective capital cities.

```bash
    curl -X GET http://localhost:3000/counties/capital \
         -H "x-api-key: your api key"
```

### Response Format:

The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:

- County Code: A unique identifier for the county.
- County Name: The official name of the county.
- Capital City: The name of the county's capital city.

### Example Response:

```json
[
  {
    "countyCode": "022",
    "countyName": "Kiambu",
    "capital": "Kiambu"
  },
  {
    "countyCode": "002",
    "countyName": "Kwale",
    "capital": "Kwale"
  },
  {
    "countyCode": "046",
    "countyName": "Nyamira",
    "capital": "Nyamira"
  },
  {
    "countyCode": "029",
    "countyName": "Nandi",
    "capital": "Kapsabet"
  },
  {
    "countyCode": "031",
    "countyName": "Laikipia",
    "capital": "Nanyuki"
  },
  {
    "countyCode": "041",
    "countyName": "Siaya",
    "capital": "Siaya"
  },
  {
    "countyCode": "010",
    "countyName": "Marsabit",
    "capital": "Marsabit"
  }
]
```
