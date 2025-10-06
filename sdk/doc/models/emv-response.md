
# Emv Response

Issuer specific data returned for an EMV transaction.

## Structure

`EmvResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issuerAuthenticationData` | `string \| undefined` | Optional | - |
| `issuerScriptData` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "issuerAuthenticationData": "issuerAuthenticationData4",
  "issuerScriptData": "issuerScriptData0"
}
```

