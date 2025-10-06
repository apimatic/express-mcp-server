
# Pos Card Payment Method Refund

Payment method for POS, specific to refunds.

## Structure

`PosCardPaymentMethodRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`PosCardInstruments`](../../doc/models/containers/pos-card-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped, Inserted or Tapped) the customer is providing the card information. |
| `options` | [`CardPaymentMethodOptionsRefund \| undefined`](../../doc/models/card-payment-method-options-refund.md) | Optional | Options for handling the authorization request. |
| `createToken` | [`TokenCreate \| undefined`](../../doc/models/containers/token-create.md) | Optional | Create a token for use in future payments |

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
    },
    "pinData": {
      "pinBlock": "pinBlock6",
      "keySerialNumber": "keySerialNumber0"
    },
    "fallbackReasonCode": "manualKeyedMagstripeFailure"
  },
  "options": {
    "processAs": "creditOrSignatureDebit"
  },
  "createToken": {
    "type": "worldpay",
    "namespace": "namespace2",
    "description": "description0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

