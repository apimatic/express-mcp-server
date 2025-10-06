
# Fraud Result

Results of an optional Fraud Check.

## Structure

`FraudResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `riskStatus` | `number \| undefined` | Optional | If requested, the current risk status from Merchant Fraudsight will be returned.<br><br><br>**Possible Values:**  <br>\| Value \| Description \|<br>\| ----- \| ------------\|<br>\| 0 \| Pass \|<br>\| 1 \| Review \|<br>\| 2 \| Fail \|<br>\| 3 \| Unknown \|<br>\| 4 \| Fail, informational only: Transaction approved \| |
| `riskScore` | `number \| undefined` | Optional | If requested, the current risk score from Merchant Fraudsight will be returned where the risk score is between 0.0000 and 1.0000.<br><br>**Constraints**: `>= 0`, `<= 1` |

## Example (as JSON)

```json
{
  "riskStatus": 196,
  "riskScore": 1.0
}
```

