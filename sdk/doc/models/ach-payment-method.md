
# Ach Payment Method

Payment Method for ACH

*This model accepts additional fields of type unknown.*

## Structure

`AchPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`AchInstruments`](../../doc/models/containers/ach-instruments.md) | Required | Instruments for ACH processing |
| `createToken` | [`TokenCreate \| undefined`](../../doc/models/containers/token-create.md) | Optional | Create a token for use in future payments |
| `customerAgrement` | [`Scheduled \| undefined`](../../doc/models/scheduled.md) | Optional | Customer agreement data limited to scheduled payments |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "instrument": {
    "type": "ach",
    "token": "00000000-0000-0000-0000-000000000000",
    "account": "account8",
    "routing": "routing4",
    "accountType": "checking",
    "secCode": "PPD",
    "checkNumber": "checkNumber4"
  },
  "createToken": {
    "type": "worldpay",
    "namespace": "namespace2",
    "description": "description0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "customerAgrement": {
    "type": "type0",
    "startDate": "startDate0",
    "numberOfPayments": 30,
    "interval": "weekly",
    "multiplier": 172,
    "scheduleAmount": 6,
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

