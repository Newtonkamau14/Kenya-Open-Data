---
sidebar_label: 'Get county by code'
sidebar_postion: 2
---

# Get county by code
This endpoint retrieves detailed information about a specific county in Kenya based on its county code as a query parameter.

```bash
    curl -X GET https://kenya-open-data.onrender.com/counties/:countyCode  \
         -H "x-api-key: your api key"
```

For example: 

```bash
    curl -X GET https://kenya-open-data.onrender.com/counties/001  \
         -H "x-api-key: your api key"
```


### Response Format:
The endpoint will typically return an object representing the county, including the following fields:

- County Code: A unique identifier for the county.
- County Name: The official name of the county.
- Size: The size of the county in square kilomtetres
- Population: The estimated population of the county.
- Other relevant data: Additional information such as area, capital city, governor,deputy governor, women representative and constituencies which contain an array of objects.

### Example Response: 

```json

{
  "countyCode": "001",
  "countyName": "Mombasa (County)",
  "size": 220,
  "population": 1208333,
  "populationDensity": 5495,
  "numberOfHouseholds": 378422,
  "averageHouseholdSize": 3,
  "sexRatio": 102,
  "capital": "Mombasa (City)",
  "governor": "Abdullswammad  Sherif Nassir",
  "deputyGovernor": "Francis Thoya",
  "womenRepresentative": "Zamzam Mohamed",
  "constituencies": [
    {
      "Constituency Code": "005",
      "Constituency Name": "LIKONI"
    },
    {
      "Constituency Code": "002",
      "Constituency Name": "JOMVU"
    },
    {
      "Constituency Code": "001",
      "Constituency Name": "CHANGAMWE"
    },
    {
      "Constituency Code": "004",
      "Constituency Name": "NYALI"
    },
    {
      "Constituency Code": "003",
      "Constituency Name": "KISAUNI"
    },
    {
      "Constituency Code": "006",
      "Constituency Name": "MVITA"
    }
  ]
}
```