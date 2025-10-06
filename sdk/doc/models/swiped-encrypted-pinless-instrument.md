
# Swiped Encrypted Pinless Instrument

Use either TrackData or EncryptedTrackData (when using P2PE)

## Structure

`SwipedEncryptedPinlessInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `encryptedTrackData` | [`TrackDataEncrypted`](../../doc/models/track-data-encrypted.md) | Required | One of the encrypted track data fields must be provided, encrypted track2 is recommended. |

## Example (as JSON)

```json
{
  "type": "type6",
  "encryptedTrackData": {
    "keySerialNumber": "keySerialNumber2",
    "encryptedFormat": "bbPosChipper",
    "encryptedTrack1Data": "encryptedTrack1Data8",
    "encryptedTrack2Data": "encryptedTrack2Data2"
  }
}
```

