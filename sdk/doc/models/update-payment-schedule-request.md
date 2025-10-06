
# Update Payment Schedule Request

Request payload to update a scheduled payment

*This model accepts additional fields of type unknown.*

## Structure

`UpdatePaymentScheduleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchant` | [`MerchantSubsequentRequest`](../../doc/models/merchant-subsequent-request.md) | Required | Subsequent request merchant object. |
| `schedule` | [`ScheduledPayment`](../../doc/models/scheduled-payment.md) | Required | Payment scheduling parameters |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "merchant": {
    "id": "id4",
    "terminalId": "terminalId2"
  },
  "schedule": {
    "startDate": "startDate6",
    "numberOfPayments": 198,
    "interval": "oneTime",
    "multiplier": 84,
    "active": false,
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

