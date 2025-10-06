#!/usr/bin/env node
import { executeMcpServerCli } from "@apimatic/mcp-core";
import * as sdkMetadata from "express-payments-apilib/metadata";

await executeMcpServerCli(
  sdkMetadata,
  {
  "name": "Express Payments APILib MCP Server",
  "description": "The Express Payments API is a single, streamlined RESTful gateway for integrating fast, secure, and reliable credit card payments into your point-of-sale (POS) or ecommerce platform."
}
);