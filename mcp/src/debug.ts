import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Honcho } from "@honcho-ai/sdk";

console.log("1. Starting...");

const honcho = new Honcho({
  apiKey: "not-needed",
  baseURL: "http://honcho-api:8000",
  workspaceId: "default",
});
console.log("2. Created honcho client");

const server = new McpServer(
  { name: "honcho-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } },
);
console.log("3. Created server");

const transport = new StdioServerTransport();
console.log("4. Created transport");

console.log("5. About to connect...");
await server.connect(transport);
console.log("6. Connected - server ready");
