
# Pos Ewic Payment Method

Information from the EWIC (electronic Woman Infants and Children) Card.

## Structure

`PosEwicPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`PosEwicInstruments`](../../doc/models/containers/pos-ewic-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped) the customer is providing the card information. |
| `otherAmounts` | [`AdditionalAmountsEbtEwic \| undefined`](../../doc/models/additional-amounts-ebt-ewic.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for EBT and eWIC transactions |
| `ewicMerchantId` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `options` | [`PaymentMethodOptionsAssociatedWithNonCreditOrDebitMethods \| undefined`](../../doc/models/payment-method-options-associated-with-non-credit-or-debit-methods.md) | Optional | Options for handling the authorization request |

## Example (as JSON)

```json
{
  "type": "type8",
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
  "otherAmounts": {
    "convenienceFee": 158,
    "salesTax": 54
  },
  "ewicMerchantId": "ewicMerchantId6",
  "options": {
    "addressVerification": false,
    "partialApproval": false
  }
}
```

