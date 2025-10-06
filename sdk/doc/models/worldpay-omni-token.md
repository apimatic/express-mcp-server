
# Worldpay Omni Token

Worldpay OmniToken instrument

*This model accepts additional fields of type unknown.*

## Structure

`WorldpayOmniToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `token` | `string` | Required | Issued OmniToken.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `brand` | [`CardBrand`](../../doc/models/card-brand.md) | Required | Enumeration of card brands supported by across Worldpay platforms |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type4",
  "token": "token8",
  "brand": "sears",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

