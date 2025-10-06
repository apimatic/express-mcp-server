
# Plain Card Data Encrypted

Encrypted Information about the card being used.

## Structure

`PlainCardDataEncrypted`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keySerialNumber` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `encryptedFormat` | [`KeyedOrSwipedEncryptedFormat`](../../doc/models/keyed-or-swiped-encrypted-format.md) | Required | Device manufacturer and family-specific encryption format for card present transactions |
| `encryptedData` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `200` |

## Example (as JSON)

```json
{
  "keySerialNumber": "keySerialNumber8",
  "encryptedFormat": "verifoneVxVipa",
  "encryptedData": "encryptedData6"
}
```

