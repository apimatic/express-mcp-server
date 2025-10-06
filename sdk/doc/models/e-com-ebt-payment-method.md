
# E Com Ebt Payment Method

Information from the EBT (Electronic Funds Transfer) Card.

## Structure

`EComEbtPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`KeyedClearInstrument`](../../doc/models/keyed-clear-instrument.md) | Required | Manner in which the EBT card is presented. |
| `otherAmounts` | [`AdditionalAmountsCardNotPresent \| undefined`](../../doc/models/additional-amounts-card-not-present.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for card not present transactions |
| `voucher` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `fnsNumber` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `foodstampOnly` | `boolean \| undefined` | Optional | - |
| `options` | [`PaymentMethodOptionsAssociatedWithNonCreditOrDebitMethods \| undefined`](../../doc/models/payment-method-options-associated-with-non-credit-or-debit-methods.md) | Optional | Options for handling the authorization request |

## Example (as JSON)

```json
{
  "type": "type6",
  "instrument": {
    "type": "type4",
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
  "voucher": "voucher8",
  "fnsNumber": "fnsNumber6",
  "foodstampOnly": false,
  "options": {
    "addressVerification": false,
    "partialApproval": false
  }
}
```

