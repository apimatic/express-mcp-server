
# Shipping 3 Ds

*This model accepts additional fields of type unknown.*

## Structure

`Shipping3Ds`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | Email address used for an electronic delivery. |
| `nameMatchesAccountName` | `boolean \| undefined` | Optional | Flag that indicates whether the customer name on account is identical to the shipping name. |
| `method` | [`Method \| undefined`](../../doc/models/method.md) | Optional | Shipping method used. |
| `timeFrame` | [`TimeFrame \| undefined`](../../doc/models/time-frame.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "email": "customer@example.com",
  "nameMatchesAccountName": true,
  "method": "billingAddress",
  "timeFrame": "nextDay",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

