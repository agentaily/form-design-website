# ROADMAP — Form Design 宣传官网 (form-design-website)

以**能力**为粒度跟踪。细节链 [SPEC.md](./SPEC.md) / [DESIGN.md](./DESIGN.md) / 各 PR,不复述。

## ✅ 已完成

- **项目骨架** —— Vite + React 18 + TS (strict) + DS 0.10.0,可 `build`;i18n (en/zh) 脚手架;占位壳(消费 DS 的 BrandMark)。
- **CI + 部署 workflow** —— GitHub Actions CI(format/typecheck/test/build)+ Cloudflare Pages 自动部署 workflow(结构就绪;**CF Pages 项目 / 域名绑定待人后续做**)。
- **fleet-ready** —— `.claude/agents/`(7 角色)+ TESTING.md + DESIGN.md;CLAUDE.md 装就绪 + 自轮询约定。
- **落地页脚手架(PR #1)** —— 从 agentaily 官网 handoff `8Q3zKq` 落地单页骨架:Nav → Hero(含聊天 demo)→ FAQ → 页脚,全程消费 DS 组件、双语、深/浅可切、滚动入场。
- **Form Design v1 内容(`feat/form-design-v1-content`)** —— 把 form-design 官网设计(handoff `Mec6_8u5PVlOib7k0rTwLA`,agentaily 官网设计的 Remix)落地:品牌→Form Design;区块为 Nav → Hero(对话生成表单价值主张 +「开始使用」指向 form-design.agentaily.com + 演示窗)→ **能力 (Features)** → **怎么用 (How it works,三步)** → FAQ(Form Design 常见问题)→ 页脚。文案全在 `en.json` / `zh.json`。设计真相见 [DESIGN.md](./DESIGN.md),基线 `.design-baseline/`,行为契约见 [`features/`](./features)。

## 🚧 进行中

-（暂无)

## 📋 待办

- **生产部署上线** —— 建 Cloudflare Pages 项目 `official-website` + 绑定自定义域名(走 `cloudflare-pages-deploy` skill;DNS 在阿里云)。
- **(可选) E2E** —— 静态站初期不做;落地页稳定后可加 Playwright 走「访客切语言 / 点 CTA」真实路径。
- **SEO / OG / favicon / 站点元信息** —— 待设计定后补。
