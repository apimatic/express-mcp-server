
# Moto Channel Create Payment

MOTO channel

*This model accepts additional fields of type unknown.*

## Structure

`MotoChannelCreatePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `paymentMethod` | [`MotoCardPaymentMethodCreatePayment`](../../doc/models/moto-card-payment-method-create-payment.md) | Required | MOTO Payment Methods for authorizations |
| `device` | [`MotoDevice \| undefined`](../../doc/models/moto-device.md) | Optional | Information about the device used to accept the payment |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type4",
  "paymentMethod": {
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
  },
  "device": {
    "laneNumber": "laneNumber4",
    "serialNumber": "serialNumber8",
    "model": "model4"
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

