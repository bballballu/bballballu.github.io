import type { Metadata } from "next";
import styles from "./agent-case.module.css";

export const metadata: Metadata = {
  title: "研发 Agent 产品案例｜冯哲宇",
  description:
    "Co-Dial Agent 闭环、研发需求澄清与变更影响分析 Agent、可控 MVP 与 Coding Agent 评测方案。",
};

const loop = [
  {
    index: "01",
    name: "状态 State",
    detail: "task / vision / collab / history 四类状态与对话特征",
  },
  {
    index: "02",
    name: "策略 Policy",
    detail: "分层追问、轮次控制、分工提醒、纠错与安全边界",
  },
  {
    index: "03",
    name: "工具 Tool",
    detail: "OpenCV / Unity、事件网关、Coze、ASR 与 MR 呈现",
  },
  {
    index: "04",
    name: "反馈 Feedback",
    detail: "在关键节点介入，引导协作而不是直接给出答案",
  },
  {
    index: "05",
    name: "评测 Eval",
    detail: "任务达成、参与均衡、介入时机与 26 项实验指标",
  },
];

const mvpFlow = [
  ["输入", "需求描述、PRD、Issue 与关联上下文"],
  ["检索", "只读读取代码、文档、接口与历史变更"],
  ["澄清", "识别目标、边界、歧义、依赖与验收缺口"],
  ["分析", "输出模块、接口、数据、测试与发布影响图"],
  ["确认", "关键判断交由负责人确认，不自动写入或执行"],
];

const scorecards = [
  {
    label: "TASK SUCCESS",
    title: "任务成功率",
    formula: "通过验收项 ÷ 总验收项",
    note: "以需求验收标准为终点，不用“生成了答案”替代任务完成。",
  },
  {
    label: "TOOL USE",
    title: "工具调用质量",
    formula: "有效调用 ÷ 总调用",
    note: "评估选对工具、参数正确、调用顺序与无效重试，而不只统计次数。",
  },
  {
    label: "TRACE QUALITY",
    title: "过程与证据覆盖",
    formula: "有证据关键结论 ÷ 关键结论",
    note: "每个影响判断回链文件、接口、Issue 或历史变更，支持人工复核。",
  },
  {
    label: "RECOVERY",
    title: "异常恢复能力",
    formula: "成功恢复异常 ÷ 可恢复异常",
    note: "观察 Agent 能否识别冲突、请求补充信息、回退并停止越权动作。",
  },
];

export default function AgentCasePage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#case-content">跳到案例内容</a>

      <nav className={styles.nav} aria-label="案例导航">
        <a className={styles.brand} href="/">
          <span className={styles.brandMark}><img src="/brand-logo.jpg" alt="" /></span>
          <span>冯哲宇 · Agent Case</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#codial">Co-Dial</a>
          <a href="#mvp">研发 Agent</a>
          <a href="#evaluation">评测</a>
          <a href="#practice">工程实践</a>
        </div>
        <a className={styles.backButton} href="/">返回作品集 ↗</a>
      </nav>

      <div id="case-content">
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>ROLE-SPECIFIC CASE · R&amp;D AGENT PRODUCT</p>
            <h1>让研发 Agent<br />从“会回答”走向<br /><span>可控地完成任务</span></h1>
            <p className={styles.heroLead}>
              我关注的不只是模型输出，而是如何把状态理解、策略决策、工具调用、过程反馈与结果评测组织成可追踪的产品闭环。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#codial">查看完整闭环 ↓</a>
              <a className={styles.secondaryButton} href="mailto:fengzheyu2002@cuc.edu.cn">讨论岗位匹配 ↗</a>
            </div>
          </div>

          <aside className={styles.heroProof} aria-label="案例核心证据">
            <div className={styles.proofHeader}>
              <span>CASE EVIDENCE</span>
              <strong>01 / 04</strong>
            </div>
            <div className={styles.proofMetric}>
              <strong>75→97%</strong>
              <span>Co-Dial 任务完成率</span>
            </div>
            <div className={styles.proofGrid}>
              <div><strong>58.3→16.7%</strong><span>协作失衡比例</span></div>
              <div><strong>26</strong><span>项实验指标</span></div>
            </div>
            <p>真实对照实验验证 Agent 是否改善任务达成与协作过程，而非仅评估回答观感。</p>
          </aside>
        </header>

        <section className={styles.section} id="codial">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>01 · PROVEN LOOP</p>
              <h2>Co-Dial：状态—策略—工具—反馈—评测闭环</h2>
            </div>
            <p>让 AI 教师 Agent 理解儿童的动作与对话，只在协作卡住的关键节点介入。</p>
          </div>

          <div className={styles.loopPanel}>
            {loop.map((item) => (
              <article className={styles.loopNode} key={item.name}>
                <span>{item.index}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className={styles.codialGrid}>
            <figure className={styles.systemFigure}>
              <img src="/projects/codial-system.png" alt="Co-Dial 混合现实协作学习系统" />
              <figcaption>实体数学对象 × MR 空间反馈 × AI 教师 Agent</figcaption>
            </figure>
            <div className={styles.insightPanel}>
              <p className={styles.kicker}>PRODUCT DECISION</p>
              <h3>Agent 的价值不在抢答，<br />而在选择何时不回答。</h3>
              <ul>
                <li><strong>状态可观测：</strong>把实体动作、对话和任务阶段转成可用上下文。</li>
                <li><strong>策略可约束：</strong>优先追问、轮次平衡与分工提醒，禁止直接泄露答案。</li>
                <li><strong>结果可验证：</strong>实验组在 18 项指标中优于 GUI 基线，并同步观察协作质量。</li>
              </ul>
            </div>
          </div>

          <div className={styles.workflowPanel}>
            <div className={styles.workflowHeader}>
              <div>
                <p className={styles.cardLabel}>REPRODUCIBLE WORKFLOW · CoDial_Process_Guide_v1</p>
                <h3>从输入校验到结果回写的决策链</h3>
              </div>
              <span>主工作流决定“做什么” · 回写工作流验证“是否有效”</span>
            </div>
            <ol className={styles.workflowNodes}>
              <li><span>N01</span><strong>输入校验</strong><small>缺字段即静默</small></li>
              <li><span>N05</span><strong>对话分析</strong><small>只抽取特征</small></li>
              <li><span>N06</span><strong>状态聚合</strong><small>比例由代码计算</small></li>
              <li><span>N07</span><strong>策略路由</strong><small>确定性规则优先</small></li>
              <li><span>N09</span><strong>生成引导</strong><small>不泄露答案</small></li>
              <li><span>N10</span><strong>安全审查</strong><small>二次检查话术</small></li>
              <li><span>N11</span><strong>输出兜底</strong><small>固定句与动作</small></li>
              <li><span>N12</span><strong>写入 Trace</strong><small>版本与原因可追溯</small></li>
              <li><span>OUT</span><strong>结果回写</strong><small>观察 15–30 秒</small></li>
            </ol>
          </div>

          <div className={styles.policyGrid}>
            <article>
              <p className={styles.cardLabel}>POLICY THRESHOLDS</p>
              <h3>把“何时介入”写成可验证规则</h3>
              <div className={styles.thresholdList}>
                <div><strong>≥ 0.75</strong><span>20 秒窗口内发言或操作失衡 → 分工提醒</span></div>
                <div><strong>≥ 10s</strong><span>任务无进展 → 一级过程追问</span></div>
                <div><strong>≥ 2</strong><span>连续错误 → 二级纠错提示</span></div>
                <div><strong>&lt; 12s</strong><span>距离上次介入过近 → 冷却静默</span></div>
                <div><strong>≥ 5</strong><span>单任务介入达到上限 → 教师接管</span></div>
              </div>
            </article>
            <article className={styles.traceCard}>
              <p className={styles.cardLabel}>TRACE &amp; OUTCOME</p>
              <h3>每次介入都能追溯原因与结果</h3>
              <p>
                记录 workflow / policy / prompt 版本、感知快照、策略、reason code、最终话术、MR 动作、延迟和兜底状态；再回写换人操作、讨论恢复、下一步有效性与步骤完成情况。
              </p>
              <div className={styles.traceChips}>
                <span>trace_id</span><span>reason_code</span><span>guard_fallback</span><span>action_rendered</span><span>progress_resumed</span>
              </div>
              <small>证据边界：这是与项目描述一致的可复现方案；实验期实际配置仍需执行日志、发布记录与演示录像核验。</small>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="mvp">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>02 · PROPOSED MVP</p>
              <h2>研发需求澄清与变更影响分析 Agent</h2>
            </div>
            <p>岗位定制方案：先做“只读分析副驾驶”，用低风险 MVP 验证检索、推理和协作价值。</p>
          </div>

          <div className={styles.mvpFlow} aria-label="研发需求澄清与变更影响分析流程">
            {mvpFlow.map(([title, detail], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>

          <div className={styles.outputGrid}>
            <article className={styles.outputCard}>
              <p className={styles.cardLabel}>INPUT CHECK</p>
              <h3>需求澄清清单</h3>
              <ul>
                <li>目标用户与业务目标是否一致</li>
                <li>范围、不做项与异常边界是否明确</li>
                <li>依赖、权限与验收标准是否完整</li>
              </ul>
            </article>
            <article className={styles.outputCard}>
              <p className={styles.cardLabel}>IMPACT MAP</p>
              <h3>变更影响地图</h3>
              <ul>
                <li>代码模块、接口与数据结构</li>
                <li>上下游系统、测试与监控</li>
                <li>发布、回滚及负责人确认点</li>
              </ul>
            </article>
            <article className={styles.outputCard}>
              <p className={styles.cardLabel}>DELIVERABLE</p>
              <h3>结构化交付物</h3>
              <ul>
                <li>待确认问题与风险优先级</li>
                <li>证据链接与置信度标记</li>
                <li>人工确认后的任务拆解建议</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.section} id="guardrails">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>03 · CONTROL BY DESIGN</p>
              <h2>先建立可信边界，再扩大自动化</h2>
            </div>
            <p>把风险控制设计进产品路径，而不是等 Agent 出错后再补提示词。</p>
          </div>

          <div className={styles.guardrailGrid}>
            <article><span>READ ONLY</span><h3>只读 MVP</h3><p>默认只读取仓库、文档与 Issue；不修改代码、不创建分支、不触发发布。</p></article>
            <article><span>EVIDENCE</span><h3>证据溯源</h3><p>每个关键结论附来源、位置与时间，区分事实、推断和待确认假设。</p></article>
            <article><span>PERMISSION</span><h3>权限控制</h3><p>按资源、工具与动作分级授权；敏感数据最小可见，越权即停止。</p></article>
            <article><span>HUMAN GATE</span><h3>人工确认</h3><p>范围判断、风险接受与任何写操作都设置明确确认点，并保留操作记录。</p></article>
          </div>

          <div className={styles.permissionBar}>
            <div><span>默认允许</span><strong>读取 · 检索 · 引用 · 分析</strong></div>
            <div><span>需要确认</span><strong>任务拆解 · 写入建议 · 外部通知</strong></div>
            <div><span>MVP 禁止</span><strong>改代码 · 合并 · 发布 · 删除</strong></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.evalSection}`} id="evaluation">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>04 · PROCESS EVALUATION</p>
              <h2>Coding Agent 不只看最终答案</h2>
            </div>
            <p>任务结果、工具调用和中间过程共同决定 Agent 是否真的可用。</p>
          </div>

          <div className={styles.scoreGrid}>
            {scorecards.map((card) => (
              <article key={card.title}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <strong>{card.formula}</strong>
                <p>{card.note}</p>
              </article>
            ))}
          </div>

          <div className={styles.tracePanel}>
            <div>
              <p className={styles.cardLabel}>EVALUATION TRACE</p>
              <h3>一次任务，一条可复盘轨迹</h3>
            </div>
            <ol>
              <li><span>01</span><strong>理解任务</strong><small>关键约束是否识别</small></li>
              <li><span>02</span><strong>制定策略</strong><small>计划是否可执行</small></li>
              <li><span>03</span><strong>调用工具</strong><small>选择与参数是否正确</small></li>
              <li><span>04</span><strong>验证结果</strong><small>是否覆盖验收与异常</small></li>
              <li><span>05</span><strong>请求确认</strong><small>高风险动作是否停住</small></li>
            </ol>
          </div>
        </section>

        <section className={styles.section} id="practice">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>05 · REAL DEVELOPMENT PRACTICE</p>
              <h2>Claude Code × Godot：真实项目里的调试判断</h2>
            </div>
            <p>从《趋光本能》的 2.5D 图层问题出发，理解 Coding Agent 的能力边界。</p>
          </div>

          <div className={styles.practiceGrid}>
            <figure className={styles.gameFigure}>
              <img src="/projects/phototaxis-instinct.jpg" alt="独立游戏趋光本能主菜单" />
              <figcaption>《趋光本能》· 首次使用 Godot，借助 Claude Code 独立完成</figcaption>
            </figure>
            <div className={styles.debugStory}>
              <div><span>01 · 现象</span><p>2.5D 场景中角色遮挡关系错误，代码能运行，但视觉空间不成立。</p></div>
              <div><span>02 · 模型捷径</span><p>模型直接套用常见 Y 坐标排序，无法自动理解素材真实的对角线空间关系。</p></div>
              <div><span>03 · 人工诊断</span><p>回到素材锚点、移动方向与场景结构，重新定义可计算的空间规则。</p></div>
              <div><span>04 · 产品结论</span><p>“可运行”不等于“任务成功”；Agent 需要环境证据、边界条件和可复盘验证。</p></div>
            </div>
          </div>

          <div className={styles.practiceNote}>
            <strong>进一步实践</strong>
            <p>在“漫创 2.0”中使用 Godot 串联画格状态、3D 编排、角色动作、镜头控制与 AI 生成链路，持续积累复杂状态管理与人机协作开发经验。</p>
          </div>
        </section>

        <section className={styles.closing}>
          <p>FROM PRODUCT LOOP TO ENGINEERING LOOP</p>
          <h2>我希望做的，是让 Agent<br />在真实研发流程里可靠地推进任务。</h2>
          <div>
            <a className={styles.primaryButton} href="mailto:fengzheyu2002@cuc.edu.cn">联系我 ↗</a>
            <a className={styles.secondaryButton} href="/">返回完整作品集</a>
          </div>
        </section>
      </div>
    </main>
  );
}
