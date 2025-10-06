
# Soft Pos Instrument

Card-present entry method using a contactless 'Soft POS' device for credit or debit (example: Apple Tap to Pay), when Worldpay is the PSP

## Structure

`SoftPosInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `emvTlvData` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `encryptedSoftPosData` | `string` | Required | Base-64 encoded string of encrypted data read from the Soft POS device, resulting from the contactless payment attempt.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25000` |

## Example (as JSON)

```json
{
  "type": "type8",
  "emvTlvData": "emvTlvData4",
  "encryptedSoftPosData": "encryptedSoftPosData0"
}
```

