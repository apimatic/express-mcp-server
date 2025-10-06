
# Shipping

Shipping information used for fraud assessment, 3DS authentication and the payment itself.

*This model accepts additional fields of type unknown.*

## Structure

`Shipping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | Customers first name<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `85` |
| `lastName` | `string \| undefined` | Optional | Customers last name<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `85` |
| `email` | `string \| undefined` | Optional | Email address.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `320` |
| `phone` | [`Phone \| undefined`](../../doc/models/phone.md) | Optional | Phone number. |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Address data |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "firstName": "Bob",
  "lastName": "Smith",
  "email": "sherlock.holmes@example.com",
  "phone": {
    "code": "code8",
    "number": "number8",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
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

