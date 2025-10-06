
# Integrated

3DS authentication as part of the payments API flow

*This model accepts additional fields of type unknown.*

## Structure

`Integrated`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | **Value**: `'integrated'` |
| `mode` | [`Mode \| undefined`](../../doc/models/mode.md) | Optional | When to request 3DS authentication. Always, when SCA is mandated or only for soft declines.<br><br>\|  \|  \|<br>\|-----\|-----\|<br>\| always   \| Attempt 3DS for every request \|<br>\| scaMandatedOnly   \|  Only attempt 3DS for issuer countries in the EEA where SCA applies   \|<br>\| softDeclinesOnly   \| Attempt 3DS following a soft decline from payment authorization  \|<br>\| customRules   \| Attempt 3DS based on rules configured \|<br><br>**Default**: `Mode.Always` |
| `scaExemption` | [`ScaExemption \| undefined`](../../doc/models/sca-exemption.md) | Optional | request an SCA exemption from Worldpay. Be SCA compliant and reduce customer checkout friction |
| `challenge` | [`Challenge`](../../doc/models/challenge.md) | Required | An object containing 3DS challenge preferences and configuration |
| `deviceData` | [`DeviceData`](../../doc/models/device-data.md) | Required | An object containing device data for 3DS |
| `shipping` | [`Shipping3Ds \| undefined`](../../doc/models/shipping-3-ds.md) | Optional | - |
| `previousSuspiciousActivity` | `boolean \| undefined` | Optional | Has the account been flagged for suspicious activity. |
| `usertype` | [`Usertype \| undefined`](../../doc/models/usertype.md) | Optional | - |
| `accountHistory` | [`AccountHistory \| undefined`](../../doc/models/account-history.md) | Optional | Customer account history |
| `reorder` | `boolean \| undefined` | Optional | Repeat of a previous order |
| `preOrderDate` | `string \| undefined` | Optional | Expected date that a pre-ordered purchase will be available. |
| `transactionHistory` | [`TransactionHistory \| undefined`](../../doc/models/transaction-history.md) | Optional | Object containing details of the last transaction. |
| `giftCardsPurchase` | [`GiftCardsPurchase \| undefined`](../../doc/models/gift-cards-purchase.md) | Optional | If the order is being used to purchase a gift card. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "integrated",
  "mode": "scaMandatedOnly",
  "challenge": {
    "windowSize": "390x400",
    "preference": "challengeMandated",
    "returnUrl": "returnUrl6",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "deviceData": {
    "browserLanguage": "en-GB",
    "browserColorDepth": 24,
    "browserScreenHeight": 360,
    "browserScreenWidth": 844,
    "browserTZ": -60,
    "userAgentHeader": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0)",
    "acceptHeader": "text/html",
    "browserJavaEnabled": false,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "previousSuspiciousActivity": false,
  "usertype": "registeredUser",
  "reorder": true,
  "preOrderDate": "2010-08-04",
  "scaExemption": {
    "enabled": false,
    "placement": "authorization",
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
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

