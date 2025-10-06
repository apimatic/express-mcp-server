
# Balances Requested Approved Total

Returns generalized balance data for requested, approved, and total requests.

*This model accepts additional fields of type unknown.*

## Structure

`BalancesRequestedApprovedTotal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requested` | `bigint \| undefined` | Optional | Full amount requested for this particular operation type; this may not match the full approved or current amount on the payment.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `approved` | `bigint \| undefined` | Optional | Approved amount for this operation type.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `totalRequests` | `bigint \| undefined` | Optional | Total number of requests of this operation type submitted by the caller to reach the current balance.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "requested": 100,
  "approved": 100,
  "totalRequests": 100,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

