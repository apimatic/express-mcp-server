
# Swiped Clear Pinless Instrument

Clear card data without a PIN entered via a swipe

## Structure

`SwipedClearPinlessInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `trackData` | [`TrackDataClear`](../../doc/models/track-data-clear.md) | Required | One of the track data fields must be provided, track2 is recommended. |

## Example (as JSON)

```json
{
  "type": "type0",
  "trackData": {
    "track1": "track12",
    "track2": "track26",
    "track3": "track38"
  }
}
```

