# Self Photos Website - Repository Context for AI Agents

This document provides comprehensive repository context for AI agents (automated tools, CI/CD, code analysis bots) working with the Self Photos website codebase.

## Repository Metadata

**Repository**: SelfPhotos/website  
**Primary Branch**: main  
**Production Branch**: dist (auto-deployed)  
**Production URL**: https://aikanxiangce.com  
**License**: Not specified  
**Language**: TypeScript (Vue 3 SFC)  
**Package Manager**: npm  

## Technology Stack

### Core Framework
- **Vue**: 3.5.18 (Composition API with `<script setup>`)
- **TypeScript**: 5.8.0 (strict mode)
- **Vite**: 7.0.6 (build tool + dev server)
- **Node.js**: ^20.19.0 || >=22.12.0

### Key Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| vue-router | 4.5.1 | Client-side routing |
| pinia | 3.0.3 | State management |
| vue-i18n | 11.1.11 | Internationalization |
| tailwindcss | 4.1.12 | CSS framework |
| @headlessui/vue | 1.7.23 | Accessible UI components |
| @heroicons/vue | 2.2.0 | Icon library |

### Dev Dependencies
- vue-tsc (3.0.4) - Vue-aware TypeScript compiler
- @vitejs/plugin-vue (6.0.1) - Vite Vue plugin
- vite-plugin-vue-devtools (8.0.0) - Vue DevTools integration

## Project Structure

```
website/
├── .github/
│   └── workflows/
│       └── build.yml          # CI/CD pipeline
├── public/                     # Static assets (favicon, robots.txt, sitemap)
│   ├── assets/                # Public images
│   └── robots.txt, sitemap.xml
├── src/                        # Source code (~2,584 lines)
│   ├── assets/                # Images, CSS, fonts
│   │   ├── css/style.css      # Global styles
│   │   └── images/            # Image assets
│   ├── components/            # Reusable components
│   ├── config/                # Configuration
│   │   └── url.ts             # External URLs, versions
│   ├── layout/                # Layout components
│   │   ├── HeaderCom.vue      # Site header with navigation
│   │   └── FooterCom.vue      # Site footer with links
│   ├── locales/               # Internationalization
│   │   ├── index.ts           # i18n setup
│   │   └── lang/
│   │       ├── zh-CN.ts       # Chinese translations
│   │       └── en-US.ts       # English translations
│   ├── pages/                 # Route pages
│   │   ├── Home.vue           # Landing page
│   │   ├── Download.vue       # Downloads page
│   │   ├── Releases.vue       # Release notes
│   │   ├── Faq.vue            # FAQ page
│   │   ├── Terms.vue          # Terms of Service
│   │   └── Privacy.vue        # Privacy Policy
│   ├── router/
│   │   └── index.ts           # Route definitions
│   ├── stores/
│   │   └── appStore.ts        # Global Pinia store
│   ├── types/
│   │   └── enums.ts           # TypeScript enums
│   ├── utils/
│   │   └── common.ts          # Utility functions
│   ├── App.vue                # Root component
│   └── main.ts                # Application entry
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
├── tsconfig.app.json          # App-specific TS config
├── tsconfig.node.json         # Node-specific TS config
└── env.d.ts                   # Environment type definitions
```

## Build System

### NPM Scripts

```json
{
  "dev": "vite",                                    // Dev server
  "build": "run-p type-check \"build-only {@}\" --", // Type-check + build
  "preview": "vite preview",                        // Preview production build
  "build-only": "vite build",                       // Build without type-check
  "type-check": "vue-tsc --build"                   // TypeScript validation
}
```

### Build Process

1. **Type Checking**: `vue-tsc --build` validates all TypeScript
2. **Build**: Vite bundles application to `dist/`
3. **Output**: Optimized static files in `dist/`

### Vite Configuration

**File**: `vite.config.ts`

```typescript
{
  plugins: [
    vue(),           // Vue 3 SFC support
    vueDevTools(),   // Vue DevTools integration
    tailwindcss()    // Tailwind CSS v4
  ],
  resolve: {
    alias: {
      '@': './src'   // Path alias
    }
  },
  server: {
    host: '0.0.0.0'  // Accessible via LAN
  }
}
```

## CI/CD Pipeline

### GitHub Actions Workflow

**File**: `.github/workflows/build.yml`

**Trigger**: Push to `main` branch

**Steps**:
1. **Checkout**: Clone repository
2. **Setup Node**: Install Node.js 22.13.1
3. **Install**: `npm install`
4. **Build**: `npm run build` (type-check + vite build)
5. **Deploy**: 
   - Create/switch to orphan `dist` branch
   - Copy built files from `dist/` to root
   - Commit and force push to `dist` branch
6. **Webhook**: Trigger production server update

**Deployment Target**: https://aikanxiangce.com

**Git Config**:
- User: chocolate-11
- Email: 821655475@qq.com

### Deployment Flow

```
Developer Push to main
    ↓
GitHub Actions Build
    ↓
dist/ folder created
    ↓
Deployed to dist branch
    ↓
Webhook to production server
    ↓
Live on aikanxiangce.com
```

## Code Standards

### TypeScript

- **Mode**: Strict
- **Target**: ES2020+
- **Module**: ESNext
- **Compiler**: vue-tsc (Vue-aware)
- **Type Imports**: Use `import type { }` for types

### Vue Components

**Required Pattern**:
```vue
<script setup lang="ts">
// Imports
import { ref, computed, onMounted } from 'vue'
import type { ComponentProps } from '@/types'

// Props (if any)
interface Props {
  title: string
}
const props = defineProps<Props>()

// Reactive state
const state = ref('')

// Lifecycle
onMounted(() => {
  // Init
})
</script>

<template>
  <div class="...">
    <!-- Template -->
  </div>
</template>
```

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `HeaderCom.vue` |
| Pages | PascalCase | `Home.vue` |
| Utils | camelCase | `common.ts` |
| Types/Interfaces | PascalCase | `LanguageKind` |
| Constants | UPPER_SNAKE_CASE | `DESKTOP_VERSION` |

### Import Rules

- Use `@/` alias for src imports
- Group imports: Vue → Libraries → Local
- Use `import type` for type-only imports

## Internationalization

### Structure

**Files**:
- `src/locales/lang/zh-CN.ts` - Chinese (default)
- `src/locales/lang/en-US.ts` - English

**Format**:
```typescript
export default {
  message: {
    app: { name: "..." },
    router: { ... },
    home: { ... },
    download: { ... },
    // ... nested structure
  }
}
```

**Usage in Templates**:
```vue
{{ $t('message.app.name') }}
```

**Usage in Script**:
```typescript
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const text = t('message.key')
```

### Language Switching

- Managed in `appStore.language`
- Values: `LanguageKind.zh` or `LanguageKind.en`
- Persisted across sessions

## Routing

### Route Configuration

**File**: `src/router/index.ts`

| Path | Component | Name | Purpose |
|------|-----------|------|---------|
| `/` | Home.vue | home | Landing page |
| `/download` | Download.vue | download | Download page |
| `/releases` | Releases.vue | releases | Version history |
| `/faq` | Faq.vue | faq | FAQ |
| `/terms` | Terms.vue | terms | Terms of Service |
| `/privacy` | Privacy.vue | privacy | Privacy Policy |

### Navigation

- **History Mode**: `createWebHistory()`
- **Base URL**: `import.meta.env.BASE_URL`
- **Before Each**: Sets page title based on route + language

## State Management

### Pinia Store

**File**: `src/stores/appStore.ts`

**Purpose**: Global application state

**State**:
- `language`: Current UI language (zh-CN | en-US)

**Usage**:
```typescript
import { useAppStore } from '@/stores/appStore'
const appStore = useAppStore()
const lang = appStore.language
```

## Styling

### Tailwind CSS

- **Version**: 4.1.12 (latest)
- **Plugin**: `@tailwindcss/vite`
- **Config**: Embedded in `vite.config.ts`
- **No config file**: Uses defaults + JIT

### Styling Patterns

**Layout**:
```html
<div class="container mx-auto px-6">
```

**Responsive**:
```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

**Buttons**:
```html
<button class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
```

**Typography**:
```html
<h1 class="text-4xl font-bold text-gray-900">
```

## External Configuration

### External URLs

- GitHub: `https://github.com/SelfPhotos/SelfPhotos`
- Discord: Community server
- YouTube, Bilibili, X: Social media
- Download URLs: GitHub releases + Tencent Cloud CDN

### Download URLs

- **Windows**: `SelfPhotos_{VERSION}_x64.msi`
- **macOS**: `SelfPhotos_{VERSION}_aarch64.dmg`
- **Android**: `SelfPhotos_{VERSION}.apk`
- **Sources**: GitHub releases, Tencent Cloud CDN

## Testing & Quality

### Type Checking

- **Command**: `npm run type-check`
- **Tool**: vue-tsc
- **Required**: Before all builds (enforced in CI)

### No Unit Tests

- Currently no Jest/Vitest setup
- No E2E tests
- Quality ensured via:
  - TypeScript strict mode
  - Manual testing
  - Type checking in CI

### Code Quality Checks

1. TypeScript compilation
2. Vite build success
3. Manual browser testing (dev server)

## Environment

### Node Requirements

- **Development**: Node.js ^20.19.0 || >=22.12.0
- **CI/CD**: Node.js 22.13.1
- **Package Manager**: npm (lockfile v3)

### Browser Support

- Modern browsers (ES2020+)
- Chrome, Firefox, Safari, Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Assets & Resources

### Images

- **Location**: `src/assets/images/`
- **Public**: `public/assets/`
- **Logos**: SVG format preferred
- **Icons**: Use Heroicons library

### Fonts

- **Custom**: "Pacifico" (for branding)
- **System**: Default sans-serif stack

## Common Tasks for Agents

### Code Analysis

1. Check TypeScript types: `npm run type-check`
2. Verify build: `npm run build`
3. Lint imports for `@/` usage
4. Check i18n completeness (zh-CN + en-US)

### Automated Fixes

1. **Missing Translations**: Add to both language files
2. **Type Errors**: Add proper TypeScript types
3. **Import Issues**: Convert to `@/` alias
4. **Style Issues**: Convert to Tailwind classes

### Code Generation

1. **New Page**: Component + Route + Translations
2. **New Component**: Vue SFC with TypeScript
3. **New Utility**: TypeScript function with types
4. **New Store**: Pinia store module

### Documentation

1. **Code Comments**: JSDoc for complex functions
2. **README Updates**: Keep documentation current
3. **Changelog**: Update for version changes

## Security Considerations

### No Sensitive Data

- No API keys in code
- No credentials committed
- Environment variables for secrets (if needed)

### External Links

- All external links use `rel="noopener"`
- Window.open handled via utility function
- No inline JavaScript in HTML

## Performance

### Build Output

- **Size**: Optimized with Vite (code splitting)
- **Format**: ES modules
- **Minification**: Enabled in production

### Runtime

- **Lazy Loading**: Route-based code splitting
- **Images**: Optimized assets
- **CSS**: Single Tailwind bundle (purged)

## Debugging

### Development

- **Dev Server**: http://0.0.0.0:5173
- **Vue DevTools**: Enabled via plugin
- **HMR**: Hot Module Replacement active
- **Source Maps**: Available in dev mode

### Production

- **Build Errors**: Check `npm run type-check` first
- **Runtime Errors**: Check browser console
- **Deploy Issues**: Review GitHub Actions logs

## Maintenance

### Dependencies

- Update regularly via `npm update`
- Check for breaking changes in major versions
- Test after updates: `npm run build`

### Version Updates

1. Update version in `src/config/url.ts`
2. Update download URLs
3. Update release notes in `Releases.vue`
4. Update translations if needed

## Agent Integration Points

### Pre-commit Hooks (recommended)

- Run `npm run type-check`
- Verify i18n completeness
- Check for console.log removal

### PR Validation

- Build succeeds
- Type checking passes
- No TypeScript errors
- Translations complete

### Auto-deployment

- Triggered on `main` push
- Builds to `dist` branch
- Webhooks to production

## Contact & Resources

- **GitHub**: https://github.com/SelfPhotos/website
- **Production**: https://aikanxiangce.com
- **Main Project**: https://github.com/SelfPhotos/SelfPhotos
