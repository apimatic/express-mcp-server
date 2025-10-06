
# Update Payment Schedule Response

Response payload for scheduled payment update requests

*This model accepts additional fields of type unknown.*

## Structure

`UpdatePaymentScheduleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Required | Date in YYYY-MM-DD format on which the payment (or initial, if multiple) will be or was run. |
| `numberOfPayments` | `number \| undefined` | Optional | Total number of times the schedule is set to run, if interval is not set to oneTimeFuture. If __absent__, the schedule is set to run until explicitly deleted. |
| `interval` | [`ScheduledPaymentsRunInterval`](../../doc/models/scheduled-payments-run-interval.md) | Required | Scheduled Payments Run interval |
| `multiplier` | `number \| undefined` | Optional | Multiplier against which the interval will be assessed; example: when interval = monthly and multiplier = 3, the payment will be run every 3 months. |
| `active` | `boolean` | Required | Returns true if any future runs of the schedule remain; otherwise, false |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "startDate": "startDate8",
  "numberOfPayments": 38,
  "interval": "annually",
  "multiplier": 180,
  "active": false,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

