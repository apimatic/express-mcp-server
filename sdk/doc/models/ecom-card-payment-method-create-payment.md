
# Ecom Card Payment Method Create Payment

Ecom card payment method

*This model accepts additional fields of type unknown.*

## Structure

`EcomCardPaymentMethodCreatePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `instrument` | [`EcomCardInstruments`](../../doc/models/containers/ecom-card-instruments.md) | Required | Identifies **HOW** (ex Keyed, Swiped, Inserted or Tapped) the customer is providing the card information. |
| `otherAmounts` | [`AdditionalAmountsCardNotPresent \| undefined`](../../doc/models/additional-amounts-card-not-present.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for card not present transactions |
| `options` | [`CardPaymentMethodOptions \| undefined`](../../doc/models/card-payment-method-options.md) | Optional | Options for handling the authorization request |
| `createToken` | [`TokenCreate \| undefined`](../../doc/models/containers/token-create.md) | Optional | Create a token for use in future payments |
| `threeDs` | [`Threeds \| undefined`](../../doc/models/containers/threeds.md) | Optional | An object containing 3DS authentication preferences and customer data |
| `customerAgreement` | [`CustomerAgreement \| undefined`](../../doc/models/containers/customer-agreement.md) | Optional | Setup an initial agreement (__first__) to store a customers payment details and make __subsequent__  payments when __storing a card__, for __subscriptions__, __installments__, __scheduled__, and __unscheduled__ payments |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
}
```

