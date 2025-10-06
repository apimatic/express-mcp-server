
# Ecom Card Payment Method Refund

Ecom card payment method for refunds.

*This model accepts additional fields of type unknown.*

## Structure

`EcomCardPaymentMethodRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`EcomCardInstruments`](../../doc/models/containers/ecom-card-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped, Inserted or Tapped) the customer is providing the card information. |
| `createToken` | [`TokenCreate \| undefined`](../../doc/models/containers/token-create.md) | Optional | Create a token for use in future payments |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type2",
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
}
```

