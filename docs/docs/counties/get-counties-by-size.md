---
sidebar_label: "Get county by size"
sidebar_postion: 4
---

# Get county by size

This endpoint retrieves a list of counties in Kenya, sorted or filtered based on their size (area).

```bash
    curl -X GET http://localhost:3000/counties/size \
         -H "x-api-key: your api key"
```

By default the counties are ordered in ascending order.The endpoint can take in a query parameter order to be ordered descending order.The only parameters allowed are
ASC and DESC.For example:

```bash
    curl -X GET http://localhost:3000/counties/size?order=DESC \
         -H "x-api-key: your api key"
```


### Response Format:

The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:

- County Code: A unique county code for the county.
- County Name: The official name of the county.
- Size: The area of the county, usually measured in square kilometers.

### Example Response:

```json
[
  {
    "countyCode": "010",
    "countyName": "Marsabit",
    "size": 70944
  },
  {
    "countyCode": "023",
    "countyName": "Turkana",
    "size": 68233
  },
  {
    "countyCode": "008",
    "countyName": "Wajir",
    "size": 56773
  },
  {
    "countyCode": "007",
    "countyName": "Garissa",
    "size": 44736
  },
  {
    "countyCode": "004",
    "countyName": "Tana River",
    "size": 37951
  },
  {
    "countyCode": "015",
    "countyName": "Kitui",
    "size": 30430
  },
  {
    "countyCode": "009",
    "countyName": "Mandera",
    "size": 25940
  },
]
```
