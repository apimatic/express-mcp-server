
# Retrieval Ach Data

ACH data for retrieval payloads

*This model accepts additional fields of type unknown.*

## Structure

`RetrievalAchData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `truncatedAccount` | `string` | Required | Truncated ACH/bank account number.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `routing` | `string` | Required | Routing number of the banking institution.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `9` |
| `accountType` | [`AchAccountType \| undefined`](../../doc/models/ach-account-type.md) | Optional | Type of ACH account. |
| `secCode` | [`SecCode \| undefined`](../../doc/models/sec-code.md) | Optional | SEC codes for ACH processing |
| `checkNumber` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "truncatedAccount": "truncatedAccount4",
  "routing": "routing6",
  "accountType": "checking",
  "secCode": "ARC",
  "checkNumber": "checkNumber6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

