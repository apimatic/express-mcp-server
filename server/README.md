# Express Payments APILib MCP Server

The Express Payments API is a single, streamlined RESTful gateway for integrating fast, secure, and reliable credit card payments into your point-of-sale (POS) or ecommerce platform.


## Quick Start

To run the MCP server using `node`, use the following command:

```bash
cd server
node ./cli.js
```            

Flags:
-  --port <number>, -p : Port to run the http server on
-  --transport <string>, -t : Transport (http | stdio)
-  --toolsets <items> : Comma-separated list of toolsets. By default, all toolsets are included.

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
         "[YOUR-PATH-HERE]/server/server/cli.js"
        "--transport",
        "stdio"
      ],
      "env": {
        "EXPRESS_PAYMENTS_API_LIB_ENVIRONMENT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "EXPRESS_PAYMENTS_API_LIB_TIMEOUT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "EXPRESS_PAYMENTS_API_LIB_AUTHORIZATION": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
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
         "[YOUR-PATH-HERE]/server/server/cli.js"
        "--transport",
        "stdio"
      ],
      "env": {
        "EXPRESS_PAYMENTS_API_LIB_ENVIRONMENT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "EXPRESS_PAYMENTS_API_LIB_TIMEOUT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "EXPRESS_PAYMENTS_API_LIB_AUTHORIZATION": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
      }
    }
  }
}
```

          
## Environment Variables

The MCP server uses the following environment variables:

- `EXPRESS_PAYMENTS_API_LIB_ENVIRONMENT`: Optional environment variable that must be one of the allowed enum values (production, certification). Default: `production`.
- `EXPRESS_PAYMENTS_API_LIB_TIMEOUT`: Timeout for API calls. Optional string variable. Default: `30000`.
- `EXPRESS_PAYMENTS_API_LIB_AUTHORIZATION`: Required string variable.

## Available Toolsets

- **Payments**
- **Scheduled payments management**
- **Client Management**
