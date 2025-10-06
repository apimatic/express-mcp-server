
# Retrieve Capture Response Actions

*This model accepts additional fields of type unknown.*

## Structure

`RetrieveCaptureResponseActions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `voidCapture` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "voidCapture": {
    "href": "href4",
    "method": "method4",
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

