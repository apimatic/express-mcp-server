
# Get Client Pcrt Request

Obtains a payment card reader token, used for SoftPOS payments, along with all relevant entitlements

*This model accepts additional fields of type unknown.*

## Structure

`GetClientPcrtRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchant` | [`MerchantAuth`](../../doc/models/merchant-auth.md) | Required | Identifying information associated with the Merchant submitting the request. |
| `terminalProfileId` | `string \| undefined` | Optional | Identifier associated with the client's configured SoftPOS terminal profile. |
| `merchantBannerName` | `string \| undefined` | Optional | Name of the merchant to display on the device. This parameter is optional. |
| `allowedApplicationBundleIds` | `string[] \| undefined` | Optional | Identifiers for the permitted application bundles. |
| `tokenTimeToLiveSeconds` | `bigint \| undefined` | Optional | Number of seconds after which the payment card reader token should expire. The default value is 120 seconds. |
| `operatingSystem` | [`OperatingSystem`](../../doc/models/operating-system.md) | Required | Name of the operating system of the device requesting access to the proximity reader. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "merchant": {
    "id": "id4",
    "entity": "entity2",
    "terminalId": "terminalId2",
    "mcc": "mcc4"
  },
  "terminalProfileId": "terminalProfileId4",
  "merchantBannerName": "merchantBannerName0",
  "allowedApplicationBundleIds": [
    "allowedApplicationBundleIds4"
  ],
  "tokenTimeToLiveSeconds": 46,
  "operatingSystem": "iOS",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

