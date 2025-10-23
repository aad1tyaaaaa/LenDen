import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Mic, User, CheckCircle, ArrowRight, Shield, Globe, Smartphone } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to LeinDen',
      subtitle: 'Your Smart Financial Partner',
      icon: User,
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">नमस्ते! Welcome</h2>
            <p className="text-muted-foreground">
              Manage your money smartly with voice commands in your language
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Mic className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-sm">Voice First</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-sm">Multi-language</p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-sm">Secure</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'permissions',
      title: 'Permissions Setup',
      subtitle: 'We need a few permissions to work best for you',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <Mic className="w-8 h-8 text-accent" />
              <div className="flex-1">
                <h3 className="font-medium">Microphone Access</h3>
                <p className="text-sm text-muted-foreground">
                  For voice commands and transactions
                </p>
              </div>
              <Button size="sm">Allow</Button>
            </div>
            
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <User className="w-8 h-8 text-accent" />
              <div className="flex-1">
                <h3 className="font-medium">Google Account</h3>
                <p className="text-sm text-muted-foreground">
                  To sync with Google Pay safely
                </p>
              </div>
              <Button size="sm">Connect</Button>
            </div>
            
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <Smartphone className="w-8 h-8 text-accent" />
              <div className="flex-1">
                <h3 className="font-medium">Contacts</h3>
                <p className="text-sm text-muted-foreground">
                  For Udhaari (lending) with friends
                </p>
              </div>
              <Button size="sm">Allow</Button>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              🔒 Your data stays private and secure. We use bank-level encryption.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'language',
      title: 'Choose Your Language',
      subtitle: 'Select your preferred language for voice and text',
      icon: Globe,
      content: (
        <div className="space-y-4">
          {[
            { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
            { code: 'en', name: 'English', flag: '🇬🇧' },
            { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
            { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
            { code: 'bn', name: 'বাংলা (Bengali)', flag: '🇮🇳' },
            { code: 'mr', name: 'मराठी (Marathi)', flag: '🇮🇳' },
          ].map((lang) => (
            <Button
              key={lang.code}
              variant="outline"
              className="w-full justify-start h-auto p-4"
            >
              <span className="text-xl mr-3">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </Button>
          ))}
        </div>
      )
    },
    {
      id: 'complete',
      title: 'Setup Complete!',
      subtitle: 'You\'re ready to start managing your finances',
      icon: CheckCircle,
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">All Set! 🎉</h2>
            <p className="text-muted-foreground">
              Start by saying "LeinDen, add expense" or tap the mic button
            </p>
          </div>
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Mic className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <p className="font-medium">Try saying:</p>
                  <p className="text-sm text-muted-foreground">
                    "मैंने चाय पर 20 रुपये खर्च किए"<br/>
                    "I spent 20 rupees on tea"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Header with Progress */}
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold text-primary">LeinDen Setup</h1>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {steps.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-md mx-auto w-full p-4">
        <Card className="min-h-[500px]">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <currentStepData.icon className="w-8 h-8 text-primary" />
            </div>
            <CardTitle>{currentStepData.title}</CardTitle>
            <p className="text-muted-foreground">{currentStepData.subtitle}</p>
          </CardHeader>
          <CardContent>
            {currentStepData.content}
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-md mx-auto flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button onClick={handleNext} className="bg-primary">
            {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}