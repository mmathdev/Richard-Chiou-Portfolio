import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certs = [
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "March 2024",
    description: "Advanced expertise in building, training, and deploying ML models on AWS using SageMaker, data pipelines, and production workflows.",
  },
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "January 2024",
    description: "Proficiency in designing, building, and productionizing ML models on Google Cloud Platform with BigQuery and Vertex AI.",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "November 2023",
    description: "Comprehensive training in neural networks, CNNs, RNNs, sequence models, and computer vision applications.",
  },
  {
    name: "Machine Learning Engineering for Production (MLOps)",
    issuer: "Coursera / DeepLearning.AI",
    date: "September 2023",
    description: "End-to-end MLOps practices including model pipelines, deployment, monitoring, and continuous training.",
  },
  {
    name: "Natural Language Processing Specialization",
    issuer: "Coursera",
    date: "July 2023",
    description: "Advanced NLP techniques including sentiment analysis, machine translation, attention mechanisms, and transformer models.",
  },
  {
    name: "Exam P (Probability)",
    issuer: "Society of Actuaries",
    date: "September 2024",
    description: "Probability theory, combinatorial/conditional probability, distributions, moments, and risk modeling.",
  },
  {
    name: "Exam FM (Financial Mathematics)",
    issuer: "Society of Actuaries",
    date: "August 2024",
    description: "Interest theory, time value of money, annuities, bonds, spot/forward rates, and derivative pricing.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <Card key={cert.name} className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
