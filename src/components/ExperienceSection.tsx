import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Outlier",
    companyLogo: "/images/outlier.png",
    role: "Lead AI/ML Engineer",
    location: "Newark, CA",
    period: "04.2024 – Present",
    bullets: [
      "Fine-tuned computer vision and CNN models (ResNet-50) using PyTorch to identify species, individual animals, sex, and age-class from wildlife footprint images, achieving over 95% accuracy.",
      "Integrated optimized ONNX models into WildTrackAI mobile app, reducing prediction time from 2s to 300ms, improving accessibility for 1000+ field users.",
      "Implemented a multi-agent healthcare assistant using Model Context Protocol (MCP) to standardize tool access across patient data retrieval, summarization, and recommendation services, enabling modular and extensible agent workflows.",
      "Deployed a BioBERT-based LLM model using LangChain-powered RAG on SageMaker to handle 500+ patient conversations per month, providing personalized healthcare advice.",
      "Improved clinical workflow efficiency, reducing average doctor-patient meeting time by 30% by pre-summarizing patient information from virtual assistant conversations using a BART-based Transformer model.",
      "Built and deployed scalable RESTful APIs using FastAPI and Flask to serve LLM inference, conversation summarization, and healthcare recommendations, supporting real-time interactions with sub-second latency.",
      "Led a cross-functional AI team of 7 members to implement reproducible MLOps workflows using MLflow, DVC, Docker, and AWS S3, reducing model deployment time by 40% and enabling scalable, cloud-based AI operations.",
    ],
    tech: ["PyTorch", "TensorFlow", "ONNX", "ResNet-50", "OpenCV", "LLM", "RAG", "BioBERT", "BART", "TTS/STT", "LangChain", "PostgreSQL", "AWS (Lambda, S3, EC2)", "Databricks", "SageMaker", "MCP"],
  },
  {
    company: "StreetLight Data",
    companyLogo: "/images/streetlight-data.png",
    role: "Founding AI/ML Engineer",
    location: "San Francisco, CA",
    period: "01.2022 – 04.2024",
    bullets: [
      "Architected spatio-temporal forecasting models using Graph WaveNet and LangGraph to predict traffic flow one hour ahead, achieving 23% higher accuracy compared to ARIMA.",
      "Applied Transformer-based temporal encoders for multi-horizon congestion prediction across heterogeneous inputs, enabling early detection of evacuation bottlenecks and reducing congestion prediction error by 18%.",
      "Created real-time incident detection models combining loop detector data, GPS traces, and DOT event feeds to classify crashes and stalled vehicles with 91% precision and 87% recall, reducing operator detection latency by 35%.",
      "Built a reinforcement learning model for adaptive traffic signal timing and contraflow recommendations, validated in SUMO simulations with up to 18% improvement in throughput during peak evacuation load.",
      "Established real-time traffic AI pipelines on AWS, ingesting 500K+ daily GPS and sensor records through Kafka, preprocessing with Spark, and deploying models on SageMaker with 99.9% uptime for high availability.",
      "Designed and implemented scalable data pipelines using Snowflake as the central data warehouse, ingesting and processing 2M–3M records per day, enabling 1s query latency and accelerating feature extraction for ML and LLM pipelines by 35%.",
      "Built ELT workflows integrating Snowflake with AWS S3 and Databricks, reducing end-to-end data processing latency by 45% and increasing data availability SLAs to 99.5%, supporting reliable model training and near real-time inference.",
    ],
    tech: ["PyTorch", "TensorFlow", "scikit-learn", "Graph WaveNet", "Transformer", "RL", "Kafka", "Spark", "EKS", "Redis", "Prometheus", "SUMO", "PostGIS", "WhyLabs", "Hive", "Airflow", "Linux", "LangGraph", "Snowflake", "ELT", "S3", "Databricks"],
  },
  {
    company: "Metis",
    companyLogo: "/images/metis.png",
    role: "Data Scientist, Instructor",
    location: "San Francisco, CA",
    period: "02.2020 - 01.2022",
    bullets: [
      "Mentored learners in feature engineering, model evaluation, and deployment, resulting in measurable skill improvements and career placements for 70+ students in data science roles.",
      "Authored 50+ hands-on exercises and guided 20+ capstone projects, producing production-ready ML models and analytics solutions.",
    ],
    tech: ["TensorFlow", "PyTorch", "Matplotlib", "Pandas", "Seaborn", "Flask", "FastAPI", "Docker", "Git/GitHub", "AWS", "GCP", "Azure"],
  },
  {
    company: "Signifyd",
    companyLogo: "/images/signifyd.png",
    role: "AI/ML Engineer",
    location: "San Jose, CA",
    period: "10.2018 – 02.2020",
    bullets: [
      "Engineered machine learning models to detect fraudulent e-commerce transactions, processing 100K+ daily transactions and reducing chargebacks by 15%.",
      "Optimized adaptive fraud thresholds and conducted A/B tests, improving legitimate transaction approval rates by 10% while maintaining high fraud detection accuracy.",
    ],
    tech: ["XGBoost", "scikit-learn", "Pandas", "NumPy", "SQL", "A/B tests", "FastAPI", "AWS"],
  },
  {
    company: "Brain Technologies",
    companyLogo: "/images/brain-technologies.png",
    role: "Senior Data Scientist",
    location: "San Mateo, CA",
    period: "07.2017 - 09.2018",
    bullets: [
      "Formulated data generation guidelines and managed data generation workflows, creating and annotating 50,000+ examples to support the NLP team and ensure high- quality training data.",
      "Operationalized general and domain-specific entity recognition systems using spaCy and SENNA, improving the virtual assistant’s entity extraction accuracy by 25%.",
    ],
    tech: ["spaCy", "NumPy", "Pandas", "NER", "Stranford SENNA", "NLP"],
  },
  {
    company: "xAd",
    companyLogo: "/images/xAd.png",
    role: "Mid-level Data Scientist",
    location: "Mountain View, CA",
    period: "07.2016 - 06.2017",
    bullets: [
      "Executed a patent-pending statistical algorithm using hierarchical and Bayesian modeling on 10M observations to improve ad campaign-driven store visits by 25%.",
      "Developed a model to rank mobile user id quality leveraging 30+ behavioral and demographic features, increasing targeting precision by 20% across campaigns.",
    ],
    tech: ["Python", "SQL", "PyMC3", "Matplotlib", "Hierarchical Modeling", "Hadoop"],
  },
  {
    company: "PayPal",
    companyLogo: "/images/paypal.png",
    role: "Mobile Tools Development Intern",
    location: "San Jose, CA",
    period: "01.2014 - 06.2016",
    bullets: [
      "Constructed the PPUtils tool using QIJaws API to automate the creation of 10K+ test user accounts, supporting continuous integration for PayPal iOS and Android apps.",
      "Performed root cause analysis on Android test failures and built a login performance dashboard with automated alerts, improving testing efficiency by 45%.",
    ],
    tech: ["Python", "QIJaws REST API", "CI/CD", "Watchtower", "iOS & Android"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      {exp.companyLogo && (
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h3 className="font-semibold text-foreground text-lg">{exp.company}</h3>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-primary text-sm mb-1">{exp.role}</p>
                        <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
