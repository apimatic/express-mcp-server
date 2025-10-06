
# Batch Response

Summary of the open batch, as of the completion of the current operation.

*This model accepts additional fields of type unknown.*

## Structure

`BatchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Value \| undefined`](../../doc/models/value.md) | Optional | the value and currency |
| `id` | `number \| undefined` | Optional | Four-digit identifier of the current batch. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "amount": {
    "currency": "currency2",
    "amount": 0,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "id": 118,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

