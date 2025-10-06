
# Moto Device

Information about the device used to accept the payment

## Structure

`MotoDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `laneNumber` | `string \| undefined` | Optional | Lane/Register Number<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `serialNumber` | `string \| undefined` | Optional | Serial Number (S/N) of the device/terminal.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `model` | `string \| undefined` | Optional | Model number of the device/terminal.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |

## Example (as JSON)

```json
{
  "laneNumber": "laneNumber0",
  "serialNumber": "serialNumber4",
  "model": "model0"
}
```

