
# Payment Method Response Unreferenced Refund

Response data specific to the payment method.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodResponseUnreferencedRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | **Value**: `'card'` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "card",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

