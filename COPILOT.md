# Self Photos Website - Repository Context for GitHub Copilot

This document helps GitHub Copilot understand the Self Photos website codebase and provide better code suggestions.

## Quick Project Summary

**What**: Marketing website for Self Photos (self-hosted photo management software)  
**Stack**: Vue 3 + TypeScript + Vite + Tailwind CSS  
**Language**: Bilingual (Chinese/English) using vue-i18n  
**Lines of Code**: ~2,584 in src/

## Architecture Overview

### Frontend Framework
- **Vue 3.5.18** with Composition API (`<script setup>`)
- **TypeScript 5.8.0** with strict type checking
- **Vite 7.0.6** for build and dev server
- **Tailwind CSS 4.1.12** for styling

### Project Structure
```
src/
├── main.ts              # App entry, registers plugins (Pinia, Router, i18n)
├── App.vue              # Root component
├── router/index.ts      # Vue Router config (6 routes)
├── stores/appStore.ts   # Pinia store for global state
├── locales/             # i18n (zh-CN, en-US)
├── pages/               # Route components (Home, Download, FAQ, etc.)
├── layout/              # HeaderCom, FooterCom
├── config/url.ts        # External URLs and version constants
└── utils/common.ts      # Shared utilities
```

## Code Patterns & Conventions

### Vue Component Pattern
```typescript
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'

// Use Composition API
const appStore = useAppStore()
const someState = ref('')

onMounted(() => {
  // Initialization
})
</script>

<template>
  <!-- Tailwind CSS classes -->
  <div class="container mx-auto px-6">
    <!-- Use i18n for text -->
    <h1>{{ $t('message.key') }}</h1>
  </div>
</template>
```

### TypeScript Usage
- All `.vue` files use `lang="ts"` in script tags
- Props defined with TypeScript interfaces
- Strict null checks enabled
- Import path alias: `@/` → `src/`

### Styling Conventions
- **Tailwind CSS only** - no custom CSS files (except `style.css` for globals)
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Common classes: `container mx-auto px-6` for layout
- Custom font: `font-['Pacifico']` for branding

### Internationalization Pattern
```typescript
// In template
{{ $t('message.app.name') }}

// In script (use i18n composable if needed)
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
```

Translation structure in `locales/lang/*.ts`:
```typescript
export default {
  message: {
    app: { name: "..." },
    router: { ... },
    home: { ... },
    // ... etc
  }
}
```

## Common Code Snippets

### Pinia Store Access
```typescript
import { useAppStore } from '@/stores/appStore'
const appStore = useAppStore()
const language = appStore.language
```

### Router Navigation
```typescript
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/download')
```

### External Link Handling
```typescript
import { onWindowOpen } from '@/utils/common'
import { GITHUB_URL } from '@/config/url'

// In template
@click.prevent="onWindowOpen(GITHUB_URL)"
```

### Headless UI Components
```typescript
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
// Used for accessible dropdowns, modals, etc.
```

## File Naming & Organization

### Components
- **PascalCase**: `HeaderCom.vue`, `FooterCom.vue`
- **Suffix "Com"**: Used for layout components
- **Pages**: `Home.vue`, `Download.vue` (no suffix)

### Scripts
- **camelCase**: `common.ts`, `appStore.ts`
- **TypeScript**: All `.ts` files, no `.js`

### Imports
```typescript
// Always use @ alias
import Component from '@/components/Component.vue'
import { util } from '@/utils/common'
import type { Type } from '@/types/enums'
```

## Build & Scripts

### Available Commands
```bash
npm run dev        # Dev server on http://0.0.0.0:5173
npm run build      # Type-check + build to dist/
npm run preview    # Preview production build
npm run type-check # TypeScript validation
```

### Build Configuration
- **Vite Config**: `vite.config.ts`
  - Plugins: vue, vueDevTools, tailwindcss
  - Alias: `@` → `src/`
  - Server host: `0.0.0.0` (LAN accessible)

- **TypeScript**: `tsconfig.json`, `tsconfig.app.json`
  - Strict mode enabled
  - Vue-specific types from vue-tsc

## Dependencies

### Core
- vue (3.5.18)
- vue-router (4.5.1)
- pinia (3.0.3)
- vue-i18n (11.1.11)

### UI
- @headlessui/vue (1.7.23) - Accessible components
- @heroicons/vue (2.2.0) - Icon library
- tailwindcss (4.1.12) - Styling

### Build Tools
- vite (7.0.6)
- @vitejs/plugin-vue (6.0.1)
- vue-tsc (3.0.4) - Vue-aware TypeScript compiler
- typescript (5.8.0)

## Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home.vue | Landing page with features |
| `/download` | Download.vue | Platform-specific downloads |
| `/releases` | Releases.vue | Version history & changelogs |
| `/faq` | Faq.vue | Frequently asked questions |
| `/terms` | Terms.vue | Terms of Service |
| `/privacy` | Privacy.vue | Privacy Policy |

## State Management

### appStore (Pinia)
```typescript
// Location: src/stores/appStore.ts
interface AppStore {
  language: LanguageKind // 'zh-CN' | 'en-US'
  // Add more state as needed
}
```

## External Configuration

### Social/External Links
- GitHub: https://github.com/SelfPhotos/SelfPhotos
- Discord: Community link
- YouTube, Bilibili, X: Social media
- Download URLs: GitHub releases + Tencent CDN

## Development Tips for Copilot

1. **Always add i18n**: When adding user-facing text, add to both `zh-CN.ts` and `en-US.ts`
2. **Use Tailwind**: Prefer Tailwind classes over custom styles
3. **Type everything**: Use TypeScript types for props, emits, refs
4. **Composition API**: Use `<script setup>` pattern consistently
5. **Responsive**: Include mobile (`sm:`), tablet (`md:`), desktop (`lg:`) variants
6. **Icons**: Use `@heroicons/vue` for icons (solid/outline variants)

## Common Patterns to Recognize

### Page Layout
```vue
<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-6 py-12">
      <!-- Content -->
    </div>
  </div>
</template>
```

### Button Styles
```html
<button class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
  {{ $t('message.button.text') }}
</button>
```

### Grid Layouts
```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Cards -->
</div>
```

## CI/CD Context

- **Workflow**: `.github/workflows/build.yml`
- **Trigger**: Push to `main` branch
- **Process**: Build → Deploy to `dist` branch → Webhook to production
- **Production**: https://aikanxiangce.com
- **Node Version**: 22.13.1 in CI

## Testing

- **No unit tests** currently
- **Type checking**: Required before build (`npm run type-check`)
- **Manual testing**: Use dev server with hot reload

## When Making Changes

1. Check TypeScript types (`npm run type-check`)
2. Test both languages (toggle in UI or change `appStore.language`)
3. Verify responsive design (mobile, tablet, desktop)
4. Ensure build succeeds (`npm run build`)
5. Check that translations are complete
