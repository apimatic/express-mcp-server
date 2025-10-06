
# Swiped Clear Instrument

Clear card data entered via a swipe

## Structure

`SwipedClearInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `trackData` | [`TrackDataClear`](../../doc/models/track-data-clear.md) | Required | One of the track data fields must be provided, track2 is recommended. |
| `pinData` | [`PinData \| undefined`](../../doc/models/pin-data.md) | Optional | Security code usually associated with a debit card. |
| `fallbackReasonCode` | [`SwipedFallbackReasonCode \| undefined`](../../doc/models/swiped-fallback-reason-code.md) | Optional | Provides more information about why a lower capability entry mode was used. Do not supply if no EMV fallback occurred. |

## Example (as JSON)

```json
{
  "type": "type2",
  "trackData": {
    "track1": "track12",
    "track2": "track26",
    "track3": "track38"
  },
  "pinData": {
    "pinBlock": "pinBlock6",
    "keySerialNumber": "keySerialNumber0"
  },
  "fallbackReasonCode": "magstripeReadChipReadFailure"
}
```

