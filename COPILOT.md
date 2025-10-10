# GitHub Copilot Usage Guide

This document explains how to effectively use GitHub Copilot in the Self Photos project.

## Introduction

GitHub Copilot is an AI programming assistant that integrates directly into your code editor, providing real-time code suggestions and auto-completion.

## Configuration

### VS Code Setup

1. Install the GitHub Copilot extension
2. Sign in to your GitHub account
3. Adjust Copilot settings as needed

### Recommended Configuration

```json
{
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "markdown": true,
    "vue": true,
    "typescript": true
  }
}
```

## Features

### 1. Code Auto-Completion

- **Inline Suggestions**: Real-time code suggestions as you type
- **Multi-line Completion**: Generate complete functions or components based on context
- **Smart Recognition**: Understand project structure and coding style

### 2. Comment to Code

By writing clear comments, Copilot can generate corresponding implementation code:

```typescript
// Create a date formatting function that receives an ISO string and returns YYYY-MM-DD format
// Copilot will generate the corresponding function implementation based on the comment
```

### 3. Test Case Generation

- Generate unit tests for existing functions
- Create boundary condition tests
- Generate integration test scenarios

## Best Practices

### Writing Effective Prompts

1. **Use Descriptive Comments**: Clearly explain the expected functionality
2. **Provide Type Information**: Define explicit types in TypeScript
3. **Follow Naming Conventions**: Use meaningful variable and function names

### Code Review

- Always review Copilot-generated code
- Ensure code complies with project standards
- Verify code correctness and security

### Improving Efficiency

1. **Keyboard Shortcuts**:
   - `Tab`: Accept suggestion
   - `Esc`: Reject suggestion
   - `Alt + ]`: Next suggestion
   - `Alt + [`: Previous suggestion

2. **Context Optimization**:
   - Keep related files open in the editor
   - Use descriptive variable names
   - Write clear function signatures

## Project-Specific Applications

### Vue 3 Component Development

Copilot can help quickly generate:
- Component template structure
- Composition API logic
- Props and Emits definitions
- Reactive state management

### TypeScript Development

- Auto-generate type definitions
- Interfaces and type guards
- Generic function implementations

### Style Development

- Tailwind CSS class suggestions
- Responsive design code
- Animation and transition effects

## Common Scenarios

### 1. Creating New Components

```vue
<!-- Type component basic structure, Copilot will provide complete template, script, and style suggestions -->
<script setup lang="ts">
// Copilot will suggest appropriate imports and logic based on component name and purpose
</script>
```

### 2. API Integration

```typescript
// Copilot can help generate API calls, error handling, and data transformation code
```

### 3. Internationalization Support

```typescript
// Copilot recognizes the project's i18n structure and suggests correct translation keys
```

## Important Notes

1. **Code Quality**: Don't completely rely on Copilot, maintain code review habits
2. **Security**: Avoid exposing sensitive information in code
3. **License**: Understand the license implications of Copilot-generated code
4. **Privacy**: Note that Copilot sends code snippets to servers for analysis

## Performance Optimization Tips

- Disable unnecessary language support to improve response speed
- Regularly update the Copilot extension
- Appropriately limit suggestion scope in large files

## Troubleshooting

### Copilot Not Responding

1. Check network connection
2. Restart VS Code
3. Re-login to GitHub account

### Poor Suggestion Quality

1. Provide more context
2. Use clearer naming
3. Add descriptive comments

## Related Resources

- [GitHub Copilot Official Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Claude AI Usage Guide](./CLAUDE.md)
- [AI Agents Usage Guide](./AGENTS.md)
