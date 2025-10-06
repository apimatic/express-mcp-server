
# Capture Payment Response Actions

*This model accepts additional fields of type unknown.*

## Structure

`CapturePaymentResponseActions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancelPayment` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `refundPayment` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `voidCapture` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
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
  "refundPayment": {
    "href": "href6",
    "method": "method2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
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

