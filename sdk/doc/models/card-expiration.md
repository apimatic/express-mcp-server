
# Card Expiration

Information about the expiration date for the card.

## Structure

`CardExpiration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `number` | Required | Calendar month that the card expires.<br><br>**Constraints**: `>= 1`, `<= 12` |
| `year` | `number` | Required | Calendar year that the card expires.<br><br>**Constraints**: `>= 0`, `<= 99` |

## Example (as JSON)

```json
{
  "month": 12,
  "year": 18
}
```

