
# Balances

Balances data for response payloads; except where noted, balance amounts (example: _authorizations.approved_) will reflect the original operation performed  and will not be incremented or decremented based on other operations (example: partial cancellation). Interrogate the "total" field to obtain a net balance amount of the payment.

## Structure

`Balances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizations` | [`BalancesRequestedApprovedTotal`](../../doc/models/balances-requested-approved-total.md) | Required | Returns generalized balance data for requested, approved, and total requests. |
| `captures` | [`BalancesCurrentApprovedTotal`](../../doc/models/balances-current-approved-total.md) | Required | Returns generalized balance data for current, available, and total requests. |
| `refunds` | [`BalancesCurrentApprovedTotal`](../../doc/models/balances-current-approved-total.md) | Required | Returns generalized balance data for current, available, and total requests. |
| `cancellations` | [`BalancesCurrentApprovedTotal`](../../doc/models/balances-current-approved-total.md) | Required | Returns generalized balance data for current, available, and total requests. |

## Example (as JSON)

```json
{
  "authorizations": {
    "requested": 100,
    "approved": 100,
    "totalRequests": 100,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "captures": {
    "current": 100,
    "available": 100,
    "totalRequests": 100,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "refunds": {
    "current": 100,
    "available": 100,
    "totalRequests": 100,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "cancellations": {
    "current": 100,
    "available": 100,
    "totalRequests": 100,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

