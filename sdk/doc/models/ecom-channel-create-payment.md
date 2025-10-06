
# Ecom Channel Create Payment

Ecom channel

*This model accepts additional fields of type unknown.*

## Structure

`EcomChannelCreatePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `paymentMethod` | [`EcomPaymentMethodsAuth`](../../doc/models/containers/ecom-payment-methods-auth.md) | Required | Ecom Payment Methods |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type2",
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
    },
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

