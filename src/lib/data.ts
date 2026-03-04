import type { Service, CaseStudy, ProcessStep, Metric } from "@/types";

export const services: Service[] = [
  {
    slug: "agent-design",
    title: "AI Agent Design & Deployment",
    shortTitle: "Agent Design",
    description:
      "Custom-built AI agents tailored to your workflows, data, and business logic.",
    longDescription:
      "We design, build, and deploy custom AI agents that integrate directly into your business workflows. Not chatbots. Not demos. Production-grade autonomous systems that handle real decisions with real data.",
    icon: "agent",
    useCases: [
      "Custom chatbots and virtual assistants trained on your business data",
      "Multi-agent workflows that coordinate across departments",
      "Autonomous agents that monitor, decide, and act without human intervention",
      "Integration with existing tools — Slack, CRM, ERP, email, databases",
    ],
    problem:
      "Your business is drowning in manual processes, tribal knowledge, and siloed data. You\u2019ve seen what AI can do but every \u2018solution\u2019 you\u2019ve been offered is either a generic chatbot or a 6-month consulting engagement that ends with a report, not a product.",
    approach: [
      {
        title: "Discovery & Mapping",
        desc: "We map your workflows, data sources, and decision points to identify exactly where agents add value.",
      },
      {
        title: "Agent Architecture",
        desc: "We design the system \u2014 which agents, what they do, how they communicate, what data they need.",
      },
      {
        title: "Build & Integrate",
        desc: "We build the agents using the best models for the task and integrate them with your existing tools.",
      },
      {
        title: "Deploy & Monitor",
        desc: "We deploy into your environment with monitoring, alerting, and continuous improvement built in.",
      },
    ],
    relatedCaseStudy: "stockpilot",
    ctaHeading: "Ready to deploy your first AI agent?",
  },
  {
    slug: "ai-marketing",
    title: "AI-Powered Marketing",
    shortTitle: "AI Marketing",
    description:
      "Intelligent ad management, content generation, and pipeline automation.",
    longDescription:
      "We replace the traditional agency model with AI-native marketing systems. Automated ad creation, intelligent targeting, real-time optimisation, and reporting \u2014 all running autonomously.",
    icon: "marketing",
    useCases: [
      "AI-generated ad creatives and copy tailored to your brand voice",
      "Automated audience targeting and budget optimisation across platforms",
      "Content calendar management with AI-driven scheduling",
      "Real-time performance dashboards with automated reporting",
    ],
    problem:
      "Traditional marketing agencies burn budget on headcount \u2014 strategists, copywriters, designers, media buyers \u2014 and still can\u2019t personalise at scale. Campaign turnaround takes weeks. Reporting is manual. Optimisation is reactive, not predictive.",
    approach: [
      {
        title: "Audit & Strategy",
        desc: "We analyse your current marketing stack, spend, and performance to identify the highest-impact automation opportunities.",
      },
      {
        title: "Agent Design",
        desc: "We architect the AI agents \u2014 creative generation, targeting, buying, reporting \u2014 each specialised for its role.",
      },
      {
        title: "Platform Integration",
        desc: "We connect to your ad platforms (Meta, Google, TikTok, LinkedIn) and existing marketing tools.",
      },
      {
        title: "Launch & Optimise",
        desc: "We launch the system, monitor performance, and continuously refine the agents based on real results.",
      },
    ],
    relatedCaseStudy: "smma-pipeline",
    ctaHeading: "Ready to automate your marketing?",
  },
  {
    slug: "automation",
    title: "Process Automation",
    shortTitle: "Automation",
    description:
      "From lead conversion to inventory management \u2014 AI that runs your operations.",
    longDescription:
      "We automate operational processes that are bleeding time and money \u2014 inventory, lead routing, energy management, document handling. AI agents that monitor, decide, and act in real time.",
    icon: "automation",
    useCases: [
      "Lead scoring and conversion automation for sales teams",
      "Inventory and supply chain optimisation for retail and hospitality",
      "Energy monitoring and cost reduction for property portfolios",
      "Document processing and data extraction from unstructured sources",
    ],
    problem:
      "Operational processes \u2014 inventory, lead routing, energy management, document handling \u2014 are still run on spreadsheets, gut feel, and manual checks. Errors compound. Opportunities slip. The data exists but nobody\u2019s reading it in real time.",
    approach: [
      {
        title: "Process Mapping",
        desc: "We document every step of the process \u2014 inputs, decisions, outputs, exceptions \u2014 to understand exactly what to automate.",
      },
      {
        title: "Data Pipeline",
        desc: "We build the data connections \u2014 APIs, webhooks, scrapers \u2014 to feed real-time information to the agents.",
      },
      {
        title: "Agent Deployment",
        desc: "We deploy agents that monitor data streams, make decisions based on your rules, and take action automatically.",
      },
      {
        title: "Continuous Improvement",
        desc: "We track performance, identify edge cases, and refine the agents to handle increasingly complex scenarios.",
      },
    ],
    relatedCaseStudy: "energy-management",
    ctaHeading: "Ready to automate your operations?",
  },
  {
    slug: "consulting",
    title: "Strategic AI Consulting",
    shortTitle: "AI Consulting",
    description:
      "We audit your business and identify exactly where AI delivers the highest ROI.",
    longDescription:
      "We audit your business and tell you exactly where AI will \u2014 and won\u2019t \u2014 make a difference. No vendor pitches. No tool recommendations. Just honest analysis of your highest-ROI opportunities.",
    icon: "consulting",
    useCases: [
      "Full AI readiness audit \u2014 where are the opportunities in your business?",
      "Build vs buy analysis for AI tools and platforms",
      "AI strategy roadmap aligned to your business goals and budget",
      "Team training and upskilling for AI adoption",
    ],
    problem:
      "Most businesses know AI matters but don\u2019t know where to start. They\u2019ve sat through vendor pitches for tools that solve problems they don\u2019t have. They need someone who\u2019ll look at their actual workflows and tell them where AI will \u2014 and won\u2019t \u2014 make a difference.",
    approach: [
      {
        title: "Business Immersion",
        desc: "We spend time with your teams understanding workflows, pain points, data, and decision-making processes.",
      },
      {
        title: "Opportunity Mapping",
        desc: "We identify every potential AI application, score them by impact and feasibility, and rank them.",
      },
      {
        title: "Strategy & Roadmap",
        desc: "We deliver a clear roadmap \u2014 what to build first, what to wait on, what to skip \u2014 with timelines and budgets.",
      },
      {
        title: "Execution Support",
        desc: "If you want us to build it, we build it. If you want to build internally, we help you hire and onboard.",
      },
    ],
    ctaHeading: "Ready to find your AI opportunity?",
  },
];
export const caseStudies: CaseStudy[] = [
  {
    slug: "stockpilot",
    title: "StockPilot",
    client: "Premium London Restaurant & Members Club",
    industry: "Hospitality",
    service: "Process Automation & Operational AI",
    challenge:
      "Manual inventory management across a high-volume, multi-outlet venue was creating waste, over-ordering, and stockouts during peak service. Staff were spending 10+ hours per week on procurement tasks that could be systematised.",
    solution:
      "Aygency designed and deployed StockPilot — a two-agent AI system. Agent 1 monitors real-time inventory levels, consumption patterns, and waste data. Agent 2 handles automated procurement recommendations, supplier communication, and reorder triggers. The system integrates directly with the venue's existing POS and supplier platforms.",
    results: [
      "Procurement time reduced by 80%",
      "Food waste reduced by 25% in first month",
      "Stockout incidents reduced to near-zero",
      "System live within 3 weeks of engagement",
    ],
    quote:
      "We went from guessing to knowing. The system paid for itself in the first month.",
    quoteAttribution: "Operations Director",
    tech: [
      "Custom AI agents",
      "POS integration",
      "Supplier API connections",
      "Real-time monitoring dashboard",
    ],
    keyMetric: { value: "80%", label: "Reduction in procurement time" },
  },
  {
    slug: "energy-management",
    title: "Energy & Utilities Agent",
    client: "Multi-Site UK Property Operator",
    industry: "Real Estate",
    service: "Process Automation & Operational AI",
    challenge:
      "A property operator managing multiple sites across the UK had no centralised visibility into energy consumption. Utility costs were rising with no clear attribution to specific buildings, systems, or usage patterns.",
    solution:
      "Aygency built an AI-powered energy monitoring agent that aggregates consumption data across all sites, identifies anomalies and waste patterns, benchmarks buildings against each other, and generates actionable recommendations for cost reduction.",
    results: [
      "Full energy visibility across all sites within 2 weeks",
      "Identified 15-20% potential cost savings in first audit",
      "Anomaly detection flagged faulty HVAC systems within days",
      "Automated reporting eliminated 8+ hours of manual work per month",
    ],
    quote:
      "For the first time, we could see exactly where every pound was going — and where it was being wasted.",
    quoteAttribution: "Head of Operations",
    tech: [
      "Energy data aggregation",
      "Anomaly detection AI",
      "Automated reporting",
      "Multi-site benchmarking",
    ],
    keyMetric: { value: "15-20%", label: "Potential cost savings identified" },
  },
  {
    slug: "smma-pipeline",
    title: "AI-Native SMMA Pipeline",
    client: "Internal Capability / White-Label",
    industry: "Digital Marketing",
    service: "AI-Powered Marketing & Ads",
    challenge:
      "Traditional social media marketing agencies run on headcount — account managers, creatives, media buyers, analysts. This model doesn't scale and margins compress as client rosters grow.",
    solution:
      "Aygency architected an eight-agent AI system that replaces the core functions of a traditional SMMA. Agents handle ad creative generation, audience targeting, media buying optimisation, performance analytics, client communication, content scheduling, A/B testing orchestration, and pipeline management.",
    results: [
      "8 AI agents replacing traditional agency headcount",
      "Ad creative turnaround reduced from days to minutes",
      "Real-time performance optimisation with no manual intervention",
      "Scalable to 20+ concurrent client accounts",
    ],
    quote:
      "This isn't an agency with AI tools. It's an AI system that happens to be an agency.",
    quoteAttribution: "Founder",
    tech: [
      "Multi-agent orchestration",
      "Ad platform API integration",
      "Generative AI for creatives",
      "Automated reporting pipelines",
    ],
    keyMetric: { value: "8", label: "AI agents deployed" },
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "You tell us the pain point. We diagnose the opportunity, map your workflows, and identify where AI will have the biggest impact.",
  },
  {
    number: 2,
    title: "Architecture",
    description:
      "We design the agent system — models, data flows, integrations, and deployment strategy. You approve before we write a line of code.",
  },
  {
    number: 3,
    title: "Build & Deploy",
    description:
      "We build it, test it, and deploy it into your environment. Live agents, working with your real data, in your real workflows.",
  },
  {
    number: 4,
    title: "Measure & Iterate",
    description:
      "We track ROI, gather feedback, and refine. Every agent gets smarter over time. You see the numbers move.",
  },
];

export const metrics: Metric[] = [
  { value: "12+", label: "Agents Deployed", numericValue: 12 },
  { value: "3", label: "Avg. Deployment Time", suffix: "wk", numericValue: 3 },
  {
    value: "40%+",
    label: "Average Client ROI Increase",
    numericValue: 40,
  },
  { value: "5+", label: "Industries Served", numericValue: 5 },
];
