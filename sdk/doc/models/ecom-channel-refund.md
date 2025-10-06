
# Ecom Channel Refund

Ecom channel for refunds.

*This model accepts additional fields of type unknown.*

## Structure

`EcomChannelRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `paymentMethod` | [`EcomPaymentMethodsRefund`](../../doc/models/containers/ecom-payment-methods-refund.md) | Required | Ecom payment methods for refund. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "paymentMethod": {
    "type": "card",
    "instrument": {
      "type": "keyed/clear",
      "cardData": {
        "cardNumber": "cardNumber2",
        "expiryDate": {
          "month": 12,
          "year": 20
        },
        "cvc": "123",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    },
    "createToken": {
      "type": "worldpay",
      "namespace": "namespace2",
      "description": "description0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
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

