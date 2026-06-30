<div align="center">
  <h1>Avenue <br> Open Source Marketplace Platform</h1>
</div>

# What is Avenue?

Avenue is the first truly limitless open source marketplace platform that combines the simplicity of SaaS with the freedom of open source. Built on MedusaJS, it empowers businesses to create custom marketplaces without choosing between ownership and ease of use.

Avenue is a platform to start, customize, manage, and scale your marketplace for every business model with a modern technology stack.

## What's new in Avenue 2.0

**Avenue 2.0** is a major rearchitecture of the platform built by vholik, Si3r4dz, and gtomaka.

- **Block-based architecture** — reusable modules, workflows, API routes, and UI extensions installable via CLI
- **Vendor portal** — a standalone React-based vendor dashboard
- **Dashboard SDK** — Vite plugin with file-based routing and hot module reloading
- **CLI** — `@avenuejs/cli` for scaffolding projects, adding blocks, and managing registries
- **Full code ownership** — code is copied into your project, no black-box dependencies

## Using with AI Agents

Avenue is built to be AI-agent friendly. Your AI coding assistant can use these resources to understand and work with Avenue projects:

- **MCP Server** — connect your agent for documentation search via the docs MCP integration
- **llms.txt** — machine-readable project summary (served from the documentation site)
- **AGENTS.md**: included in every project created with `avenuejs create` — gives agents instant project context
- **Skills**: `.claude/skills/` shipped with templates — domain-specific patterns for Claude Code
- **AI Development Guide** — MCP and AI development topics in the documentation

## Why Choose Avenue?

- Full Ownership: Unlike SaaS platforms, you own your marketplace with no transaction fees or vendor lock-in
- Modern Foundation: Built on MedusaJS, offering a modern tech stack that developers love
- Beautiful by Default: Create stunning storefronts without sacrificing customization

## Power Any Marketplace Model

- Custom B2B Marketplace: Build enterprise-grade platforms with specialized workflows
- Custom B2C Marketplace: Create engaging consumer marketplaces with modern UX
- eCommerce Extension: Transform your store into a marketplace (coming soon)

# Ready-to-go marketplace features

**Storefronts for Marketplace**  
Customizable storefronts designed for B2B and B2C with all elements including browsing and buying products across multiple vendors at once.

Discover the B2C Storefront repository and its demo from the project documentation.

**Admin Panel**  
Control over whole marketplace: setting product categories, vendors, commissions and rules

**Vendor Panel**  
A powerful dashboard giving sellers complete control over their products, orders, and store management in one intuitive interface.

Discover the Vendor Panel and how to request a demo from the project documentation.

**Integrations**  
Built-in integration with Stripe for payments and Resend for communication needs. More integrations coming soon.

## Quickstart

**Step 1**: Create a new Avenue project and start the development server:

```bash
bunx @avenuejs/cli@latest create my-marketplace
```

**Step 2**: Start the development server:

```bash
cd my-marketplace
bun run dev
```

**Step 3**: Access your marketplace:

- Backend API: default port `9000`
- Admin Panel: default port `7000`
- Vendor Panel: default port `7001`

## Prerequisites

- Node.js v20 or newer
- PostgreSQL
- Redis
- Git CLI
