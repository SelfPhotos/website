# Self Photos Website - Repository Context for Claude AI

This document provides context about the Self Photos website repository for Claude AI to better understand and assist with development tasks.

## Project Overview

**Project Name**: Self Photos Website  
**Type**: Marketing/Documentation Website  
**Purpose**: Official website for Self Photos - a self-hosted photo management software  
**Technology Stack**: Vue 3 + TypeScript + Vite + Tailwind CSS  
**Target Audience**: Users looking for Google Photos alternative with local storage

## Repository Structure

```
website/
├── src/                    # Source code (2,584 lines)
│   ├── assets/            # Static assets (images, CSS)
│   ├── components/        # Reusable Vue components
│   ├── config/            # Configuration files (URLs, constants)
│   ├── layout/            # Layout components (Header, Footer)
│   ├── locales/           # i18n translations (zh-CN, en-US)
│   ├── pages/             # Page components (Home, Download, FAQ, etc.)
│   ├── router/            # Vue Router configuration
│   ├── stores/            # Pinia state management
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.vue            # Root component
│   └── main.ts            # Application entry point
├── public/                # Static public assets
├── .github/workflows/     # CI/CD pipelines
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## Key Technologies

- **Vue 3.5.18**: Using Composition API with `<script setup>` syntax
- **TypeScript 5.8.0**: Strict type checking enabled
- **Vite 7.0.6**: Build tool and dev server
- **Vue Router 4.5.1**: Client-side routing (6 routes)
- **Pinia 3.0.3**: State management
- **Vue I18n 11.1.11**: Internationalization (Chinese/English)
- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **Headless UI**: Accessible component primitives
- **Heroicons**: Icon library

## Development Workflow

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
# Runs on http://0.0.0.0:5173 (accessible via LAN)
```

### Build
```bash
npm run build
# Runs type-check + build-only
# Output: dist/
```

### Type Checking
```bash
npm run type-check
# Uses vue-tsc for Vue-aware TypeScript checking
```

### Preview Production Build
```bash
npm run preview
```

## Routes & Pages

1. `/` - Home (landing page with features)
2. `/download` - Download page for different platforms
3. `/releases` - Release notes and changelog
4. `/faq` - Frequently Asked Questions
5. `/terms` - Terms of Service
6. `/privacy` - Privacy Policy

## Internationalization

- **Default Language**: Chinese (zh-CN)
- **Supported Languages**: Chinese, English
- **Translation Files**: `src/locales/lang/zh-CN.ts`, `src/locales/lang/en-US.ts`
- **Usage**: All user-facing text uses `$t()` helper from vue-i18n

## State Management

- **Store**: `src/stores/appStore.ts`
- **Purpose**: Manages global app state (language preference, etc.)
- **Access**: `const appStore = useAppStore()`

## Styling Approach

- **Framework**: Tailwind CSS v4 (latest)
- **Configuration**: Uses `@tailwindcss/vite` plugin
- **Responsive**: Mobile-first approach with breakpoints
- **Theme**: Custom font family "Pacifico" for branding

## CI/CD Pipeline

**File**: `.github/workflows/build.yml`

**Trigger**: Push to `main` branch

**Steps**:
1. Checkout code
2. Setup Node.js 22.13.1
3. Install dependencies (`npm install`)
4. Build project (`npm run build`)
5. Deploy to `dist` branch (orphan branch)
6. Trigger webhook to production server

**Production**: https://aikanxiangce.com

## Code Conventions

### Vue Components
- Use `<script setup lang="ts">` syntax
- Composition API preferred
- Props/emits with TypeScript types
- Component naming: PascalCase for files

### TypeScript
- Strict mode enabled
- Explicit return types for functions
- Interface over type for object shapes
- Enums in `src/types/enums.ts`

### File Naming
- Components: PascalCase (e.g., `HeaderCom.vue`)
- Utilities: camelCase (e.g., `common.ts`)
- Pages: PascalCase (e.g., `Home.vue`)

### Import Aliases
- `@/` maps to `src/` directory
- Example: `import { useAppStore } from '@/stores/appStore'`

## External URLs & Config

Defined in `src/config/url.ts`:
- Discord, YouTube, X (Twitter), GitHub, Bilibili links
- Desktop version: 0.4.2
- Android version: 0.1.0
- Download URLs (GitHub releases, Tencent Cloud CDN)

## Common Tasks for AI Assistance

### Adding New Page
1. Create component in `src/pages/`
2. Add route in `src/router/index.ts`
3. Add translations in `src/locales/lang/*.ts`
4. Update navigation in `src/layout/HeaderCom.vue`

### Adding Translations
1. Add key in `src/locales/lang/zh-CN.ts`
2. Add corresponding English in `src/locales/lang/en-US.ts`
3. Use in component: `{{ $t('message.key.name') }}`

### Creating New Component
1. Create `.vue` file in appropriate directory
2. Use `<script setup lang="ts">` syntax
3. Import necessary composables/utilities
4. Apply Tailwind classes for styling

### Updating External Links
1. Modify `src/config/url.ts`
2. Update version numbers as needed
3. Links automatically update across site

## Testing

**Current State**: No automated tests configured
**Type Checking**: Enforced via `npm run type-check` before build
**Manual Testing**: Test in dev server with hot reload

## Node Version Requirements

- **Required**: Node.js ^20.19.0 || >=22.12.0
- **CI/CD Uses**: 22.13.1

## Important Notes for AI

1. **Bilingual Support**: Always provide translations when adding user-facing text
2. **Type Safety**: Ensure TypeScript types are properly defined
3. **Responsive Design**: Test on mobile and desktop viewports
4. **Build Verification**: Run `npm run build` to verify changes compile
5. **Production Deployment**: Changes to `main` branch auto-deploy via CI/CD
