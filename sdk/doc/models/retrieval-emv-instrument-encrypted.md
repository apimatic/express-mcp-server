
# Retrieval Emv Instrument Encrypted

Encrypted EMV instrument data for retrieval payloads.

## Structure

`RetrievalEmvInstrumentEncrypted`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `cardInputCode` | [`EmvCardInputCode`](../../doc/models/emv-card-input-code.md) | Required | Provides more information about why the EMV Input Mode was used. |

## Example (as JSON)

```json
{
  "type": "type6",
  "cardInputCode": "chipRead"
}
```

