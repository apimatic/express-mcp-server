
# Pos Channel Create Payment

This type of transaction takes place when the Card is present and either swiped, keyed, inserted into or tapped on the terminal.

## Structure

`PosChannelCreatePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `paymentMethod` | [`PosPaymentMethodsAuth`](../../doc/models/containers/pos-payment-methods-auth.md) | Required | Identifies what the customer is using to pay with |
| `softPosId` | `string \| undefined` | Optional | An identifier when a payment is accepted on a Soft POS-capable mobile device/smartphone, regardless of whether or not the payment was contactless.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `device` | [`PosDevice \| undefined`](../../doc/models/pos-device.md) | Optional | Information about the device used to accept the payment |
| `clerkId` | `string \| undefined` | Optional | Allows integrator to track employee accepting this payment.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `shiftId` | `string \| undefined` | Optional | Allows integrator to associate this payment with an employee shift.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |

## Example (as JSON)

```json
{
  "type": "type8",
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
    "otherAmounts": {
      "cashBack": 92,
      "surcharge": 84,
      "convenienceFee": 158,
      "tip": 136,
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
    "threeDs": {
      "type": "integrated",
      "mode": "softDeclineOnly",
      "scaExemption": {
        "enabled": false,
        "placement": "authorization",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "challenge": {
        "windowSize": "250x400",
        "preference": "noPreference",
        "returnUrl": "returnUrl6",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "deviceData": {
        "browserLanguage": "browserLanguage4",
        "browserJavaEnabled": false,
        "browserColorDepth": 84,
        "browserScreenHeight": 114,
        "browserScreenWidth": 118,
        "userAgentHeader": "userAgentHeader4",
        "acceptHeader": "acceptHeader4",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "shipping": {
        "email": "email2",
        "nameMatchesAccountName": false,
        "method": "otherAddress",
        "timeFrame": "nextDay",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "previousSuspiciousActivity": false,
      "usertype": "thirdPartyAuthentication",
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
    }
  },
  "softPosId": "softPosId4",
  "device": {
    "laneNumber": "laneNumber4",
    "serialNumber": "serialNumber8",
    "model": "model4",
    "capabilities": "manualEntryOnly",
    "environment": "localAttended"
  },
  "clerkId": "clerkId4",
  "shiftId": "shiftId6"
}
```

