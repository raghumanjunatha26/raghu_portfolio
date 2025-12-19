import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Raghu Manjunatha",
    email: "raghumanjunatha26@gmail.com",
    phone: "+1 571-574-2896",
    linkedin: "https://linkedin.com/in/raghu-manjunatha",
    location: "Fairfax, Virginia - 22030",
    summary: "Data Analyst & AI Engineer with 3.5+ years of experience in AI, Data Analytics, Business Intelligence, Banking, NLP, LLMs, Full-Stack Development, Animation and Research."
  },
  
  education: [
    {
      degree: "Master's in Data Analytics Engineering",
      institution: "George Mason University",
      location: "Fairfax, VA",
      period: "Aug 2023 – Dec 2024",
      gpa: "3.80",
      coursework: [
        "Applied Statistics & Statistical Learning",
        "Big Data Analytics & Distributed Computing",
        "Advanced Data Visualization & Storytelling",
        "Natural Language Processing (NLP)",
        "Machine Learning & Deep Learning",
        "Cloud Computing & AWS Architecture",
        "Data Mining & Pattern Recognition",
        "Advanced Database Management",
        "Fraud Detection & Anomaly Detection",
        "Business Intelligence & Strategic Analytics"
      ]
    }
  ],

  experience: [
    {
      title: "AI/ML Engineer",
      company: "Crux Acuity (Federal Contracts Platform)",
      location: "Fairfax, VA",
      period: "September 2025 – Present",
      description: [
        "Architected and implemented a Python-based visual grounding pipeline for federal solicitation PDFs, creating precise entity-to-location mappings with COCO-style JSON manifests",
        "Developed AI extraction systems for complex federal documents, linking dates, contract IDs, NAICS codes, and regulatory clauses to exact page coordinates",
        "Researched and evaluated multiple visual grounding methodologies to address AI hallucination issues, implementing robust validation and error-correction mechanisms",
        "Optimized pipeline performance for latency and scalability in a startup environment, achieving 40% improvement in processing speed",
        "Refactored legacy Python codebase with modular architecture, increasing test coverage to 85% and enabling CI/CD deployment"
      ],
      technologies: ["Python", "Computer Vision", "AWS S3", "PDF Processing", "COCO Format", "CI/CD", "Visual Grounding"]
    },
    {
      title: "AI Engineer Intern",
      company: "Idexcel Inc.",
      location: "Herndon, VA",
      period: "June 2025 – August 2025",
      description: [
        "Engineered JavaScript-based AWS Lambda functions with S3/SNS/SQS integration for automated document processing workflows",
        "Built dynamic extraction pipeline using PDF.js, pdf-parse, and Tesseract OCR with intelligent fallback mechanisms for document digitization",
        "Integrated Amazon Bedrock models (Claude, GPT) for intelligent metadata retrieval and conversational AI functionality",
        "Designed PostgreSQL integration layer mapping AI outputs to live database schemas with real-time synchronization",
        "Delivered production-ready solutions with comprehensive test coverage and seamless integration into existing codebase"
      ],
      technologies: ["JavaScript", "AWS Lambda", "Amazon Bedrock", "PostgreSQL", "PDF.js", "Tesseract OCR", "SNS/SQS"]
    },
    {
      title: "AI & Digital Learning Specialist",
      company: "CARP Research Labs",
      location: "Fairfax, VA",
      period: "October 2024 – Present",
      description: [
        "Conduct advanced research on narrative warfare and character assassination using ML, NLP, and sophisticated data analytics on proprietary research datasets",
        "Transform complex research findings into engaging digital learning tools including structured summaries, interactive visual narratives, and animated explainers",
        "Design and develop AI-driven learning platform featuring RAG-based chatbot with professor and course-specific knowledge integration",
        "Create innovative scenario-sandboxing environments, micro-certifications, and adaptive Q&A flows for enhanced interactive learning experiences",
        "Collaborate with interdisciplinary teams to translate academic research into practical, accessible educational content"
      ],
      technologies: ["Machine Learning", "NLP", "RAG Systems", "Data Analytics", "Educational Technology", "Research Methodology"]
    },
    {
      title: "Makerspace Associate",
      company: "MIX (Mason Innovation Exchange)",
      location: "Fairfax, VA",
      period: "September 2024 – December 2024",
      description: [
        "Conducted 100+ interdisciplinary workshops on emerging technologies including AI, data analytics, and 2D animation for diverse student audiences",
        "Mentored undergraduate students in hands-on technical skills development and guided student-led innovation projects",
        "Facilitated hackathons and startup ideation sessions, fostering cross-domain innovation and entrepreneurial thinking",
        "Designed and implemented data analytics solution for MIX tap-in system, analyzing workshop attendance and resource utilization patterns",
        "Generated automated dashboards and comprehensive reports driving data-informed decisions for staffing and resource allocation"
      ],
      technologies: ["Data Analytics", "Dashboard Design", "Workshop Development", "Mentorship", "Project Management"]
    },
    {
      title: "Analytics Associate",
      company: "The Federal Bank",
      location: "Bellary, India",
      period: "September 2021 – September 2022",
      description: [
        "Managed comprehensive financial data analysis in gold loan operations using Finacle (RDBMS) and advanced SQL query optimization",
        "Designed and implemented interactive Excel dashboards with Power Query, Pivot Tables, and dynamic slicers for multi-branch performance tracking",
        "Developed predictive analytics model for NPA (Non-Performing Assets) identification, successfully flagging 100+ high-risk accounts worth ₹6.8 Crore",
        "Implemented automated risk assessment alerts with quarterly triggers, preventing potential defaults through proactive legal intervention",
        "Created data-driven insights that improved loan portfolio performance and reduced financial risk exposure by 25%"
      ],
      technologies: ["SQL", "Finacle RDBMS", "Excel Power Query", "Predictive Modeling", "Financial Analytics", "Risk Assessment"]
    },
    {
      title: "Full-Stack Developer Intern",
      company: "PVH Software Solutions",
      location: "Bengaluru, India",
      period: "March 2021 – April 2021",
      description: [
        "Developed comprehensive Online Job Consultancy Website enhancing recruitment workflows and user experience for enterprise client",
        "Implemented responsive web design using HTML5, CSS3, Bootstrap, and JavaScript for optimal cross-device functionality",
        "Built robust backend architecture using Django framework with SQLite database integration",
        "Created intuitive user interfaces and seamless navigation flows, improving candidate-employer matching efficiency",
        "Delivered scalable solution using industry best practices and modern development tools"
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Django", "SQLite", "Full-Stack Development"]
    }
  ],

  projects: [
    {
      title: "Recidivism Reduction Program Analysis",
      subtitle: "AI-Powered Chatbot | RAG Pipeline",
      description: [
        "Designed and implemented comprehensive AI system to analyze 60+ meta-analysis papers on recidivism reduction using advanced NLP and machine learning techniques",
        "Built universal text extraction pipeline utilizing pdfplumber, OCR technology, and PyMuPDF for seamless document processing",
        "Applied state-of-the-art sentence transformers (all-MinLM-L12-V2) from Hugging Face for semantic embedding generation",
        "Implemented ChromaDB vector database with HNSW indexing and cosine similarity for lightning-fast semantic search capabilities",
        "Developed sophisticated RAG pipeline incorporating BERT for classification and T5 for intelligent text generation",
        "Created professional Streamlit UI with integrated chatbot, PDF upload functionality, and dynamic tab management",
        "Translated complex psychological research into actionable insights supporting evidence-based decision-making in criminal justice"
      ],
      technologies: ["Python", "NLP", "BERT", "T5", "Hugging Face", "ChromaDB", "Streamlit", "PDF Processing", "RAG", "Semantic Search"],
      highlights: [
        "Processed 60+ academic papers with 95% accuracy",
        "Achieved sub-second semantic search response times",
        "Built production-ready UI with real-time chat capabilities"
      ]
    },
    {
      title: "Advanced Data Analytics & Predictive Modeling Suite",
      subtitle: "Three Comprehensive NLP and ML Projects",
      description: [
        "Diabetes Risk Prediction: Developed sophisticated predictive analytics models using Random Forest, Decision Tree, Logistic Regression, and Gradient Boosting algorithms to identify key risk factors and forecast disease progression with 89% accuracy",
        "Data Analytics Job Market Intelligence: Conducted comprehensive analysis of data science employment landscape using web-scraped job postings, examining salary trends, skill demand patterns, and hiring dynamics across industry sectors",
        "Social Media Sentiment Analysis: Engineered advanced sentiment classification system processing social media data using NLP techniques including tokenization, TF-IDF vectorization, and multi-class sentiment classification",
        "Integrated advanced data visualization using Tableau and Power BI for executive-level reporting and stakeholder presentations"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "SQL", "Tableau", "Power BI", "ML Algorithms", "NLP", "AWS", "Web Scraping"],
      highlights: [
        "Achieved 89% accuracy in diabetes prediction modeling",
        "Analyzed 10,000+ job postings for market intelligence",
        "Built real-time sentiment analysis with 92% precision"
      ]
    },
    {
      title: "Smart Water Management System",
      subtitle: "Award-Winning IoT Innovation Project",
      description: [
        "Engineered comprehensive IoT-driven system for real-time household water usage monitoring and optimization, delivering measurable environmental impact",
        "Built responsive web dashboard using HTML5, CSS3, Bootstrap, and jQuery with Python Django backend and PostgreSQL database",
        "Integrated ThingSpeak API for real-time data visualization, predictive analytics, and intelligent resource management",
        "Implemented machine learning algorithms for usage pattern recognition and automated conservation recommendations",
        "Delivered quantifiable results with 30-40% reduction in water wastage through smart monitoring and alert systems"
      ],
      technologies: ["IoT", "Python", "Django", "PostgreSQL", "HTML5", "CSS3", "Bootstrap", "jQuery", "ThingSpeak API", "Predictive Analytics"],
      awards: [
        "Best Innovative Project - Karnataka State Council for Science & Technology"
      ],
      highlights: [
        "30-40% reduction in water wastage achieved",
        "Real-time monitoring with predictive analytics",
        "State-level recognition for innovation impact"
      ]
    },
    {
      title: "EchoPods – Personal Invention Project",
      subtitle: "Founder | Next-Gen Audio Innovation",
      description: [
        "Invented EchoPods, a next-generation, ergonomic audio device that offers a non-intrusive listening experience with revolutionary design approach",
        "Led comprehensive end-to-end product development including extensive user research, advanced 3D modeling, and seamless Bluetooth integration",
        "Conducted thorough market research and user experience studies to identify pain points in existing audio device solutions",
      ],
      technologies: ["3D Modeling", "Bluetooth Integration", "Product Design", "User Research", "Patent Filing", "Ergonomic Design", "Audio Engineering"],
      awards: [
        "2nd Place Winner - 2025 Patriot Pitch Competition",
        "Provisional Patent Secured"
      ],
      highlights: [
        "Provisional patent secured for innovative design",
        "2nd place at 2025 Patriot Pitch Competition",
        "Revolutionary non-intrusive audio experience"
      ],
      image: "https://media.licdn.com/dms/image/v2/D4E16AQEvKxYEsV6xTA/profile-displaybackgroundimage-shrink_350_1400/B4EZYd7v62HMAY-/0/1744258924779?e=1767830400&v=beta&t=QFaqcm5c340tYX4a1nKfksuYR-S5jQj8amn4J-pGBSU"
    }
  ],

  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "R", "SQL", "HTML5", "CSS3", "TypeScript"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face Transformers", "OpenAI GPT", "Claude", "BERT", "T5", "Model Evaluation", "MLOps"]
    },
    {
      category: "Generative AI & NLP",
      skills: ["Large Language Models (LLMs)", "RAG Systems", "OCR Technology", "Semantic Search", "Text Classification", "Sentiment Analysis", "Named Entity Recognition"]
    },
    {
      category: "Data Science & Analytics",
      skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Statistical Analysis", "Predictive Modeling", "Time Series Analysis", "A/B Testing"]
    },
    {
      category: "Data Engineering & Cloud",
      skills: ["AWS (Lambda, S3, Bedrock, SNS/SQS)", "ETL Pipelines", "Apache Spark", "Data Warehousing", "API Integration", "Microservices"]
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "ChromaDB", "Vector Databases", "Finacle RDBMS", "Database Optimization"]
    },
    {
      category: "Analytics & Business Intelligence",
      skills: ["Tableau", "Power BI", "Excel Advanced (Power Query, Pivot Tables)", "Dashboard Design", "Data Storytelling", "KPI Development"]
    },
    {
      category: "Development & Collaboration",
      skills: ["Git/GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Jira", "YouTrack", "CI/CD", "Agile Methodologies"]
    },
    {
      category: "Creative & Media Technologies",
      skills: ["2D Animation", "3D Modeling", "Illustration", "Laser Cutting", "Podcasting", "Studio Lighting", "Creative Problem Solving"]
    },
    {
      category: "Web Development Frameworks",
      skills: ["Django", "Flask", "React", "Node.js", "Bootstrap", "Streamlit", "FastAPI", "RESTful APIs"]
    }
  ]
};
