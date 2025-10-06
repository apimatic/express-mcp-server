
# Scheduled Payment

Payment scheduling parameters

*This model accepts additional fields of type unknown.*

## Structure

`ScheduledPayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string \| undefined` | Optional | Date in YYYY-MM-DD format on which the payment (or initial, if multiple) will be run.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |
| `numberOfPayments` | `number \| undefined` | Optional | Number of times the schedule should be run, if interval is not set to oneTimeFuture. If omitted and frequency is not oneTimeFuture, the schedule will run until explicitly deleted. |
| `interval` | [`ScheduledPaymentsRunInterval \| undefined`](../../doc/models/scheduled-payments-run-interval.md) | Optional | Scheduled Payments Run interval |
| `multiplier` | `number \| undefined` | Optional | Multiplier against which the interval will be assessed; example: when interval = monthly and multiplier = 3, the payment will be run every 3 months. |
| `active` | `boolean \| undefined` | Optional | Set to false to deactivate a recurring payment schedule but leave in place; set to true to active a currently deactivated schedule |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "startDate": "startDate4",
  "numberOfPayments": 110,
  "interval": "annually",
  "multiplier": 252,
  "active": false,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

