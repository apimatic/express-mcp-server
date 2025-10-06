# Express Payments APILib MCP Server

The Express Payments API is a single, streamlined RESTful gateway for integrating fast, secure, and reliable credit card payments into your point-of-sale (POS) or ecommerce platform.


## Quick Start

To run the MCP server using `node`, use the following command:

```bash
cd server
node ./cli.js
```            

Flags:

`--port <number>` , `-p` : Port to run the http server on

`--transport <string>` , `-t` : Transport (`http` | `stdio`)

`--toolsets <items>` : Comma-separated list of toolsets. By default, all toolsets are included.

## Installation Guide

### Prerequisites
Before you begin, ensure the following requirements are met:

- **Node.js**: Version **22** or higher  
  Check your version:
  ```bash
  node --version
  ```
- **MCP-Compatible Host**: A tool that supports MCP servers (remote or local `stdio`):
    - **VS Code** 1.101+            
    - **Claude Desktop** 
    - **Cursor**

You also need these for testing:
- An API Key
- AccountId
- AcceptorId (used as Merchant ID or Terminal ID)
- The Certification Environment


### Setup in Claude Desktop / Cursor

**Tutorials**

- [Claude Desktop MCP Setup Guide](https://modelcontextprotocol.io/quickstart/user)
- [Cursor MCP Setup Guide](https://cursor.com/docs/context/mcp)

After following the setup guides, add the MCP server configuration to your configuration file.

You need to fill in the parts that look `[LIKE-THIS]`.

**Example Configuration** (`claude_desktop_config.json`/`mcp.json`):
```json
{
  "mcpServers": {
    "express-payments-apilib-mcp-server": {
      "command": "node",
      "args": [
         "[YOUR-PATH-HERE]/server/server/cli.js",
        "--transport",
        "stdio"
      ],
      "env": {
        "EXPRESS_PAYMENTS_API_LIB_AUTHORIZATION": "Worldpay license=[YOUR-API-KEY-HERE]",
        "EXPRESS_PAYMENTS_API_LIB_ENVIRONMENT": "certification"
      }
    }
  }
}
```    

### Setup in VS Code

You can also configure the MCP server in VS Code. The setup is similar to Claude Desktop. See [the official docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-settings) for details.

**Example Configuration** (`settings.json`)
```json
{
  "servers": {
    "express-payments-apilib-mcp-server": {
      "type": "stdio",
      "command": "node",
      "args": [
         "[YOUR-PATH-HERE]/server/server/cli.js",
        "--transport",
        "stdio"
      ],
      "env": {
        "EXPRESS_PAYMENTS_API_LIB_AUTHORIZATION": "Worldpay license=[YOUR-API-KEY-HERE]",
        "EXPRESS_PAYMENTS_API_LIB_ENVIRONMENT": "certification"
      }
    }
  }
}
```

          
## Environment Variables

The MCP server uses the following environment variables:

- `EXPRESS_PAYMENTS_API_LIB_ENVIRONMENT`: Optional environment variable that must be one of the allowed enum values (`production`, `certification`). Default: `production`.
- `EXPRESS_PAYMENTS_API_LIB_TIMEOUT`: Timeout for API calls. Optional string variable. Default: `30000`.
- `EXPRESS_PAYMENTS_API_LIB_AUTHORIZATION`: The API Key. Format is "Worldpay license=xxxx". Required string variable.

## Example Prompt

### Create a Payment With Partial Capture
````
Please create a payment and capture half the amount.
The amount is 10 USD and the payment method is a card with these details:
Card Type: Discover
Number: 6011000990911111
Expiry: 12/2026
CVC: 111

Express Cert AccountID: [YOUR-ACCOUNT-ID-HERE]
Express Cert AcceptorID: [YOUR-ACCEPTOR-ID-HERE]

Here's an example request:
```
Headers:
  Accept: application/json
  Content-Type: application/json
  WP-Idempotency-Key: <unique-guid>
  WP-Api-Version: 1
  WP-AccountId: <account-id>
  Authorization: Worldpay license=xxxx

Body:
{
  "reference": "Memory265-13/08/1876",
  "merchant": {
    "id": "<acceptor-id>",
    "terminalId": "<acceptor-id>"
  },
  "channel": {
    "type": "ecom",
    "paymentMethod": {
      "type": "card",
      "instrument": {
        "type": "keyed/clear",
        "cardData": {
          "cardNumber": "<card-number>",
          "expiryDate": {
            "month": <month>,
            "year": <year>
          },
          "cvc": "<cvc>"
        }
      }
    }
  },
  "amount": {
    "currency": "USD",
    "value": 10
  }
}
```
````