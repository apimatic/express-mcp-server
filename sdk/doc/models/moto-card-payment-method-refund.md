
# Moto Card Payment Method Refund

MOTO Card Payment Method for refunds

*This model accepts additional fields of type unknown.*

## Structure

`MotoCardPaymentMethodRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`MotoCardInstruments`](../../doc/models/containers/moto-card-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped, Inserted or Tapped) the customer is providing the card information. |
| `createToken` | [`TokenCreate \| undefined`](../../doc/models/containers/token-create.md) | Optional | Create a token for use in future payments |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
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

