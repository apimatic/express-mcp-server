
# Pos Merchant Closed Loop Gift Card Payment Method Refund

Information from the merchant gift card.

## Structure

`PosMerchantClosedLoopGiftCardPaymentMethodRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`PosGiftInstruments`](../../doc/models/containers/pos-gift-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped) the customer is providing the card information. |

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
      "securityCode": "securityCode2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  }
}
```

