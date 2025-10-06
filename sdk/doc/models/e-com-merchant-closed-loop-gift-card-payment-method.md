
# E Com Merchant Closed Loop Gift Card Payment Method

Information from the Merchant Gift Card.

## Structure

`EComMerchantClosedLoopGiftCardPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`PlainGiftCardDataInstrumentClear`](../../doc/models/plain-gift-card-data-instrument-clear.md) | Required | Manner in which the gift card data is presented. |
| `otherAmounts` | [`AdditionalAmountsCardNotPresent \| undefined`](../../doc/models/additional-amounts-card-not-present.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for card not present transactions |
| `options` | [`PaymentMethodOptionsAssociatedWithNonCreditOrDebitMethods \| undefined`](../../doc/models/payment-method-options-associated-with-non-credit-or-debit-methods.md) | Optional | Options for handling the authorization request |

## Example (as JSON)

```json
{
  "type": "type4",
  "instrument": {
    "type": "type4",
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
    "surcharge": 84,
    "convenienceFee": 158,
    "salesTax": 54
  },
  "options": {
    "addressVerification": false,
    "partialApproval": false
  }
}
```

