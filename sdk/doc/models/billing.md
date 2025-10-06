
# Billing

Billing information.

*This model accepts additional fields of type unknown.*

## Structure

`Billing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | Customers first name<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `85` |
| `lastName` | `string \| undefined` | Optional | Customers last name<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `85` |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Address data |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "firstName": "Bob",
  "lastName": "Smith",
  "address": {
    "address1": "address14",
    "address2": "address28",
    "address3": "address36",
    "city": "city6",
    "countryCode": "PK",
    "postalCode": "postalCode8",
    "state": "state2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

