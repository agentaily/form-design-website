# Design baseline — form-design-website

这是 **`design-sync` 的基线快照区**:每次从 Claude Design 拿到 handoff 落地进代码时,把那次的设计原型快照存在这里,作为下次三路 diff(baseline ↔ 新 handoff ↔ 当前代码)的「上次设计」一方。

- **当前基线(`feat/form-design-v1-content`)** —— handoff `Mec6_8u5PVlOib7k0rTwLA`
  - **source**: `https://api.anthropic.com/v1/design/h/Mec6_8u5PVlOib7k0rTwLA`
  - **date**: 2026-06-15
  - **summary**: Form Design 官网 v1 内容(agentaily 官网设计的 Remix,换品牌 + 内容)——品牌 Form Design;Nav 能力 / 怎么用 / FAQ;Hero「对话生成表单」badge +「聊一句，」打字滚动短语 +「开始使用」(指向 form-design.agentaily.com)/「看看怎么用」CTA + 聊天演示窗(报名表 / 回复汇总 / 多步骤表单 / 满意度问卷);区块 = 能力 (Features 四卡) + 怎么用 (How it works 三步) + FAQ(Form Design 常见问题);页脚围绕 Form Design,底栏版权/备案号居中。
  - 本地原型快照已落盘在 [`Mec6_8u5PVlOib7k0rTwLA/`](./Mec6_8u5PVlOib7k0rTwLA)(去掉无关的 `uploads/` 聊天残留与 `screenshots/`),下次拿到新 handoff 时以它为「上次设计」一方做三路 diff,合并后把指针换成新 handoff 的。
- **本目录在 `.gitignore` 里**:快照是**本地工作快照**(不入库,避免给 PR 塞一堆原型文件);只有本说明文件 `BASELINE.md` 被 `-f` 强加进版本库当指针。
- **此目录是冻结快照,formatter 不可碰** —— 已在 [`.prettierignore`](../.prettierignore) 列出 `.design-baseline/`,否则 `prettier --write .` 会改写基线、让下次三路 diff 满是假冲突。
- 取 handoff、`design-sync` 三路合并流程见 `design-via-claude-design` + `design-sync` skill。设计项目链接见 [`../DESIGN.md`](../DESIGN.md)。
