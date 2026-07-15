const flagshipProjects = [
  {
    index: "04",
    type: "AI 素养教育 · 0→1 产品",
    title: "Media Cube",
    subtitle: "让儿童看见、判断并指挥 AI",
    period: "2025.07 — 至今",
    role: "负责人 · AI 产品设计 / 课程设计 / 独立开发",
    intro:
      "面向小学五、六年级儿童，把实体卡牌、AI 共创平台与本地化课程包组合成一套可教学、可观察、可迭代的 AI 素养产品。",
    image: "/projects/media-cube-cards.png",
    imageAlt: "Media Cube 儿童 AI 素养卡牌体系",
    metrics: [
      { value: "4", label: "个班课堂试用" },
      { value: "100+", label: "条行为反馈" },
      { value: "3", label: "轮产品迭代" },
    ],
    points: [
      "围绕“AI 能做什么、如何协作、作品属于谁”建立三层素养目标，把抽象概念转化为卡牌规则、任务链路与反馈机制。",
      "设计作品上传、AI 看图、儿童纠错、多版本共创与归属反思的完整链路，并用热力图将模型理解过程显性化。",
      "独立完成前后端与模型 API 接入，跑通任务配置、图像理解、共创生成、作品编辑和即时反馈闭环。",
    ],
    link: "https://soulspark.magicube.studio/",
    linkLabel: "访问产品网站",
  },
  {
    index: "02",
    type: "MR + AI Agent · 教育科技",
    title: "Co-Dial",
    subtitle: "让 AI 从答题工具变成协作引导者",
    period: "2025.11 — 至今",
    role: "负责人 · 系统设计 / Agent 策略 / Unity 开发",
    intro:
      "面向小学低年级数学合作学习，将实体操作、MR 空间反馈与 AI 教师 Agent 结合，让系统理解儿童的动作与对话并在关键节点介入。",
    image: "/projects/codial-system.png",
    imageAlt: "Co-Dial 混合现实协作学习系统与硬件结构",
    metrics: [
      { value: "75→97%", label: "任务完成率" },
      { value: "58.3→16.7%", label: "协作失衡比例" },
      { value: "26", label: "项实验指标" },
    ],
    points: [
      "构建“实体数学对象操作—MR 反馈—同伴协作—AI 过程引导”的产品路径，避免 AI 直接给出答案。",
      "将 Unity 动作事件与语音转写传入 Coze 工作流，设计分层追问、轮次控制、分工提醒、纠错与安全边界。",
      "完成对照实验；实验组在 18 项指标中优于 GUI 基线，验证产品对任务达成和参与均衡的改善。",
    ],
  },
  {
    index: "01",
    type: "AI 创作工具 · 3D 交互",
    title: "漫创 2.0",
    subtitle: "用空间约束提高漫画生成的可控性",
    period: "2025.07 — 至今",
    role: "核心成员 · 产品链路 / 交互设计 / Godot 开发",
    intro:
      "以卡牌式视觉中介层和 3D 场景编排承接创作者意图，解决提示词门槛高、构图透视不可控及跨画格角色漂移。",
    image: "/projects/manchu-result.png",
    imageAlt: "漫创 2.0 漫画草图与生成结果对照",
    metrics: [
      { value: "5", label: "类结构化卡牌" },
      { value: "3D", label: "空间镜头控制" },
      { value: "1", label: "条完整生成链路" },
    ],
    points: [
      "把创建角色与场景、画格编排、动作调整、虚拟摄像机和生成画面串成一条可回溯工作流。",
      "用角色卡、场景卡、动作卡、道具卡和画格卡，把复杂生成条件转化为拖拽、组合与参数调整。",
      "使用 Godot 实现画格状态、3D 编排、角色动作、镜头控制与 AI 生成链路，支持视觉属性跨画格复用。",
    ],
    link: "https://weixin.qq.com/sph/Amm3bnpN96",
    linkLabel: "查看演示视频",
  },
  {
    index: "03",
    type: "独立游戏 · Vibe Coding",
    title: "趋光本能",
    subtitle: "在模型捷径之外，建立真实的空间规则",
    period: "个人项目",
    role: "独立开发 · Godot / Claude Code",
    intro:
      "第一次使用 Godot，借助 Claude Code 独立完成一款 2.5D 游戏，在完整开发与调试过程中积累 Vibe Coding 经验。",
    image: "/projects/phototaxis-instinct.jpg",
    imageAlt: "独立游戏趋光本能 Pygmalion 的主菜单画面",
    metrics: [
      { value: "1", label: "款独立完成游戏" },
      { value: "2.5D", label: "空间图层系统" },
      { value: "0→1", label: "Godot 开发实践" },
    ],
    points: [
      "首次使用 Godot，借助 Claude Code 独立推进游戏实现，在真实项目中建立 Vibe Coding 的协作与调试方法。",
      "解决 2.5D 图层排序问题时，识别出模型会直接套用常见的 Y 坐标排序方案，却无法自动理解素材真实的对角线空间关系。",
      "由此形成新的开发判断：先理解具体素材与场景规则，再约束模型生成方案，而不是直接接受通用代码答案。",
    ],
    link: "https://store.steampowered.com/app/3820340/_Pygmalion/",
    linkLabel: "访问 Steam 商店页",
  },
];

const internships = [
  {
    company: "百度",
    team: "AIGC 产品部 · 度加剪辑 APP",
    role: "AIGC 工具产品经理",
    period: "2025.12 — 2026.03",
    tone: "blue",
    summary:
      "围绕 AIGC 图文与视频创作工具，负责生成链路、模型策略、功能规划与数据指标体系。",
    outcomes: [
      "设计 AI 短剧从意图理解、脚本大纲、首尾帧提示词到分镜视频与内容存储的五步创作链路，并规划中间结果回溯修改。",
      "针对故事、教学、科普等脚本类型完成 20 组模型 A/B 测试，从质量、一致性、稳定性与耗时沉淀选型策略。",
      "分析 5,000 条小红书笔记，归纳 18 类高频主题与典型版式，形成 AI 图文模板、智能编排和关键行为指标方案。",
    ],
    stats: [
      { value: "20", label: "组模型测试" },
      { value: "5,000", label: "条内容样本" },
      { value: "18", label: "类高频主题" },
    ],
  },
  {
    company: "小米",
    team: "互联网业务部 · 电视与视频业务",
    role: "用户增长 / 会员产品",
    period: "2023.07 — 2023.11",
    tone: "lime",
    summary:
      "参与小米电视会员业务增长与体验优化，覆盖需求定义、原型、资源协同、上线操盘与数据复盘。",
    outcomes: [
      "独立负责 10+ 项 A 级线上营销活动，累计曝光 5,500 万+，优化权益感知、价格利益点与支付入口。",
      "围绕会员中心关键转化节点执行 10+ 组 A/B 测试，80% 的实验取得正向结果，最佳方案带动支付转化率提升 13.6%。",
      "归纳 100+ 条核心客诉，拆解权益理解、支付、续费与内容匹配问题，推动 2 项会员体验功能迭代。",
    ],
    stats: [
      { value: "5,500万+", label: "活动累计曝光" },
      { value: "+13.6%", label: "最佳转化提升" },
      { value: "80%", label: "实验正向率" },
    ],
  },
  {
    company: "爱奇艺",
    team: "智能电视业务中心 · 银河奇异果",
    role: "用户增长 / 会员运营",
    period: "2023.02 — 2023.05",
    tone: "ink",
    summary:
      "围绕 OTT 会员产品、大屏交互路径和营收数据，进行竞品研究、体验优化与业务复盘。",
    outcomes: [
      "持续追踪腾讯视频、优酷等 Top 3 竞品的权益梯度、联合会员定价、支付链路与大屏体验，输出周度洞察。",
      "针对遥控器非触控、低输入效率与强路径依赖，结合点击 / 展示比识别低效入口，协助精简 3 处支付前跳转。",
      "维护电视端会员营收看板，以 Excel 透视表与交叉分析定位业务波动，支持促销资源位排期与复盘。",
    ],
    stats: [
      { value: "Top 3", label: "竞品持续追踪" },
      { value: "3", label: "处冗余跳转精简" },
      { value: "周度", label: "行业洞察报告" },
    ],
  },
];

const research = [
  {
    venue: "ACM CHI 2026 · CCF-A · 第一作者",
    title: "Recognizable ≠ Mine",
    subtitle: "Anchoring and Negotiating Authorship in Child-AI Co-Creation",
    detail:
      "研究 60 名农村儿童的人机协作创作行为，提出“灵魂锚点”和“真实感阈值”，解释 AI 重绘后视觉可识别性与心理归属感之间的断裂，并将结论转化为意图一致性、工作透明度与用户控制感设计原则。",
    stats: [
      { value: "60", label: "名儿童样本" },
      { value: "2", label: "个核心概念" },
      { value: "CCF-A", label: "会议级别" },
    ],
    link: "https://dl.acm.org/doi/10.1145/3772363.3798533",
  },
  {
    venue: "ACM MM 2025 · CCF-A · 第一作者",
    title: "Reconstructing Nüshu Culture",
    subtitle: "A Multimodal Mixed Reality Experience",
    detail:
      "构建女书文化多模态 MR 体验系统，完成文化内容梳理、用户研究、沉浸式交互设计与原型验证，探索 HCI 技术在文化遗产传播中的产品化路径。",
    stats: [
      { value: "1", label: "套 MR 体验系统" },
      { value: "多模态", label: "交互形态" },
      { value: "CCF-A", label: "会议级别" },
    ],
    link: "https://dl.acm.org/doi/10.1145/3746027.3756145",
  },
];

const archiveProjects = [
  {
    year: "2023",
    title: "妙笔生画 · 绘动百年",
    type: "展览设计",
    image: "/projects/animation-exhibition.jpg",
    alt: "中国动画百年主题展览视觉与场地设计",
    note: "国家图书馆 × 中国传媒大学；北京市级大学生创新创业项目。",
  },
  {
    year: "2022",
    title: "芭莎女孩喝纤茶",
    type: "H5 互动作品",
    image: "/projects/bazaar-h5.jpg",
    alt: "芭莎女孩喝纤茶 H5 的人物与场景设计",
    note: "从 Z 世代洞察、PEST 分析到故事线与互动页面；大广赛互动类优秀奖。",
  },
  {
    year: "2022",
    title: "走之 HiLand",
    type: "移动应用设计",
    image: "/projects/hiland.jpg",
    alt: "走之 HiLand 线上旅行应用的产品结构页面",
    note: "以地图、地点节点与实时直播，为行动不便用户提供沉浸式线上旅行体验。",
  },
  {
    year: "2021",
    title: "窥",
    type: "硬件交互装置",
    image: "/projects/peep.jpg",
    alt: "窥硬件交互装置的交互流程与技术实现",
    note: "通过 Arduino、Kinect 与场景切换讨论独居女性安全议题。",
  },
];

const skillStages = [
  {
    index: "01",
    label: "DISCOVER",
    title: "理解问题",
    skills: ["需求分析", "用户研究"],
  },
  {
    index: "02",
    label: "ORCHESTRATE",
    title: "组织 AI",
    skills: ["Agent 工作流", "Prompt 策略", "模型选型与评测", "异常与兜底"],
  },
  {
    index: "03",
    label: "BUILD",
    title: "构建体验",
    skills: ["Figma / Axure", "Unity / Godot", "Claude Code / Codex / Coze"],
  },
  {
    index: "04",
    label: "VALIDATE",
    title: "验证结果",
    skills: ["MVP 验证", "A/B 测试", "SQL / SPSS / Tableau"],
  },
];

export default function Home() {
  const orderedFlagshipProjects = [...flagshipProjects].sort((a, b) =>
    a.index.localeCompare(b.index)
  );

  return (
    <main>
      <a className="skip-link" href="#content">
        跳到主要内容
      </a>

      <nav className="site-nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark" aria-hidden="true">
            <img src="/brand-logo.jpg" alt="" />
          </span>
          <span>冯哲宇 · Portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#experience">实习</a>
          <a href="#projects">项目</a>
          <a href="#research">研究</a>
          <a href="#about">关于</a>
        </div>
        <a className="nav-cta" href="mailto:fengzheyu2002@cuc.edu.cn">
          联系我 <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div id="content">
        <header className="hero shell" id="top">
          <div className="hero-copy">
            <div className="eyebrow light">
              <span className="status-dot" aria-hidden="true" />
              AI 产品经理 · 生成式体验设计
            </div>
            <h1>
              把 AI 能力变成
              <br />
              <span>真实、可验证</span>的
              <br />
              产品体验
            </h1>
            <p className="hero-lead">
              关注多模态生成、AI 协作与创作工具。用产品方法把模型能力接到真实用户、真实任务与真实反馈里。
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#experience">
                查看实习经历 <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link light-link" href="/files/冯哲宇-双页简历.pdf" target="_blank">
                打开完整简历 <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-location">杭州 / 北京 · AI 产品与创新体验机会</div>
          </div>

          <aside className="hero-card" aria-label="个人简介">
            <div className="portrait-wrap">
              <img className="portrait-photo" src="/profile.png" alt="冯哲宇证件照" />
              <span className="portrait-code" aria-hidden="true">
                <img src="/brand-logo.jpg" alt="" />
              </span>
            </div>
            <div>
              <p className="mini-label">HELLO, I&apos;M</p>
              <h2>冯哲宇</h2>
              <p>
                中国传媒大学交互与智能设计硕士，连接技术能力、用户意图与商业价值。
              </p>
              <div className="tag-row" aria-label="擅长领域">
                <span>0→1 产品</span>
                <span>生成式 AI</span>
                <span>用户研究</span>
                <span>数据验证</span>
              </div>
            </div>
          </aside>
        </header>

        <section className="section section-tint" id="experience">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <p className="kicker">EXPERIENCE / 2023—2026</p>
                <h2>实习经历</h2>
              </div>
              <p className="section-note">三段经历共享同一条主线：理解用户决策，组织复杂链路，用数据验证结果。</p>
            </div>

            <div className="timeline">
              {internships.map((item, index) => (
                <article className="timeline-item" key={item.company}>
                  <div className="timeline-marker" aria-hidden="true">0{index + 1}</div>
                  <div className="timeline-head">
                    <div>
                      <span className={`company-pill ${item.tone}`}>{item.company}</span>
                      <p>{item.team}</p>
                    </div>
                    <div className="timeline-role">
                      <strong>{item.role}</strong>
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <div className="stat-strip" aria-label={`${item.company} 关键成果`}>
                    {item.stats.map((stat) => (
                      <div className="stat-item" key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="outcome-list">
                    {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section shell" id="impact" hidden>
          <div className="impact-heading">
            <div>
              <p className="kicker">IMPACT DASHBOARD / VERIFIED OUTCOMES</p>
              <h2>用数据说明<br />产品是否有效</h2>
            </div>
            <p>
              结果来自项目实验与实习复盘。保留原始统计口径，不将不同业务场景的百分比做横向绩效比较。
            </p>
          </div>

          <div className="impact-dashboard">
            <figure className="comparison-panel">
              <figcaption>
                <div>
                  <span>Co-Dial · 对照实验</span>
                  <strong>AI Agent 对学习协作的影响</strong>
                </div>
                <span className="chart-unit">单位：%</span>
              </figcaption>

              <div className="comparison-chart" role="img" aria-label="Co-Dial 实验中任务完成率从百分之七十五提升到百分之九十七，协作失衡比例从百分之五十八点三下降到百分之十六点七。">
                <div className="compare-group">
                  <div className="compare-label">
                    <strong>任务完成率</strong>
                    <span>越高越好 · +22 个百分点</span>
                  </div>
                  <div className="bar-line">
                    <span>GUI 基线</span>
                    <div className="bar-track"><i className="bar baseline" style={{ width: "75%" }} /></div>
                    <strong>75%</strong>
                  </div>
                  <div className="bar-line">
                    <span>AI + MR</span>
                    <div className="bar-track"><i className="bar result" style={{ width: "97%" }} /></div>
                    <strong>97%</strong>
                  </div>
                </div>

                <div className="compare-group">
                  <div className="compare-label">
                    <strong>协作失衡比例</strong>
                    <span>越低越好 · -41.6 个百分点</span>
                  </div>
                  <div className="bar-line">
                    <span>GUI 基线</span>
                    <div className="bar-track"><i className="bar baseline" style={{ width: "58.3%" }} /></div>
                    <strong>58.3%</strong>
                  </div>
                  <div className="bar-line">
                    <span>AI + MR</span>
                    <div className="bar-track"><i className="bar result" style={{ width: "16.7%" }} /></div>
                    <strong>16.7%</strong>
                  </div>
                </div>
              </div>
            </figure>

            <aside className="growth-panel" aria-label="小米增长实验结果">
              <div className="growth-title">
                <span>小米 · 增长实验</span>
                <strong>把优化假设放进真实漏斗</strong>
              </div>
              <div className="donut-row">
                <div className="donut donut-80" role="img" aria-label="百分之八十的 A/B 实验取得正向结果">
                  <span><strong>80%</strong><small>正向实验</small></span>
                </div>
                <div className="delta-block">
                  <span>最佳方案</span>
                  <strong>+13.6%</strong>
                  <small>支付转化率提升</small>
                </div>
              </div>
              <div className="experiment-scale">
                <span>10+ 组 A/B 测试</span>
                <span>5,500 万+ 活动曝光</span>
                <span>2 项功能迭代</span>
              </div>
            </aside>
          </div>

          <div className="evidence-ledger" aria-label="项目证据规模">
            <div className="ledger-heading">
              <span>EVIDENCE SCALE</span>
              <strong>从样本、测试到迭代</strong>
            </div>
            <div className="ledger-item">
              <strong>5,000</strong>
              <span>条内容样本</span>
              <small>百度 · 图文创作</small>
            </div>
            <div className="ledger-item">
              <strong>20</strong>
              <span>组模型测试</span>
              <small>百度 · AI 短剧</small>
            </div>
            <div className="ledger-item">
              <strong>100+</strong>
              <span>条儿童反馈</span>
              <small>Media Cube</small>
            </div>
            <div className="ledger-item">
              <strong>26</strong>
              <span>项实验指标</span>
              <small>Co-Dial</small>
            </div>
            <div className="ledger-item">
              <strong>4</strong>
              <span>个课堂班级</span>
              <small>真实场景试用</small>
            </div>
            <div className="ledger-item">
              <strong>3</strong>
              <span>轮产品迭代</span>
              <small>行为数据驱动</small>
            </div>
          </div>
        </section>

        <section className="section shell" id="projects">
          <div className="section-heading">
            <div>
              <p className="kicker">SELECTED WORK / 01—04</p>
              <h2>项目经历</h2>
            </div>
            <p className="section-note">
              从问题定义、核心链路与 Agent 策略，到技术实现、课堂实验和行为数据验证。
            </p>
          </div>

          <div className="flagship-list">
            {orderedFlagshipProjects.map((project, projectIndex) => (
              <article className={`flagship-card card-${projectIndex + 1}`} key={project.title}>
                <div className="project-visual">
                  <img
                    className={project.title === "趋光本能" ? "crop-left-5" : undefined}
                    src={project.image}
                    alt={project.imageAlt}
                  />
                  <span className="project-index">{project.index}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-intro">{project.intro}</p>
                  <ul className="metric-row" aria-label={`${project.title} 关键成果`}>
                    {project.metrics.map((metric) => (
                      <li key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </li>
                    ))}
                  </ul>
                  <details className="case-details">
                    <summary>展开案例拆解 <span aria-hidden="true">＋</span></summary>
                    <ol>
                      {project.points.map((point) => <li key={point}>{point}</li>)}
                    </ol>
                  </details>
                  {project.link ? (
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                      {project.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="research">
          <div className="section-heading compact">
            <div>
              <p className="kicker">RESEARCH AS PRODUCT INSIGHT</p>
              <h2>研究经历</h2>
            </div>
            <p className="section-note">研究不是单独的成果陈列，而是对 AI 产品边界、信任与控制感的长期理解。</p>
          </div>
          <div className="research-grid">
            {research.map((item, index) => (
              <article className="research-card" key={item.title}>
                <div className="research-topline">
                  <span>{item.venue}</span>
                  <strong>R{index + 1}</strong>
                </div>
                <h3>{item.title}</h3>
                <p className="research-subtitle">{item.subtitle}</p>
                <div className="research-stats" aria-label={`${item.title} 研究数据`}>
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <p>{item.detail}</p>
                <a className="research-link" href={item.link} target="_blank" rel="noreferrer">
                  查看 ACM 论文 <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section archive-section">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <p className="kicker">EARLY WORK / 2021—2023</p>
                <h2>早期作品</h2>
              </div>
              <a className="text-link" href="/files/冯哲宇-早期作品集.pdf" target="_blank">
                查看 13 页原始作品集 <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="archive-grid">
              {archiveProjects.map((project) => (
                <article className="archive-card" key={project.title}>
                  <div className="archive-image"><img src={project.image} alt={project.alt} /></div>
                  <div className="archive-copy">
                    <div className="archive-meta">
                      <strong>{project.year}</strong>
                      <span>{project.type}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="about-grid">
            <div className="about-intro">
              <p className="kicker">ABOUT / EDUCATION</p>
              <h2>教育经历</h2>
              <p>
                我喜欢把看似“聪明”的技术拆成用户能理解、能修改、能信任的交互过程，也习惯在上线后继续通过行为与数据寻找答案。
              </p>
              <div className="education-list">
                <div>
                  <span>2025—2028</span>
                  <strong>中国传媒大学 · 交互与智能设计 硕士（保研）</strong>
                </div>
                <div>
                  <span>2020—2024</span>
                  <strong>中国传媒大学 · 数字媒体艺术 本科</strong>
                  <small>GPA <b>3.88 / 4.00</b> · 专业排名 <b>2 / 34</b></small>
                </div>
              </div>
            </div>
            <div className="about-panels">
              <article className="award-panel lime-panel">
                <p className="mini-label">HONORS</p>
                <h3>国家奖学金<br />北京市优秀毕业生<br />北京市三好学生</h3>
                <span>NOIP 浙江赛区一等奖</span>
              </article>
              <article className="award-panel blue-panel">
                <p className="mini-label">BEYOND PRODUCT</p>
                <h3>学生组织与教育现场</h3>
                <p>统筹 10+ 场双选会，促成 48 家企业提供 149 个岗位；曾赴内蒙古支教，担任一年级数学教师与副班主任。</p>
              </article>
            </div>
          </div>

          <div className="skills-block">
            <div className="skills-heading">
              <p className="kicker">TOOLKIT</p>
              <h2>能力地图</h2>
              <p>不是工具清单，而是一条从问题发现到数据验证的 AI 产品闭环。</p>
            </div>
            <div className="capability-map" aria-label="AI 产品能力闭环：理解问题、组织 AI、构建体验、验证结果">
              <div className="capability-core">
                <div>
                  <span>AI PRODUCT LOOP</span>
                  <strong>让能力沿着<br />真实任务流动</strong>
                </div>
                <div className="capability-count" aria-label="四个产品阶段，十二项核心能力">
                  <p><strong>4</strong><span>个产品阶段</span></p>
                  <p><strong>12</strong><span>项核心能力</span></p>
                </div>
              </div>
              <ol className="capability-loop">
                {skillStages.map((stage) => (
                  <li key={stage.index}>
                    <div className="stage-head">
                      <span className="stage-index">{stage.index}</span>
                      <div>
                        <small>{stage.label}</small>
                        <h3>{stage.title}</h3>
                      </div>
                    </div>
                    <div className="stage-skills">
                      {stage.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <footer className="footer shell">
          <div className="footer-main">
            <p className="kicker light">LET&apos;S BUILD SOMETHING USEFUL</p>
            <h2>让 AI 真正进入<br />用户的任务里。</h2>
            <div className="footer-actions">
              <a className="button button-lime" href="mailto:fengzheyu2002@cuc.edu.cn">
                发邮件给我 <span aria-hidden="true">↗</span>
              </a>
              <a className="footer-contact" href="tel:+8618257426572">+86 182 5742 6572</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>冯哲宇 · AI 产品经理 / 生成式体验设计</span>
            <a href="#top">回到顶部 ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
