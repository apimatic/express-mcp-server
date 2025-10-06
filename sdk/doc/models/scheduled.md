
# Scheduled

Polymorphic reference for scheduled payment data

*This model accepts additional fields of type unknown.*

## Structure

`Scheduled`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `startDate` | `string` | Required | Date in YYYY-MM-DD format on which the payment (or initial, if multiple) will be run<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `12` |
| `numberOfPayments` | `number \| undefined` | Optional | Number of times the schedule should be run, if frequency is not set to oneTimeFuture. If omitted and frequency is not oneTimeFuture, the schedule will run until explicitly deleted. |
| `interval` | [`ScheduledPaymentsRunInterval`](../../doc/models/scheduled-payments-run-interval.md) | Required | Scheduled Payments Run interval |
| `multiplier` | `number \| undefined` | Optional | Multiplier against which the interval will be assessed; example: when interval = monthly and multiplier = 3, the payment will be run every 3 months. |
| `scheduleAmount` | `bigint` | Required | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type8",
  "startDate": "startDate8",
  "interval": "oneTime",
  "scheduleAmount": 100,
  "numberOfPayments": 242,
  "multiplier": 128,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

