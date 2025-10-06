
# Payment Result Scheduled Payment

Scheduled payment response payload

*This model accepts additional fields of type unknown.*

## Structure

`PaymentResultScheduledPayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | `string` | Required | Outcome of the payment task; one of the following values:<br>authorized, refused |
| `id` | `string \| undefined` | Optional | Globally unique identifer defined by Worldpay.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `reference` | `string \| undefined` | Optional | Reference number supplied with the initial payment request from which this scheduled task was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "outcome6",
  "id": "payV1StGXR8_Z5jdHi6B-myT0",
  "reference": "reference4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

