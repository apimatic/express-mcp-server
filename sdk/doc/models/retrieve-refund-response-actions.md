
# Retrieve Refund Response Actions

*This model accepts additional fields of type unknown.*

## Structure

`RetrieveRefundResponseActions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `voidRefund` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "voidRefund": {
    "href": "href6",
    "method": "method8",
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

