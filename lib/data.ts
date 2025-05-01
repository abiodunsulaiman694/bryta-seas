// Service data
export type Service = {
  id: string
  title: string
  slug: string
  icon: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  caseStudies: {
    title: string
    description: string
  }[]
}

// Update the services array with the new services provided
export const services: Service[] = [
  {
    id: "1",
    title: "Sustainability Storytelling",
    slug: "sustainability-storytelling",
    icon: "MessageSquare",
    shortDescription:
      "Crafting compelling narratives that showcase your sustainability journey, impact, and leadership.",
    fullDescription:
      "Our Sustainability Storytelling service helps maritime companies effectively communicate their environmental initiatives and achievements. We craft authentic, engaging narratives that resonate with stakeholders, highlight your sustainability journey, and position your organization as a leader in maritime sustainability.",
    benefits: [
      "Build authentic brand narratives around your sustainability efforts",
      "Engage stakeholders with compelling stories of impact",
      "Differentiate your organization in a competitive market",
      "Increase visibility of your sustainability initiatives",
      "Create emotional connections with your audience",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We conduct in-depth interviews and research to understand your sustainability initiatives, values, and goals.",
      },
      {
        title: "Narrative Development",
        description:
          "Our team crafts a compelling narrative framework that authentically represents your sustainability journey.",
      },
      {
        title: "Content Creation",
        description:
          "We develop engaging stories across various formats, including articles, case studies, videos, and presentations.",
      },
      {
        title: "Distribution Strategy",
        description:
          "We help you identify the most effective channels to share your sustainability stories with target audiences.",
      },
      {
        title: "Measurement & Refinement",
        description:
          "We track engagement and impact, continuously refining your sustainability narrative for maximum effectiveness.",
      },
    ],
    caseStudies: [
      {
        title: "Global Container Shipping Line",
        description:
          "Developed a comprehensive sustainability storytelling strategy that increased stakeholder engagement by 45% and secured feature coverage in three major maritime publications.",
      },
      {
        title: "European Port Authority",
        description:
          "Created a series of impact stories highlighting environmental initiatives that resulted in improved community relations and recognition as an industry sustainability leader.",
      },
    ],
  },
  {
    id: "2",
    title: "Strategic Communications & Brand Positioning",
    slug: "strategic-communications",
    icon: "BarChart3",
    shortDescription:
      "Building clear messaging and communication strategies tailored for maritime audiences and stakeholders.",
    fullDescription:
      "Our Strategic Communications & Brand Positioning service helps maritime companies develop clear, consistent messaging that resonates with industry stakeholders. We create comprehensive communication strategies that effectively convey your value proposition, sustainability commitments, and industry leadership.",
    benefits: [
      "Establish a clear, consistent brand voice across all channels",
      "Effectively communicate complex sustainability initiatives to diverse stakeholders",
      "Build credibility and trust with industry partners and regulators",
      "Align internal and external communications for maximum impact",
      "Position your organization as a thought leader in maritime sustainability",
    ],
    process: [
      {
        title: "Brand Audit",
        description: "We analyze your current brand positioning, messaging, and communication strategies.",
      },
      {
        title: "Stakeholder Analysis",
        description: "Our team identifies key stakeholders and their information needs, preferences, and pain points.",
      },
      {
        title: "Strategy Development",
        description:
          "We create a comprehensive communication strategy aligned with your business objectives and sustainability goals.",
      },
      {
        title: "Messaging Framework",
        description:
          "We develop clear, compelling messaging that effectively communicates your value proposition and sustainability commitments.",
      },
      {
        title: "Implementation Support",
        description: "Our team helps you roll out your communication strategy across all channels and touchpoints.",
      },
    ],
    caseStudies: [
      {
        title: "International Shipping Company",
        description:
          "Developed a comprehensive brand positioning strategy that helped the company successfully reposition from a traditional shipping provider to a sustainable logistics partner.",
      },
      {
        title: "Maritime Technology Provider",
        description:
          "Created a strategic communications plan that effectively communicated the environmental benefits of new technology, resulting in a 30% increase in qualified leads.",
      },
    ],
  },
  {
    id: "3",
    title: "ESG & Sustainability Report Writing",
    slug: "esg-sustainability-reporting",
    icon: "FileText",
    shortDescription:
      "Writing, editing, and visually shaping ESG and sustainability reports that meet industry standards.",
    fullDescription:
      "Our ESG & Sustainability Report Writing service helps maritime companies create comprehensive, compelling reports that effectively communicate their environmental, social, and governance performance. We ensure your reports meet industry standards, stakeholder expectations, and regulatory requirements while telling your sustainability story.",
    benefits: [
      "Produce professional reports that meet global reporting standards",
      "Effectively communicate complex ESG data to diverse stakeholders",
      "Highlight sustainability achievements and progress toward goals",
      "Enhance transparency and build trust with investors and partners",
      "Streamline the reporting process to reduce internal resource demands",
    ],
    process: [
      {
        title: "Reporting Framework Selection",
        description:
          "We help you select the most appropriate reporting frameworks based on your industry, size, and stakeholder expectations.",
      },
      {
        title: "Data Collection & Analysis",
        description: "Our team works with you to gather and analyze relevant ESG data and performance metrics.",
      },
      {
        title: "Narrative Development",
        description:
          "We craft a compelling narrative that contextualizes your ESG performance and highlights key initiatives and achievements.",
      },
      {
        title: "Report Writing & Design",
        description:
          "We create a professional, visually engaging report that effectively communicates your sustainability story.",
      },
      {
        title: "Review & Finalization",
        description: "We manage the review process, incorporating feedback and ensuring accuracy before publication.",
      },
    ],
    caseStudies: [
      {
        title: "Global Shipping Fleet",
        description:
          "Developed an award-winning sustainability report that effectively communicated complex emissions reduction initiatives and received recognition for excellence in transparency.",
      },
      {
        title: "Port Management Company",
        description:
          "Created a comprehensive ESG report that helped secure favorable financing terms and strengthened relationships with community stakeholders.",
      },
    ],
  },
  {
    id: "4",
    title: "Media Relations & Thought Leadership",
    slug: "media-relations-thought-leadership",
    icon: "Newspaper",
    shortDescription:
      "Creating press releases, securing media coverage, and amplifying expert insights across platforms.",
    fullDescription:
      "Our Media Relations & Thought Leadership service helps maritime companies build visibility and credibility through strategic media engagement and expert content. We develop and execute comprehensive media strategies that position your organization and leaders as authoritative voices in maritime sustainability.",
    benefits: [
      "Increase visibility in industry and mainstream media",
      "Position your leaders as recognized experts in maritime sustainability",
      "Build credibility with stakeholders through third-party validation",
      "Shape industry conversations around key sustainability topics",
      "Amplify your sustainability message to broader audiences",
    ],
    process: [
      {
        title: "Media Landscape Analysis",
        description: "We analyze relevant media outlets, journalists, and current industry narratives.",
      },
      {
        title: "Thought Leadership Strategy",
        description: "Our team identifies key topics and platforms where your expertise can make the greatest impact.",
      },
      {
        title: "Content Development",
        description:
          "We create compelling press releases, bylined articles, opinion pieces, and interview talking points.",
      },
      {
        title: "Media Outreach",
        description: "We leverage our network of media contacts to secure coverage and interview opportunities.",
      },
      {
        title: "Amplification",
        description:
          "We help you maximize the impact of media coverage through strategic sharing across owned channels.",
      },
    ],
    caseStudies: [
      {
        title: "Maritime Technology Innovator",
        description:
          "Secured feature coverage in five major industry publications and speaking opportunities at three international conferences, establishing the CEO as a recognized authority on green shipping technology.",
      },
      {
        title: "Sustainable Shipping Initiative",
        description:
          "Developed a thought leadership program that resulted in regular media commentary opportunities and a 60% increase in industry engagement with the organization's research.",
      },
    ],
  },
  {
    id: "5",
    title: "Digital Content & Campaigns",
    slug: "digital-content-campaigns",
    icon: "Laptop",
    shortDescription:
      "Developing content for websites, blogs, social media, and email that drives engagement and visibility.",
    fullDescription:
      "Our Digital Content & Campaigns service helps maritime companies create engaging, strategic content across digital channels. We develop comprehensive content strategies and campaigns that increase visibility, drive engagement, and effectively communicate your sustainability story to target audiences.",
    benefits: [
      "Increase digital visibility and engagement with key stakeholders",
      "Build a consistent content presence that reinforces your sustainability message",
      "Drive traffic to your website and convert visitors into leads",
      "Establish thought leadership through valuable, relevant content",
      "Create measurable digital campaigns with clear ROI",
    ],
    process: [
      {
        title: "Digital Audit",
        description: "We analyze your current digital presence, content performance, and audience engagement.",
      },
      {
        title: "Strategy Development",
        description:
          "Our team creates a comprehensive digital content strategy aligned with your business and sustainability goals.",
      },
      {
        title: "Content Creation",
        description:
          "We develop engaging content across formats, including articles, videos, infographics, and social media posts.",
      },
      {
        title: "Campaign Execution",
        description:
          "We help you implement targeted digital campaigns that reach and resonate with your key audiences.",
      },
      {
        title: "Measurement & Optimization",
        description: "We track performance metrics and continuously optimize your digital content for maximum impact.",
      },
    ],
    caseStudies: [
      {
        title: "Sustainable Shipping Coalition",
        description:
          "Developed a digital awareness campaign that increased website traffic by 75% and generated over 500 qualified leads from potential member organizations.",
      },
      {
        title: "Green Maritime Technology Provider",
        description:
          "Created a content marketing program that established the company as a thought leader, resulting in a 40% increase in inbound inquiries and 25% shorter sales cycles.",
      },
    ],
  },
  {
    id: "6",
    title: "Web Content Optimization",
    slug: "web-content-optimization",
    icon: "Globe",
    shortDescription:
      "Improving your website's messaging, structure, and SEO to effectively reach and resonate with your target audience.",
    fullDescription:
      "Our Web Content Optimization service helps maritime companies enhance their digital presence through strategic website improvements. We optimize your website's content, structure, and SEO to effectively communicate your sustainability story, improve user experience, and drive meaningful engagement with target audiences.",
    benefits: [
      "Improve search engine visibility for key sustainability terms",
      "Enhance user experience and engagement on your website",
      "Clearly communicate your sustainability initiatives and impact",
      "Increase conversion rates for key website actions",
      "Build a digital foundation that supports all marketing efforts",
    ],
    process: [
      {
        title: "Website Audit",
        description: "We conduct a comprehensive analysis of your current website content, structure, and performance.",
      },
      {
        title: "SEO Strategy",
        description:
          "Our team develops a search engine optimization strategy focused on relevant industry and sustainability keywords.",
      },
      {
        title: "Content Optimization",
        description: "We revise and enhance website content to improve clarity, engagement, and search visibility.",
      },
      {
        title: "Structure Improvements",
        description:
          "We recommend and implement changes to site architecture to improve user experience and content discovery.",
      },
      {
        title: "Ongoing Optimization",
        description:
          "We provide recommendations for continuous improvement based on performance data and industry trends.",
      },
    ],
    caseStudies: [
      {
        title: "International Maritime Services Provider",
        description:
          "Optimized website content and structure, resulting in a 65% increase in organic traffic and 45% improvement in time spent on sustainability pages.",
      },
      {
        title: "Green Shipping Certification Program",
        description:
          "Revamped program website with optimized content, increasing application submissions by 50% and reducing bounce rates by 35%.",
      },
    ],
  },
]

// Insight data
export type Insight = {
  id: string
  title: string
  slug: string
  category: string
  date: string
  author: string
  excerpt: string
  content: string
  image: string
}

export const insights: Insight[] = [
  {
    id: "1",
    title: "Navigating Green Compliance in The Maritime Industry",
    slug: "navigating-green-compliance",
    category: "Compliance",
    date: "2025-04-15",
    author: "Emma Johnson",
    excerpt: "Learn about the latest regulations and how to ensure your fleet stays compliant.",
    content: `
      <h2>Understanding the Evolving Regulatory Landscape</h2>
      <p>The maritime industry is facing unprecedented regulatory pressure to reduce its environmental impact. From the IMO's ambitious goals to reduce greenhouse gas emissions by at least 50% by 2050 compared to 2008 levels, to regional regulations like the EU's inclusion of shipping in its Emissions Trading System, shipowners and operators must navigate an increasingly complex compliance landscape.</p>
      
      <h2>Key Regulations Affecting Maritime Operations</h2>
      <p>Several key regulations are reshaping maritime operations:</p>
      <ul>
        <li><strong>IMO 2020 Sulfur Cap:</strong> Limiting the sulfur content in marine fuels to 0.5%.</li>
        <li><strong>Ballast Water Management Convention:</strong> Requiring ships to manage their ballast water to remove, render harmless, or avoid the uptake of organisms and pathogens.</li>
        <li><strong>Energy Efficiency Design Index (EEDI):</strong> Mandating minimum energy efficiency levels for new ships.</li>
        <li><strong>Carbon Intensity Indicator (CII):</strong> Rating ships based on their operational carbon intensity.</li>
        <li><strong>EU Emissions Trading System (ETS):</strong> Including maritime transport in the EU's carbon market from 2024.</li>
      </ul>
      
      <h2>Strategies for Ensuring Compliance</h2>
      <p>To navigate this complex regulatory environment, maritime companies should consider the following strategies:</p>
      <ol>
        <li><strong>Develop a Compliance Roadmap:</strong> Create a comprehensive plan that addresses current and upcoming regulations.</li>
        <li><strong>Invest in Technology:</strong> Implement systems for monitoring, reporting, and verifying emissions and other environmental impacts.</li>
        <li><strong>Train Your Crew:</strong> Ensure all personnel understand compliance requirements and their role in meeting them.</li>
        <li><strong>Regular Audits:</strong> Conduct thorough internal audits to identify and address compliance gaps before they become issues.</li>
        <li><strong>Stay Informed:</strong> Maintain awareness of regulatory developments and industry best practices.</li>
      </ol>
      
      <h2>The Business Case for Proactive Compliance</h2>
      <p>While achieving and maintaining compliance requires investment, the business case is compelling:</p>
      <ul>
        <li>Avoiding costly penalties and operational disruptions</li>
        <li>Gaining competitive advantage through early adoption</li>
        <li>Improving operational efficiency and reducing fuel costs</li>
        <li>Enhancing reputation with customers, investors, and other stakeholders</li>
        <li>Preparing for a future where environmental performance is increasingly tied to market access</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Green compliance is no longer optional in the maritime industry—it's a fundamental aspect of business operations. By taking a proactive, strategic approach to compliance, maritime companies can not only avoid penalties but also position themselves for success in an increasingly environmentally conscious market.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "2",
    title: "Building a Strong Maritime ESG Reputation",
    slug: "building-strong-esg-reputation",
    category: "ESG",
    date: "2025-03-28",
    author: "Michael Chen",
    excerpt: "Strategies to enhance your company's environmental, social, and governance profile.",
    content: `
      <h2>The Growing Importance of ESG in Maritime</h2>
      <p>Environmental, Social, and Governance (ESG) considerations have moved from the periphery to the center of maritime business strategy. Investors, customers, regulators, and the public increasingly expect shipping companies to demonstrate strong ESG performance. This shift represents both a challenge and an opportunity for maritime businesses.</p>
      
      <h2>Key Components of a Strong Maritime ESG Profile</h2>
      <p>A robust ESG profile in the maritime sector encompasses:</p>
      <ul>
        <li><strong>Environmental:</strong> Emissions reduction, energy efficiency, waste management, biodiversity protection, and climate risk mitigation.</li>
        <li><strong>Social:</strong> Crew welfare, diversity and inclusion, community relations, human rights in the supply chain, and health and safety.</li>
        <li><strong>Governance:</strong> Ethical business practices, transparency, board diversity and independence, risk management, and regulatory compliance.</li>
      </ul>
      
      <h2>Building Your Maritime ESG Reputation</h2>
      <p>Developing a strong ESG reputation requires a strategic approach:</p>
      <ol>
        <li><strong>Assess Your Current Position:</strong> Conduct a thorough assessment of your existing ESG performance and reputation.</li>
        <li><strong>Set Clear Goals:</strong> Establish specific, measurable, achievable, relevant, and time-bound (SMART) ESG objectives.</li>
        <li><strong>Integrate ESG into Business Strategy:</strong> Ensure ESG considerations are embedded in strategic decision-making at all levels.</li>
        <li><strong>Measure and Report:</strong> Implement robust systems for measuring ESG performance and report transparently using recognized frameworks.</li>
        <li><strong>Communicate Effectively:</strong> Develop a clear communication strategy to share your ESG journey with stakeholders.</li>
      </ol>
      
      <h2>The Business Benefits of a Strong ESG Reputation</h2>
      <p>Investing in your ESG reputation delivers tangible business benefits:</p>
      <ul>
        <li>Improved access to capital and favorable financing terms</li>
        <li>Enhanced ability to attract and retain top talent</li>
        <li>Stronger relationships with customers who prioritize sustainability</li>
        <li>Reduced regulatory and reputational risks</li>
        <li>Long-term business resilience in a changing market</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>In today's maritime industry, a strong ESG reputation is not just about doing good—it's about doing good business. By taking a strategic approach to building and communicating your ESG performance, you can create lasting value for your company and contribute to a more sustainable maritime sector.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "3",
    title: "Effective Carbon Reporting Strategies For Shipowners",
    slug: "carbon-reporting-strategies",
    category: "Carbon Management",
    date: "2025-02-10",
    author: "Sarah Martinez",
    excerpt: "Best practices for tracking and reporting your fleet's carbon emissions.",
    content: `
      <h2>The Evolving Landscape of Maritime Carbon Reporting</h2>
      <p>Carbon reporting has become a critical aspect of maritime operations, driven by regulatory requirements, market pressures, and the industry's commitment to reducing its environmental impact. Effective carbon reporting is no longer optional—it's essential for compliance, stakeholder relations, and strategic decision-making.</p>
      
      <h2>Key Carbon Reporting Frameworks for Maritime</h2>
      <p>Shipowners must navigate several reporting frameworks:</p>
      <ul>
        <li><strong>IMO Data Collection System (DCS):</strong> Mandatory global system for collecting and reporting fuel consumption data from ships.</li>
        <li><strong>EU Monitoring, Reporting and Verification (MRV):</strong> Requires ships calling at EU ports to monitor and report CO2 emissions and other relevant information.</li>
        <li><strong>Sea Cargo Charter:</strong> Framework for assessing and disclosing the climate alignment of ship chartering activities.</li>
        <li><strong>Poseidon Principles:</strong> Framework for financial institutions to assess and disclose the climate alignment of their shipping portfolios.</li>
        <li><strong>Carbon Disclosure Project (CDP):</strong> Global disclosure system for environmental reporting used by many stakeholders.</li>
      </ul>
      
      <h2>Best Practices for Effective Carbon Reporting</h2>
      <p>To develop robust carbon reporting processes, consider these best practices:</p>
      <ol>
        <li><strong>Implement Automated Data Collection:</strong> Utilize digital solutions to streamline the collection of fuel consumption and operational data.</li>
        <li><strong>Ensure Data Quality:</strong> Establish verification processes to maintain the accuracy and reliability of emissions data.</li>
        <li><strong>Standardize Calculation Methodologies:</strong> Apply consistent methodologies aligned with recognized frameworks.</li>
        <li><strong>Integrate with Business Systems:</strong> Connect carbon reporting with existing business intelligence and management systems.</li>
        <li><strong>Provide Context and Analysis:</strong> Go beyond raw data to include analysis, trends, and progress against targets.</li>
      </ol>
      
      <h2>Leveraging Carbon Data for Business Advantage</h2>
      <p>Effective carbon reporting provides opportunities beyond compliance:</p>
      <ul>
        <li>Identifying operational inefficiencies and cost-saving opportunities</li>
        <li>Informing fleet renewal and retrofit decisions</li>
        <li>Supporting access to green financing and sustainability-linked loans</li>
        <li>Strengthening relationships with environmentally conscious charterers and customers</li>
        <li>Preparing for carbon pricing and market-based measures</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>As the maritime industry continues its decarbonization journey, effective carbon reporting will be increasingly important. By implementing robust reporting strategies now, shipowners can not only meet compliance requirements but also gain valuable insights that drive business performance and environmental improvement.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
]

// Team data
export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Emma Johnson",
    role: "CEO & Founder",
    bio: "Emma has over 20 years of experience in the maritime industry, with a focus on environmental compliance and sustainability. Before founding Bryta Seas, she served as the Sustainability Director for a major international shipping company.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Head of ESG Strategy",
    bio: "Michael brings 15 years of experience in ESG reporting and strategy development. His background includes roles at leading sustainability consultancies and a position on the IMO's expert panel on greenhouse gas emissions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Sarah Martinez",
    role: "Director of Carbon Management",
    bio: "Sarah is an expert in carbon accounting and emissions reduction strategies. With a background in environmental engineering and policy development, she helps clients navigate the complex landscape of carbon management and reporting.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Head of Compliance",
    bio: "James has extensive experience in maritime regulatory compliance. His background includes roles at classification societies and flag state administrations, giving him unique insight into navigating complex regulatory requirements.",
    image: "/placeholder.svg?height=300&width=300",
  },
]
