
# Ach Instrument

Instrument for ACH

*This model accepts additional fields of type unknown.*

## Structure

`AchInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `account` | `string` | Required | ACH/bank account number.<br><br>**Constraints**: *Minimum Length*: `1` |
| `routing` | `string` | Required | Routing number of the banking institution.<br><br>**Constraints**: *Minimum Length*: `1` |
| `accountType` | [`AchAccountType \| undefined`](../../doc/models/ach-account-type.md) | Optional | Type of ACH account. |
| `secCode` | [`SecCode \| undefined`](../../doc/models/sec-code.md) | Optional | SEC codes for ACH processing |
| `checkNumber` | `string \| undefined` | Optional | Optional check number.<br><br>**Constraints**: *Minimum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type8",
  "account": "account8",
  "routing": "routing4",
  "accountType": "checking",
  "secCode": "PPD",
  "checkNumber": "checkNumber4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

