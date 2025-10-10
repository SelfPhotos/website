# GitHub Copilot 使用指南

本文档介绍如何在 Self Photos 项目中有效使用 GitHub Copilot。

## 简介

GitHub Copilot 是一个 AI 编程助手，直接集成在代码编辑器中，可以实时提供代码建议和自动补全。

## 配置

### VS Code 设置

1. 安装 GitHub Copilot 扩展
2. 登录 GitHub 账户
3. 根据需要调整 Copilot 设置

### 推荐配置

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

## 功能特性

### 1. 代码自动补全

- **行内建议**: 在输入时实时提供代码建议
- **多行补全**: 根据上下文生成完整的函数或组件
- **智能识别**: 理解项目结构和编码风格

### 2. 注释转代码

通过编写清晰的注释，Copilot 可以生成相应的实现代码：

```typescript
// 创建一个格式化日期的函数，接收 ISO 字符串，返回 YYYY-MM-DD 格式
// Copilot 会根据注释生成对应的函数实现
```

### 3. 测试用例生成

- 为现有函数生成单元测试
- 创建边界条件测试
- 生成集成测试场景

## 最佳实践

### 编写有效的提示

1. **使用描述性注释**: 清晰说明期望的功能
2. **提供类型信息**: 在 TypeScript 中定义明确的类型
3. **遵循命名规范**: 使用有意义的变量和函数名

### 代码审查

- 始终审查 Copilot 生成的代码
- 确保代码符合项目规范
- 验证代码的正确性和安全性

### 提高效率

1. **快捷键使用**:
   - `Tab`: 接受建议
   - `Esc`: 拒绝建议
   - `Alt + ]`: 下一个建议
   - `Alt + [`: 上一个建议

2. **上下文优化**:
   - 保持相关文件在编辑器中打开
   - 使用描述性的变量名
   - 编写清晰的函数签名

## 项目特定应用

### Vue 3 组件开发

Copilot 可以帮助快速生成：
- 组件模板结构
- Composition API 逻辑
- Props 和 Emits 定义
- 响应式状态管理

### TypeScript 开发

- 自动生成类型定义
- 接口和类型守卫
- 泛型函数实现

### 样式开发

- Tailwind CSS 类名建议
- 响应式设计代码
- 动画和过渡效果

## 常见场景

### 1. 创建新组件

```vue
<!-- 输入组件基础结构，Copilot 会提供完整的模板、脚本和样式建议 -->
<script setup lang="ts">
// Copilot 会根据组件名称和用途建议相应的导入和逻辑
</script>
```

### 2. API 集成

```typescript
// Copilot 可以帮助生成 API 调用、错误处理和数据转换代码
```

### 3. 国际化支持

```typescript
// Copilot 识别项目的 i18n 结构，建议正确的翻译键
```

## 注意事项

1. **代码质量**: 不要完全依赖 Copilot，保持代码审查习惯
2. **安全性**: 避免在代码中暴露敏感信息
3. **许可证**: 了解 Copilot 生成代码的许可证含义
4. **隐私**: 注意 Copilot 会将代码片段发送到服务器进行分析

## 性能优化建议

- 关闭不需要的语言支持以提高响应速度
- 定期更新 Copilot 扩展
- 在大型文件中适当限制建议范围

## 故障排查

### Copilot 无响应

1. 检查网络连接
2. 重启 VS Code
3. 重新登录 GitHub 账户

### 建议质量不佳

1. 提供更多上下文
2. 使用更清晰的命名
3. 添加描述性注释

## 相关资源

- [GitHub Copilot 官方文档](https://docs.github.com/en/copilot)
- [VS Code Copilot 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Claude AI 使用指南](./CLAUDE.md)
- [AI Agents 使用指南](./AGENTS.md)
