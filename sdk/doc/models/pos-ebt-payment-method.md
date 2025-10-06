
# Pos Ebt Payment Method

Information from the EBT (Electronic Funds Transfer) Card.

## Structure

`PosEbtPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`PosEbtInstruments`](../../doc/models/containers/pos-ebt-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped) the customer is providing the card information. |
| `otherAmounts` | [`AdditionalAmountsEbtEwic \| undefined`](../../doc/models/additional-amounts-ebt-ewic.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for EBT and eWIC transactions |
| `voucher` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `fnsNumber` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `foodstampOnly` | `boolean \| undefined` | Optional | - |
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
  "voucher": "voucher0",
  "fnsNumber": "fnsNumber4",
  "foodstampOnly": false,
  "options": {
    "addressVerification": false,
    "partialApproval": false
  }
}
```

