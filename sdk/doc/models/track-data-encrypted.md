
# Track Data Encrypted

One of the encrypted track data fields must be provided, encrypted track2 is recommended.

## Structure

`TrackDataEncrypted`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keySerialNumber` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `encryptedFormat` | [`KeyedOrSwipedEncryptedFormat`](../../doc/models/keyed-or-swiped-encrypted-format.md) | Required | Device manufacturer and family-specific encryption format for card present transactions |
| `encryptedTrack1Data` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300` |
| `encryptedTrack2Data` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `200` |

## Example (as JSON)

```json
{
  "keySerialNumber": "keySerialNumber0",
  "encryptedFormat": "bbPosChipper",
  "encryptedTrack1Data": "encryptedTrack1Data6",
  "encryptedTrack2Data": "encryptedTrack2Data0"
}
```

