
# Moto Card Payment Method Create Payment

MOTO Card Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`MotoCardPaymentMethodCreatePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`MotoCardInstruments`](../../doc/models/containers/moto-card-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped, Inserted or Tapped) the customer is providing the card information. |
| `otherAmounts` | [`AdditionalAmountsCardNotPresent \| undefined`](../../doc/models/additional-amounts-card-not-present.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for card not present transactions |
| `options` | [`CardPaymentMethodOptions \| undefined`](../../doc/models/card-payment-method-options.md) | Optional | Options for handling the authorization request |
| `createToken` | [`TokenCreate \| undefined`](../../doc/models/containers/token-create.md) | Optional | Create a token for use in future payments |
| `customerAgreement` | [`CustomerAgreement \| undefined`](../../doc/models/containers/customer-agreement.md) | Optional | Setup an initial agreement (__first__) to store a customers payment details and make __subsequent__  payments when __storing a card__, for __subscriptions__, __installments__, __scheduled__, and __unscheduled__ payments |
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
  "otherAmounts": {
    "surcharge": 84,
    "convenienceFee": 158,
    "salesTax": 54
  },
  "options": {
    "addressVerification": false,
    "partialApproval": false,
    "processAs": "creditOrSignatureDebit",
    "autoCapture": false,
    "preAuthorization": false
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
  "customerAgreement": {
    "type": "cardOnFile",
    "usage": "first",
    "schemeReference": "schemeReference6",
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

