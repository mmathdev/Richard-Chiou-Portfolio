import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const PatentSection = () => {
  return (
    <section id="patent" className="py-20 pt-0 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Patent</h2>
        <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                METHOD AND APPARATUS FOR MEASURING EFFECT OF INFORMATION DELIVERED TO MOBILE DEVICES
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Issued Apr 13, 2017 by WIPO
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground leading-7">
                A method and apparatus for measuring the effect of information delivered to mobile devices using packet-based networks, calibration mobile devices, and tracking algorithms to determine exposure metrics.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-2">Inventors</p>
              <p className="text-sm text-muted-foreground">Luo Huitao, Batra Vimpy, Chiou Richard, Katyal Pravesh</p>
            </div>

            <div className="pt-4 border-t border-border">
              <a
                href="https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2017062912"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View the patent on WIPO
                <ExternalLink size={16} className="text-primary" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PatentSection;
