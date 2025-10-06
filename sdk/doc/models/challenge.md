
# Challenge

An object containing 3DS challenge preferences and configuration

*This model accepts additional fields of type unknown.*

## Structure

`Challenge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `windowSize` | [`WindowSize \| undefined`](../../doc/models/window-size.md) | Optional | Specify the challenge window size (width x height) that the issuer should use. This is to better tailor the experience to the customers device. Default is 390x400.<br><br>**Default**: `WindowSize.Enum390X400` |
| `preference` | [`Preference \| undefined`](../../doc/models/preference.md) | Optional | Set a preference for how the Issuer decides on a 3DS challenge. `challengeMandated` will be automatically set by verified payments for the first CIT payment in an MIT series or when storing cards (token creation). |
| `returnUrl` | `string` | Required | Once the customer completes the challenge page the issuer redirects/posts to the returnUrl in order for you to resume the session. It must be the  full URL path |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "windowSize": "390x400",
  "preference": "challengeMandated",
  "returnUrl": "returnUrl6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

