
# Pos Merchant Closed Loop Gift Card Payment Method Create Payment

Information from the Merchant Gift Card.

## Structure

`PosMerchantClosedLoopGiftCardPaymentMethodCreatePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`PosGiftInstruments`](../../doc/models/containers/pos-gift-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped) the customer is providing the card information. |
| `otherAmounts` | [`AdditionalAmountsCreditCardPresent \| undefined`](../../doc/models/additional-amounts-credit-card-present.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for credit card present |
| `options` | [`PaymentMethodOptionsAssociatedWithNonCreditOrDebitMethods \| undefined`](../../doc/models/payment-method-options-associated-with-non-credit-or-debit-methods.md) | Optional | Options for handling the authorization request |

## Example (as JSON)

```json
{
  "type": "type4",
  "instrument": {
    "type": "keyed/clear",
    "cardData": {
      "cardNumber": "cardNumber2",
      "expiryDate": {
        "month": 12,
        "year": 20
      },
      "securityCode": "securityCode2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  },
  "otherAmounts": {
    "cashBack": 92,
    "surcharge": 84,
    "convenienceFee": 158,
    "tip": 136,
    "salesTax": 54
  },
  "options": {
    "addressVerification": false,
    "partialApproval": false
  }
}
```

