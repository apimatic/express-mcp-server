
# Actions

HATEOAS links for response payloads.

*This model accepts additional fields of type unknown.*

## Structure

`Actions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | URI to act on this Payment resource; this could be a capture, reversal, refund, or void, depending upon payment state. |
| `method` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "href": "https://api.worldpay.com/payments/V1StGXR8_Z5jdHi6B-myT/captures",
  "method": "POST",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

