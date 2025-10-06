
# Mode

When to request 3DS authentication. Always, when SCA is mandated or only for soft declines.

|  |  |
|-----|-----|
| always   | Attempt 3DS for every request |
| scaMandatedOnly   |  Only attempt 3DS for issuer countries in the EEA where SCA applies   |
| softDeclinesOnly   | Attempt 3DS following a soft decline from payment authorization  |
| customRules   | Attempt 3DS based on rules configured |

## Enumeration

`Mode`

## Fields

| Name |
|  --- |
| `Always` |
| `ScaMandatedOnly` |
| `SoftDeclineOnly` |
| `CustomRules` |

## Example

```
scaMandatedOnly
```

