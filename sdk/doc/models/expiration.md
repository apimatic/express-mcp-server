
# Expiration

Information about the expiration date.

## Structure

`Expiration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `number` | Required | Calendar month of expiration.<br><br>**Constraints**: `>= 1`, `<= 12` |
| `year` | `number` | Required | Calendar year of expiration.<br><br>**Constraints**: `>= 0`, `<= 99` |

## Example (as JSON)

```json
{
  "month": 12,
  "year": 6
}
```

