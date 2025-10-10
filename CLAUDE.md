# Claude AI Usage Guide

This document provides best practices and reference guidelines for using Claude AI in the Self Photos project development.

## Introduction

Claude AI is a powerful AI assistant that can help developers with code writing, troubleshooting, documentation, and more.

## Primary Uses

### 1. Code Development

- **Code Generation**: Claude can generate Vue 3 components, TypeScript code, styles, etc., based on requirements
- **Code Refactoring**: Help optimize existing code structure and improve code quality
- **Bug Fixing**: Analyze error logs and provide solutions

### 2. Documentation

- **API Documentation**: Generate detailed documentation for components and functions
- **User Guides**: Write clear usage instructions and tutorials
- **Code Comments**: Add understandable comments for complex logic

### 3. Technical Consultation

- **Architecture Design**: Discuss technology selection and architecture solutions
- **Best Practices**: Get recommendations for Vue 3, TypeScript, Vite, and other technologies
- **Performance Optimization**: Identify performance bottlenecks and provide optimization suggestions

## Usage Recommendations

### Asking Techniques

1. **Clear Context**: Provide sufficient project background and code context
2. **Clear Description**: Accurately describe requirements or problems
3. **Provide Examples**: If necessary, provide expected input/output examples

### Code Review

- Have Claude review code changes
- Check for potential security issues
- Verify code compliance with project standards

### Learning Assistance

- Ask about unfamiliar concepts or technologies
- Request code examples and explanations
- Explore pros and cons of different implementation approaches

## Project-Specific Guidelines

### Vue 3 Component Development

```typescript
// Use Composition API
// Follow existing project code style
// Use TypeScript type definitions
```

### Internationalization Support

- This project supports Chinese (zh-CN) and English (en-US)
- All user-visible text should use vue-i18n
- Translation files are located in `src/locales/lang/`

### Style Guidelines

- Use Tailwind CSS for styling
- Follow responsive design principles
- Maintain consistency with existing UI style

## Important Notes

1. **Code Validation**: AI-generated code must be tested and validated
2. **Security Review**: Do not provide sensitive information (keys, credentials, etc.) to AI
3. **Understanding First**: Understand AI-provided solutions, don't use them blindly
4. **Continuous Learning**: Use AI as a learning tool, not just a code generator

## Related Resources

- [Claude AI Official Documentation](https://www.anthropic.com/claude)
- [Project README](./README.md)
- [GitHub Copilot Usage Guide](./COPILOT.md)
- [AI Agents Usage Guide](./AGENTS.md)
