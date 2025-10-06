
# Encrypted Keyed Instrument

Encrypted Information about the card being used.

## Structure

`EncryptedKeyedInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `encryptedCardData` | [`PlainCardDataEncrypted`](../../doc/models/plain-card-data-encrypted.md) | Required | Encrypted Information about the card being used. |

## Example (as JSON)

```json
{
  "type": "type2",
  "encryptedCardData": {
    "keySerialNumber": "keySerialNumber8",
    "encryptedFormat": "magtekEmulated",
    "encryptedData": "encryptedData4"
  }
}
```

