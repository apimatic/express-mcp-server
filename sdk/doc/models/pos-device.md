
# Pos Device

Information about the device used to accept the payment

## Structure

`PosDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `laneNumber` | `string \| undefined` | Optional | Lane/Register Number<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `serialNumber` | `string \| undefined` | Optional | Serial Number (S/N) of the device/terminal.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `model` | `string \| undefined` | Optional | Model number of the device/terminal.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `capabilities` | [`DeviceCapabilities \| undefined`](../../doc/models/device-capabilities.md) | Optional | Indicates information the card read capabilities of the device |
| `environment` | [`DeviceEnvironment \| undefined`](../../doc/models/device-environment.md) | Optional | Environment in which the payment is being accepted. |

## Example (as JSON)

```json
{
  "laneNumber": "laneNumber4",
  "serialNumber": "serialNumber8",
  "model": "model4",
  "capabilities": "chipReader",
  "environment": "localSemiAttended"
}
```

