
# Scheduled Payment Execution

Response payload for scheduled payment execution data.

*This model accepts additional fields of type unknown.*

## Structure

`ScheduledPaymentExecution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sequenceNumber` | `number` | Required | One-based index of the task run. |
| `scheduledStartTime` | `string` | Required | Date and time in ISO-8601 format indicating the scheduled start of the task run. |
| `actualStartTime` | `string` | Required | Actual date and time in ISO-8601 format indicating when the task was started. |
| `paymentResult` | [`PaymentResultScheduledPayment`](../../doc/models/payment-result-scheduled-payment.md) | Required | Scheduled payment response payload |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "sequenceNumber": 60,
  "scheduledStartTime": "scheduledStartTime4",
  "actualStartTime": "actualStartTime0",
  "paymentResult": {
    "outcome": "outcome2",
    "id": "payV1StGXR8_Z5jdHi6B-myT0",
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
```

