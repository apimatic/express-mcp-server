
# Pos Channel Refund

This type of transaction takes place when the Card is present and either swiped, keyed, inserted into or tapped on the terminal.

## Structure

`PosChannelRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `paymentMethod` | [`PosPaymentMethodsRefund`](../../doc/models/containers/pos-payment-methods-refund.md) | Required | Identifies the customer payment method. |
| `softPosId` | `string \| undefined` | Optional | An identifier when a payment is accepted on a Soft POS-capable mobile device/smartphone, regardless of whether or not the payment was contactless.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `device` | [`PosDevice \| undefined`](../../doc/models/pos-device.md) | Optional | Information about the device used to accept the payment |
| `clerkId` | `string \| undefined` | Optional | Allows integrator to track employee accepting this payment.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `shiftId` | `string \| undefined` | Optional | Allows integrator to associate this payment with an employee shift.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |

## Example (as JSON)

```json
{
  "type": "type0",
  "paymentMethod": {
    "type": "card",
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
  },
  "softPosId": "softPosId2",
  "device": {
    "laneNumber": "laneNumber4",
    "serialNumber": "serialNumber8",
    "model": "model4",
    "capabilities": "manualEntryOnly",
    "environment": "localAttended"
  },
  "clerkId": "clerkId6",
  "shiftId": "shiftId4"
}
```

