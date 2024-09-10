---
sidebar_label: "Get constituency by code"
sidebar_position: 2
---

# Get constituency by code
It get detailed information about a specific constituency in Kenya based on its constituency code. By providing the constituency code as a query parameter.

```bash
    curl -X GET http://localhost:3000/constituencies/:constituencyCode  \
         -H "x-api-key: your api key"
```
For example: 
```bash
    curl -X GET http://localhost:3000/constituencies/002  \
         -H "x-api-key: your api key"
```

### Response Format:

By providing the constituency code as a query parameter, you can access data such as:

- Constituency Code: The unique code for the constituency
- Constituency Name: The official name of the constituency.
County: The county to which the constituency belongs.
- Registered Voters: The total number of registered voters within the constituency.



### Example Response:

```json
{
  "constituencyCode": "002",
  "constituencyName": "JOMVU",
  "registeredVoters": 75085
}
```
