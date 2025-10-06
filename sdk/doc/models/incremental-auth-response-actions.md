
# Incremental Auth Response Actions

*This model accepts additional fields of type unknown.*

## Structure

`IncrementalAuthResponseActions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancelPayment` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `capturePayment` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "cancelPayment": {
    "href": "href4",
    "method": "method4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "capturePayment": {
    "href": "href8",
    "method": "method0",
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

