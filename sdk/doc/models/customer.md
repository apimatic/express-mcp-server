
# Customer

Customer address data

*This model accepts additional fields of type unknown.*

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | [`Billing \| undefined`](../../doc/models/billing.md) | Optional | Billing information. |
| `shippingAddress` | [`Shipping \| undefined`](../../doc/models/shipping.md) | Optional | Shipping information used for fraud assessment, 3DS authentication and the payment itself. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "billingAddress": {
    "firstName": "firstName2",
    "lastName": "lastName6",
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
  },
  "shippingAddress": {
    "firstName": "firstName6",
    "lastName": "lastName2",
    "email": "email8",
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
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

