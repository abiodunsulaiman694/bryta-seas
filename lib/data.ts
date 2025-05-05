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
    title: "A Green Revolution on the Horizon: Why Shipping Must Do More Than Meet the IMO's Net-Zero Goals",
    slug: "green-revolution-shipping-imo-goals",
    category: "Sustainability",
    date: "2025-04-15",
    author: "Rita Abiodun",
    excerpt: "Exploring why the maritime industry needs to exceed IMO's net-zero targets and lead global sustainability efforts.",
    content: `
      <p>Imagine a world where shipping doesn't just comply with international regulations but leads the charge in global sustainability efforts. A world where the industry that moves 80% of the world's trade does so in a way that protects our oceans, our climate, and our communities. That world isn't just a dream—it's a possibility, and the IMO's 2023 GHG Strategy is a roadmap for getting there.</p>

      <p>But here's the question: Is doing the bare minimum really enough?</p>

      <p>As the IMO sets ambitious targets—aiming for net-zero emissions by 2050, with key milestones like a 30% reduction by 2030 and 80% by 2040—shipping companies across the globe are being asked to meet these goals. It's a big step forward for an industry often criticized for its environmental footprint. However, while these targets are crucial, we should be asking ourselves: Can we do more?</p>

      <p>The IMO's strategy is setting the stage for a greener future, but there's room for the maritime industry to go beyond just meeting international regulations. Think about it: What if every shipowner, every maritime innovator, every leader in the industry decided to aim for more than just meeting the IMO's net-zero goals? What if they went above and beyond, driving true transformation for the betterment of the planet and future generations?</p>

      <p>The IMO's framework is undeniably a step in the right direction. It's setting up ambitious targets for carbon intensity reduction and for the adoption of alternative, near-zero GHG fuels. By 2030, it expects at least 5% of international shipping's energy to come from such sustainable sources. But why stop at 5%? What if the industry aimed for 20% or more, making a bigger impact than the regulations require?</p>

      <p>"We have the tools, we have the knowledge, and we certainly have the innovation," says a leading maritime expert. "The question is, will we rise to the occasion and truly lead the way?"</p>

      <p>This isn't just about meeting compliance standards—it's about redefining what it means to be a sustainable leader in a changing world. The IMO's strategy is just the starting point. The real challenge for the maritime industry is to push beyond the baseline, to create a shipping sector that is not just carbon-neutral, but actively carbon-positive—one that contributes to the planet's recovery, not just its survival.</p>

      <p>The IMO's work with small island nations and least developed countries (LDCs) proves that sustainability is a shared responsibility. These nations are bearing the brunt of climate change's effects, yet they are often the ones with the least capacity to address it. Through programs that provide funding and support, the IMO is leveling the playing field. But this also highlights something important: If the maritime industry truly values its role in the global economy, it has to take on more responsibility, not less.</p>

      <p>By investing in alternative fuels, carbon capture technologies, and energy efficiency measures—by going beyond compliance—we could turn the shipping industry into a global leader in carbon reduction, a model for other sectors to follow.</p>

      <p>"Meeting the IMO's goals is a start, but let's not forget that the planet needs us to do more," says a passionate advocate for maritime sustainability. "This is our chance to make a lasting difference, not just in reducing emissions, but in the way we think about responsibility."</p>

      <p>The IMO's strategy is a framework for change, but it's not the endgame. It's the invitation to the maritime sector to step up and be the change we all need. From embracing new fuels like ammonia and hydrogen to investing in cutting-edge technologies like onboard carbon capture, the maritime industry has the opportunity to become the trailblazer in the fight against climate change.</p>

      <p>The truth is, the IMO can't do it alone. They've set the stage, but now it's up to all of us to play our part. So, I challenge you: Let's not wait for the bare minimum. Let's go above and beyond the IMO's targets for the greater good of humankind and the health of our planet.</p>

      <p>As one industry leader put it, "The question is no longer if we can do this—it's how quickly we can get there, and how much further we can go."</p>

      <p>And I believe we can go far.</p>
    `,
    image: "/assets/insight-green-revolution-brytaseas.png",
  },
  {
    id: "2",
    title: "Ebiere's Fight: Reclaiming the Future of the Niger Delta",
    slug: "ebieres-fight-niger-delta",
    category: "Environmental Justice",
    date: "2025-03-28",
    author: "Rita Abiodun",
    excerpt: "A powerful story of one woman's fight against environmental degradation in the Niger Delta, highlighting the human cost of irresponsible shipping practices.",
    content: `
      <p>Ebiere Okwu, a 52-year-old mother and grandmother, has spent her life along the waters of the Niger Delta. For decades, the river was the heart of her livelihood—its waters teeming with fish, and its fertile soil nurturing crops. But today, the river she once depended on is poisoned by oil spills, and her community is fighting to survive the destruction caused by irresponsible shipping activities.</p>

      <p>Ebiere's story is shared by many in her community. The Niger Delta, once a source of abundant food and income, has suffered years of environmental degradation, largely driven by oil spills and waste from ships passing through the region. For Ebiere, the decline of local fisheries wasn't just a loss of income—it was an assault on her way of life.</p>

      <p>"I used to wake up at dawn, and the river would be alive," she recalls, her voice soft but steady. "The sound of the water, the fish jumping… it was everything. It was how we lived."</p>

      <p>But in recent years, the river became sick. Oil leaks from passing ships, combined with illegal dumping and toxic waste from oil companies, have slowly poisoned the water. Fish began to disappear, and the once-thriving ecosystem began to crumble. Ebiere's fishing business, which had supported her family for decades, began to wither.</p>

      <p>"I had no choice but to turn to selling at the market," she explains, her weathered hands gripping the edge of her chair. "But the prices are low, and the days are hard. The river used to give us all we needed. Now, I barely have enough to get by."</p>

      <p>Ebiere's story is not unique. Many in her village have seen their livelihoods collapse due to the irresponsible actions of the shipping industry. Oil spills, illegal dumping, and unchecked shipping practices have left the river and the land toxic. Once a thriving community of fishermen and farmers, the area is now struggling to survive, with many families forced to abandon their homes in search of new work.</p>

      <p>"We feel forgotten," Ebiere says, looking out over the polluted waters that once sustained her family. "The oil companies continue to pollute, and nothing is done. We keep asking for help, but they don't listen. We're just here, waiting for something to change."</p>

      <p>For years, the shipping industry has taken a heavy toll on the Niger Delta, driven by a relentless pursuit of profit at the expense of the environment and local communities. Oil tankers, cargo ships, and other vessels routinely spill oil into the waters, often bypassing regulations meant to protect vulnerable ecosystems. This pollution has led to fish die-offs, the destruction of vital wetlands, and severe soil contamination, which in turn harms the people who depend on the river for food, income, and culture.</p>

      <p>"The river used to give us everything. Now we are left with empty nets," Ebiere says, a quiet resolve in her voice.</p>

      <p>But despite the overwhelming challenges, Ebiere's fight isn't just about survival. It's about justice. She is part of a growing movement of women and communities in the Niger Delta demanding accountability from the shipping and oil industries. Ebiere and others like her are no longer waiting for international organizations or governments to step in—they are standing up and demanding that those responsible for the pollution clean up the mess they've created.</p>

      <p>"We won't stay silent anymore," Ebiere declares. "This is our home, our land, and our river. If the companies won't stop polluting, we'll make them listen. We will fight for our future, for our children, and for the river."</p>

      <p>Her story is a stark reminder that irresponsible shipping activities have far-reaching consequences for real people. Ebiere's plight calls out to the shipping industry: it's time to do better. To be more responsible. To hold yourselves accountable for the destruction you've caused.</p>

      <p>The shipping industry holds the power to change the future of communities like Ebiere's. The question is, will they? Or will they continue to pollute, devastate, and profit at the expense of the world's most vulnerable?</p>

      <p>Ebiere and countless others like her deserve more than just promises. They deserve action. It's time for the shipping industry to rise to the challenge, to go beyond compliance, and to restore what has been lost. For Ebiere, her family, and her community, it's no longer just about fishing and farming—it's about fighting for the future.</p>
    `,
    image: "/assets/insight-ebiere-brytaseas.png",
  },
  {
    id: "3",
    title: "Why Shipping Companies Need to Go Beyond Compliance: Embrace Responsibility for a Greener Future",
    slug: "beyond-compliance-greener-future",
    category: "Sustainability",
    date: "2025-02-10",
    author: "Rita Abiodun",
    excerpt: "A compelling call for shipping companies to exceed basic compliance and lead the way in environmental responsibility and innovation.",
    content: `
      <p>Let's be real for a moment: The days of doing the bare minimum in shipping are over. Compliance with regulations is important, but is it enough? The world is changing fast, and the maritime industry is being called upon to lead the way in sustainability—not just meet basic standards, but actively improve. The question is: Are shipping companies ready to embrace that challenge?</p>

      <p>Let's take a closer look.</p>

      <h2>Isn't It Time to Set a New Standard?</h2>
      <p>Too many shipping companies still see compliance as the finish line. But let's be honest: if you're just meeting regulations, you're playing catch-up. The world is asking for more—and you can't afford to be left behind. Why settle for the minimum when you can be the one pushing the boundaries, setting a new standard for what responsible shipping looks like?</p>

      <p>By going beyond the basics, shipping companies can demonstrate a commitment not just to the environment but to safety, quality, and long-term sustainability. This isn't just a feel-good approach; it's a smart business decision. The companies that lead the charge in environmental responsibility will be the ones setting the pace, reaping the rewards of early innovation, and ultimately gaining the trust of clients and partners who are prioritizing sustainability more than ever.</p>

      <p>The Green Award Foundation is one of the ways companies can show they are serious about going above and beyond. It's a voluntary certification that recognizes ships excelling in safety, quality, and environmental performance. But it's not just about getting a stamp of approval; it's about setting a new bar for what the maritime industry can achieve. Green Award certification encourages vessels to exceed compliance standards and take proactive steps in reducing emissions, improving energy efficiency, and adopting innovative technologies.</p>

      <h2>Innovation Is the Key to Future Success</h2>
      <p>It's no secret: innovation is the future of shipping. But too often, innovation is seen as optional or something that's nice to have. The reality is, innovation is a necessity if shipping is going to be part of the solution to the world's sustainability challenges. From wind-assisted propulsion to dual-fuel technology, there's a whole new world of possibilities for ships that want to reduce their environmental footprint.</p>

      <p>Think about it: what would it take for your company to adopt these cutting-edge technologies? To rethink fuel efficiency, reduce emissions, and enhance overall operational performance? Pushing for new standards in shipping isn't just about meeting the baseline—it's about creating a future where sustainable shipping practices are the norm, not the exception.</p>

      <p>Green Award's recognition of vessels like the Chemical Challenger, which earned a GHG label for CO₂ reduction through wind-assisted propulsion, is a perfect example. It's not just about meeting industry standards; it's about leading the way with innovation. What's stopping you from being the next company to adopt these game-changing technologies?</p>

      <h2>The Pressure to Lead Is Real—And It's Growing</h2>
      <p>As the maritime industry faces increasing scrutiny from governments, investors, and the public, there's no longer room for complacency. Companies that fail to step up to the challenge risk falling behind, both in reputation and profitability. The shipping industry has a significant impact on the environment, and that impact is under intense pressure to change.</p>

      <p>Think about the stakeholders who are demanding more. Consumers are becoming increasingly aware of the environmental impacts of shipping. Investors are pushing for companies to adopt stronger sustainability practices. Regulators are tightening their grip on emissions and environmental standards. So, why not get ahead of these shifts and start leading the way?</p>

      <p>The companies that take responsibility now, that strive to go beyond the minimum standards, will be the ones that win in the long run. And the best part? This doesn't just benefit the planet—it benefits your bottom line too. Responsible practices can open up new markets, secure better contracts, and build stronger relationships with customers and investors alike.</p>

      <h2>A Culture of Responsibility: Beyond Compliance</h2>
      <p>This shift isn't just about meeting regulations; it's about fostering a culture of responsibility within your company. A responsible shipping company doesn't just check off boxes—it builds sustainability into every facet of its operations. It's about being proactive, not reactive. It's about creating a company culture where environmental stewardship is a shared responsibility, from the top down.</p>

      <p>So, how do you make this shift? Start by embracing more rigorous standards. Invest in technologies and practices that reduce your environmental footprint, improve fuel efficiency, and cut emissions. Encourage your team to think creatively about sustainability and get involved in industry discussions about best practices. Most importantly, align your business model with the values that are now expected of responsible companies—environmental responsibility, social equity, and governance.</p>

      <h2>Why Wait for the Future When You Can Lead It?</h2>
      <p>The future of shipping is green, and those who embrace that future now will be the ones who thrive. By going beyond compliance, you can become part of a global movement that's reshaping how the industry operates. Responsible shipping is not just about avoiding penalties—it's about being a leader, about taking ownership of the impact your company has on the environment, and about setting a higher standard for everyone else to follow.</p>

      <p>If you're ready to take your company's sustainability to the next level, don't wait. The world is changing, and the time to lead is now. It's time to embrace innovation, push past the minimum requirements, and be part of a future where the shipping industry isn't just about moving goods—it's about moving toward a better, greener world.</p>

      <p>So, are you ready to go beyond compliance? Are you ready to set the standard? The future of shipping is in your hands.</p>
    `,
    image: "/assets/insight-greener-future-brytaseas.png",
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
