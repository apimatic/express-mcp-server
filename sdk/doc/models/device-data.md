
# Device Data

An object containing device data for 3DS

*This model accepts additional fields of type unknown.*

## Structure

`DeviceData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `browserLanguage` | `string \| undefined` | Optional | Your customer's browser language that can be used by the issuer in risk analysis. Must conform to the language tags defined by IETF. E.g. en-GB, fr-FR |
| `browserJavaEnabled` | `boolean \| undefined` | Optional | - |
| `browserColorDepth` | `number \| undefined` | Optional | - |
| `browserScreenHeight` | `number \| undefined` | Optional | - |
| `browserScreenWidth` | `number \| undefined` | Optional | - |
| `browserTz` | `number \| undefined` | Optional | - |
| `deviceChannel` | [`DeviceChannel \| undefined`](../../doc/models/device-channel.md) | Optional | - |
| `browserJavascriptEnabled` | `boolean \| undefined` | Optional | - |
| `userAgentHeader` | `string` | Required | Used by issuers as part of risk analysis and correctly displaying the challenge. Must conform to RFC 7321 |
| `acceptHeader` | `string` | Required | Used by the issuer to check if the customer's browser is compatible with the issuer 3DS challenge display. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
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
}
```

