# Overview

This is a Telegram-based gaming web application that implements a case opening system similar to CS:GO cases. Users can open virtual cases to win prizes including virtual currency (re:coin), stars, and gifts. The application integrates with Telegram WebApp API and includes features like referral systems, daily cases, tasks/achievements, leaderboards, and promo codes. It uses a modern React frontend with Express.js backend and PostgreSQL database with Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom gaming-themed dark color scheme
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Mobile-First Design**: Responsive layout optimized for mobile devices and Telegram WebApp

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Hot reloading with Vite in development mode

## Database Layer
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM with type-safe queries and schema validation
- **Schema**: Relational design with users, cases, prizes, case openings, tasks, referrals, and promo codes
- **Migrations**: Drizzle Kit for schema migrations and database management

## Authentication & Authorization
- **Integration**: Telegram WebApp authentication using initDataUnsafe
- **User Management**: Automatic user creation on first login with Telegram user data
- **Admin System**: Role-based access control with admin flag in user table
- **Security**: Session-based authentication with secure cookie handling

## Core Game Mechanics
- **Case System**: Probability-based prize distribution with configurable case types and costs
- **Virtual Currency**: re:coin system for case purchases and rewards
- **Daily Cases**: Time-gated free cases with cooldown tracking
- **Referral System**: User-to-user referrals with automatic reward distribution
- **Task System**: Completable tasks with progress tracking and rewards
- **Leaderboards**: Real-time rankings by coins earned and cases opened

## File Organization
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Shared Schema**: Common TypeScript types and Zod validation schemas
- **Component Library**: Reusable UI components in shadcn/ui pattern
- **Asset Management**: Static assets served through Vite with alias resolution

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection pooling
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **express**: Web application framework for Node.js
- **@tanstack/react-query**: Server state management and caching

## UI Component Libraries
- **@radix-ui/react-***: Headless accessible UI primitives (dialogs, dropdowns, forms, etc.)
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe CSS class variants
- **tailwindcss**: Utility-first CSS framework

## Telegram Integration
- **node-telegram-bot-api**: Telegram Bot API wrapper for server-side bot functionality
- **Telegram WebApp API**: Client-side integration through window.Telegram object

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety and enhanced developer experience
- **zod**: Runtime type validation and schema parsing
- **wouter**: Minimalist router for React applications

## Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **ws**: WebSocket implementation for Neon database connections
- **nanoid**: Secure URL-friendly unique ID generator