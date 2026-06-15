# Form Design 宣传官网 (form-design-website)

**Form Design(Agentaily Forms)的官方宣传落地页** —— 双语 (en/zh)、深色主题、消费 [`@agentaily/design-system`](https://github.com/agentaily/design-system) 的**纯静态前端站**。

> 这是**部署的站,不是发布的包**:合并到 `main` 即由 GitHub Actions 部署到 Cloudflare Pages(CF 项目 + 密钥配好后)。它不发 npm、没有后端 / workers / D1。

> ℹ️ **血缘**:本仓初始由 [`agentaily/official-website`](https://github.com/agentaily/official-website) 复制而来(同设计血缘:Form Design 官网设计 = agentaily 官网设计的 Remix)。**页面内容已对齐 Form Design v1**(`Mec6_8u5PVlOib7k0rTwLA` handoff,见 `.design-baseline/`)。部署工作流暂为 `workflow_dispatch` 手动触发(CF Pages 项目/密钥配好后恢复 push 自动部署)。详见 [DESIGN.md](./DESIGN.md)。

## 怎么跑

```bash
npm install          # 拉依赖 + 装 lefthook git hooks
npm run dev          # Vite dev server
npm run typecheck    # tsc --noEmit(src/ strict TS)
npm test             # 单元 + BDD(vitest, jsdom)
npm run build        # 生产构建(产物在 dist/)
npm run preview      # 预览 build 产物
npm run format       # prettier --write .
```

「做完」一条命令验完:`npm run typecheck && npm test && npm run build`。

## 这是什么 / 长什么样

- **双语落地页**:Nav → Hero(对话生成表单价值主张 + 「开始使用」+ 演示窗)→ 能力(Features)→ 怎么用(三步)→ FAQ → 页脚。视觉/交互设计见 [DESIGN.md](./DESIGN.md)。
- **品牌 = Form Design**;深色主题默认;i18n 默认中文、可切英文(语言随浏览器探测,兜底中文)。
- 视觉系统全部来自 `@agentaily/design-system`,不手搓;主题切换 / i18n / 跨子域持久化运行时来自 `@agentaily/web-kit`。

## 文档导航

- [DESIGN.md](./DESIGN.md) —— 视觉/交互契约(设计真相,`designer` agent 的真相源;设计项目 `610a9c08`)
- [SPEC.md](./SPEC.md) · [TESTING.md](./TESTING.md) · [ROADMAP.md](./ROADMAP.md) · [`features/`](./features) —— ⚠️ 仍为 official-website 继承内容,待对齐 form-design
- [`.claude/agents/README.md`](./.claude/agents/README.md) —— sub agent 分工(PR 驱动)

## 技术栈

Vite + React 18 + TypeScript (strict, `src/`) · vitest + @amiceli/vitest-cucumber + Testing Library · lefthook + Prettier · GitHub Actions + Cloudflare Pages。
