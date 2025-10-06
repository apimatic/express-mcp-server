
# Query Payment Schedule Response

Response payload for scheduled payment query requests

*This model accepts additional fields of type unknown.*

## Structure

`QueryPaymentScheduleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Required | Date in YYYY-MM-DD format on which the payment (or initial, if multiple) will be or was run. |
| `nextRunDate` | `string \| undefined` | Optional | Next date in YYYY-MM-DD format on which the payment will be run (if applicable). |
| `numberOfPayments` | `number \| undefined` | Optional | Total number of times the schedule is set to run, if interval is not set to oneTimeFuture. If __absent__, the schedule is set to run until explicitly deleted. |
| `interval` | [`ScheduledPaymentsRunInterval`](../../doc/models/scheduled-payments-run-interval.md) | Required | Scheduled Payments Run interval |
| `multiplier` | `number \| undefined` | Optional | Multiplier against which the interval will be assessed; example: when interval = monthly and multiplier = 3, the payment will be run every 3 months. |
| `active` | `boolean` | Required | Returns true if any future runs of the schedule remain; otherwise, false |
| `payments` | [`ScheduledPaymentExecution[] \| undefined`](../../doc/models/scheduled-payment-execution.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "startDate": "startDate8",
  "nextRunDate": "nextRunDate0",
  "numberOfPayments": 186,
  "interval": "oneTime",
  "multiplier": 72,
  "active": false,
  "payments": [
    {
      "sequenceNumber": 48,
      "scheduledStartTime": "scheduledStartTime4",
      "actualStartTime": "actualStartTime8",
      "paymentResult": {
        "outcome": "outcome2",
        "id": "id6",
        "reference": "reference8",
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
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

