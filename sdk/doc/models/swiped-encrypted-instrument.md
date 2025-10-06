
# Swiped Encrypted Instrument

Use either TrackData or EncryptedTrackData (when using P2PE)

## Structure

`SwipedEncryptedInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `encryptedTrackData` | [`TrackDataEncrypted`](../../doc/models/track-data-encrypted.md) | Required | One of the encrypted track data fields must be provided, encrypted track2 is recommended. |
| `pinData` | [`PinData \| undefined`](../../doc/models/pin-data.md) | Optional | Security code usually associated with a debit card. |
| `fallbackReasonCode` | [`SwipedFallbackReasonCode \| undefined`](../../doc/models/swiped-fallback-reason-code.md) | Optional | Provides more information about why a lower capability entry mode was used. Do not supply if no EMV fallback occurred. |

## Example (as JSON)

```json
{
  "type": "type0",
  "encryptedTrackData": {
    "keySerialNumber": "keySerialNumber2",
    "encryptedFormat": "bbPosChipper",
    "encryptedTrack1Data": "encryptedTrack1Data8",
    "encryptedTrack2Data": "encryptedTrack2Data2"
  },
  "pinData": {
    "pinBlock": "pinBlock6",
    "keySerialNumber": "keySerialNumber0"
  },
  "fallbackReasonCode": "magstripeReadChipReadFailure"
}
```

