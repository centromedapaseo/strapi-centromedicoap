import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProcessStepProps {
  step: number;
  title: string;
  subtitle: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, subtitle, isLast = false }) => {
  return (
    <div className="relative">
      <Card className="medical-card">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{step}</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {!isLast && (
        <div className="hidden lg:block absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-accent" />
      )}
    </div>
  );
};

interface ProcessSectionProps {
  title: string;
  steps: Array<{ title: string; subtitle: string }>;
  ctaText: string;
  ctaLink: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ title, steps, ctaText, ctaLink }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={step.title}
              subtitle={step.subtitle}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild 
            className="btn-medical-primary px-8 py-3 text-lg"
          >
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              {ctaText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;