
# Retrieve Payment Response Actions

*This model accepts additional fields of type unknown.*

## Structure

`RetrievePaymentResponseActions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancelPayment` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `capturePayment` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `refundPayment` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `voidCapture` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
| `incrementAuthorizedAmount` | [`Actions \| undefined`](../../doc/models/actions.md) | Optional | HATEOAS links for response payloads. |
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
  "incrementAuthorizedAmount": {
    "href": "href0",
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

