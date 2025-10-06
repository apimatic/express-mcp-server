
# Links Additional Fields

*This model accepts additional fields of type unknown.*

## Structure

`LinksAdditionalFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | URI to a static resource. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "href": "https://api.worldpay.com/payments/pay_85rmRqaaD5p3wliJMuRn3",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

