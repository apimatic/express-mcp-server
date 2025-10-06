
# Retrieval Soft Pos Instrument

SoftPOS instrument data for retrieval payloads.

## Structure

`RetrievalSoftPosInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `softPosId` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |

## Example (as JSON)

```json
{
  "type": "type8",
  "softPosId": "softPosId4"
}
```

