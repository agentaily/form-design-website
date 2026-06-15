# Design — Form Design 宣传官网 (form-design-website)

这个产品**长什么样、怎么设计的**的真相源(视觉/交互维度)。和 `SPEC.md`(架构真相)、`features/`(行为真相)**三足鼎立** —— 它是**视觉契约**。

> [UI] 仅**消费设计系统的 UI 项目**需要本文件。
> **本产品的视觉系统(palette / type / 组件)在上游 `@agentaily/design-system` —— 本文件不重复那些**,只记**本产品自己的**设计指针 + 决策。`designer` agent 读本文件当真相源。

## 设计在哪做(来源)

- **Claude Design 项目**:projectId = `610a9c08-1c26-419d-989b-2270e0571ba0`(名 `form-design-website`)。**它是从 agentaily 官网设计项目 `1c110e32-5467-4978-883e-36ae10f3bd1c` 复制(Remix)后,重定位到 Form Design 这一个产品**(同视觉语言、换品牌+内容)。
- **代码脚手架**:本仓初始由 `agentaily/official-website` 复制而来(同 Vite/React/TS + `@agentaily/design-system` + CF Pages 套路),**页面内容已对齐 Form Design v1**(handoff `Mec6_8u5PVlOib7k0rTwLA`,`.design-baseline/` 已刷)。
- 流程:在 claude.ai/design 这个项目里设计/改页面 → 复制 handoff 链接 → `design-sync` 三路合并进代码。取法/合并细节见 `design-via-claude-design` + `design-sync` skill。**别和上游组件库 (`@agentaily/design-system`) 的设计项目搞混**(那个是设计组件本身的;本仓只在缺组件/缺 seam 时往那反馈,**叫人**)。

## 设计原则 / 交互(form-design 官网定位)

- **落地页(单页滚动)**:Nav → Hero(对话生成表单的价值主张 + 主 CTA「开始使用」+ 演示窗)→ 能力(Features)→ 怎么用(三步)→ FAQ → 页脚,自上而下叙事。
- **品牌 = Form Design**(非 agentaily 工作室);Hero 打字滚动短语围绕「做表单」(就有一张表单 / 就能收集回复 / 就发布上线)。
- **深色主题默认**;**双语 (en/zh)**:文案走 i18n catalog,默认中文,可切换。
- **视觉系统不自造**:palette / type / 组件全部来自 `@agentaily/design-system`,本仓只记**官网自己的**版式/区块/文案决策。
- **页脚**:大区块(品牌/链接)+ 最底部 bar(版权 `© 2026 阿空智能` + 备案号居中、无 slogan)——继承 agentaily 官网定稿的页脚规则。

—— 本产品特定的视觉语言、交互模式、信息架构、响应式约定。

## 消费的设计系统

- **`@agentaily/design-system`**:**UI 一律消费,不手搓**;升级随上游流过来。
- 关键组件 / token:`BrandMark` · `Button` · `Card` · `Badge` —— 落地页区块按设计从 DS 取。
- 缺组件 / 缺 seam → 往**上游组件库**反馈补齐(下游定契约、上游照做;这步**叫人**)。

## 页面 / 界面清单(+ 设计状态)

> ✅ **已对齐 v1**(handoff `Mec6_8u5PVlOib7k0rTwLA`,`.design-baseline/` 已刷)。下表的「现状」即当前代码区块。

| 区块                                                  | 目标                            | 现状                               |
| ----------------------------------------------------- | ------------------------------- | ---------------------------------- |
| **Nav**(BrandMark=Form Design + 锚点 + 语言/主题切换) | 能力 / 怎么用 / FAQ             | ✅ 已对齐 v1(能力 / 怎么用 / FAQ)  |
| **Hero**(对话生成表单价值主张 + 「开始使用」+ 演示窗) | 打字滚动短语围绕做表单          | ✅ 已对齐 v1                       |
| **能力 (Features)**                                   | 产品能力                        | ✅ 已对齐 v1(四卡能力网格)         |
| **怎么用 (How it works)**                             | 三步                            | ✅ 已对齐 v1(三步)                 |
| **FAQ**                                               | Form Design 常见问题            | ✅ 已对齐 v1(Form Design 常见问题) |
| **页脚 (Footer)**                                     | 品牌/链接 + 底栏版权/备案号居中 | ✅ 已对齐 v1                       |

## 设计 ↔ 代码映射

- `.design-baseline/`:上次同步的设计快照(`design-sync` 三路 diff 的基线;改设计后刷新)。**首次 design-sync 时建立**(本仓 `.gitignore` 把整个目录设为本地工作快照、不入库,仅 `BASELINE.md` 入库当指针)。冻结快照 formatter 不可碰(`.prettierignore` 已列 `.design-baseline/`)。
- 落地链:`designer`(去 Claude Design 设计、拿 handoff)→ `design-sync`(进代码,保留本地工程改动)。
- **改设计 → 同一次更新本文件**(文档与代码同步纪律:页面清单/设计状态别漂移)。
