
# Emv Encrypted Data

Objects supporting the transmission of encrypted EMV TLV tags

## Structure

`EmvEncryptedData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keySerialNumber` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `encryptedFormat` | [`EmvEncryptedFormat`](../../doc/models/emv-encrypted-format.md) | Required | Device manufacturer and family-specific encryption format for card present transactions |
| `encryptedEmvTlvData` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500` |

## Example (as JSON)

```json
{
  "keySerialNumber": "keySerialNumber0",
  "encryptedFormat": "ingenicoRba",
  "encryptedEmvTlvData": "encryptedEmvTlvData6"
}
```

