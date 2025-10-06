
# Balances Current Approved Total

Returns generalized balance data for current, available, and total requests.

*This model accepts additional fields of type unknown.*

## Structure

`BalancesCurrentApprovedTotal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `current` | `number \| undefined` | Optional | Current balance of this operation type.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `available` | `number \| undefined` | Optional | Amount available (remaining) for this operation type.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `totalRequests` | `number \| undefined` | Optional | Total number of requests of this operation type submitted by the caller to reach the current balance.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "current": 100,
  "available": 100,
  "totalRequests": 100,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

