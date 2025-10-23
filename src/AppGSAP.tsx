import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';
import { Settings as SettingsComponent } from './components/Settings';
import {
  Home,
  PiggyBank,
  MessageCircle,
  Settings,
  Mic,
  Crown,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Shield,
  Eye,
  EyeOff,
  Target,
  Plus,
  Minus,
  Zap,
  Star,
  Gift,
  Phone,
  Building,
  Award,
  RefreshCw,
  Check,
  X,
  Volume2,
  MicOff,
  ExternalLink,
  Lightbulb
} from 'lucide-react';

import './i18n';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

type Page = 'home' | 'udhaari' | 'salah' | 'settings';

interface LoanProvider {
  id: string;
  name: string;
  type: 'Bank' | 'NBFC' | 'Fintech';
  maxAmount: number;
  interestRate: string;
  processingTime: string;
  eligibilityScore: number;
  features: string[];
  websiteUrl: string;
}

export default function AppGSAP() {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<LoanProvider | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Function to change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top top',
        end: 99999,
        pin: true,
        pinSpacing: false,
        markers: true, // Uncomment for debugging
      });

      // Animate header title and profile image on load
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelector('h1'),
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
        );
        gsap.fromTo(
          headerRef.current.querySelector('img'),
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
        );
      }

      // Animate main content sections on scroll
      gsap.utils.toArray('.animate-section').forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              markers: true, // Uncomment for debugging
            },
          }
        );
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Placeholder renderContent function with animation classes
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-8">
            <section className="animate-section">
              <h2 className="text-2xl font-bold text-primary">{t('welcome')}</h2>
              <p className="text-muted-foreground">{t('manage_finances')}</p>
            </section>
            <section className="animate-section">
              <Card>
                <CardHeader>
                  <CardTitle>{t('total_balance')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">₹25,000</p>
                </CardContent>
              </Card>
            </section>
          </div>
        );
      case 'udhaari':
        return (
          <div className="animate-section">
            <h2 className="text-2xl font-bold text-primary">{t('udhaari_gullack')}</h2>
            <p className="text-muted-foreground">{t('manage_lending_savings')}</p>
          </div>
        );
      case 'salah':
        return (
          <div className="space-y-8">
            {/* Hero Section */} 
            <div className="text-center space-y-4">
              <div className="relative w-28 h-28 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1633409361618-c1674c52a6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMHZlY3RvciUyMGljb258ZW58MXx8fHwxNzU5Mzk4OTg4fDA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Financial Planning Icon"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">Salah (Expert Advice)</h2>
                <p className="text-muted-foreground">Get expert guidance and financial opportunities</p>
              </div>
            </div>

            {/* Enhanced Financial Health Score */}
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span>Financial Health Score</span>
                    <div className="text-sm text-muted-foreground">Your credit worthiness</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-primary">720</div>
                  <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
                    <Award className="w-4 h-4 mr-1" />
                    Good
                  </Badge>
                </div>
                <Progress value={84.7} className="h-4 mb-3" />
                <p className="text-sm text-muted-foreground">
                  Your score is improving! Keep managing debts well to reach 750+ for better loan rates
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="loans" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-muted/30 rounded-xl p-1">
                <TabsTrigger value="advice" className="flex items-center space-x-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Advice</span>
                </TabsTrigger>
                <TabsTrigger value="loans" className="flex items-center space-x-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <Building className="w-4 h-4" />
                  <span>Loan Options</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="advice" className="space-y-6 mt-6">
                {/* Enhanced Quick Actions */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold mb-2">Chat with Expert</h3>
                      <p className="text-sm text-muted-foreground">Get instant advice via chat</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold mb-2">Call an Advisor</h3>
                      <p className="text-sm text-muted-foreground">Direct phone consultation</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced AI Recommendations */}
                <Card className="bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 border-accent/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent/80 rounded-xl flex items-center justify-center">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                      <span>AI Recommendations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="p-4 bg-white rounded-xl border border-accent/10 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-red-700">Immediate Action</h4>
                          <p className="text-sm text-muted-foreground">
                            Clear your high-priority debt of ₹800 with Local Kirana to improve local credit
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-accent/10 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-green-700">Investment Tip</h4>
                          <p className="text-sm text-muted-foreground">
                            Start a SIP of ₹500/month in ELSS funds for tax savings and growth
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-accent/10 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-blue-700">Goal Planning</h4>
                          <p className="text-sm text-muted-foreground">
                            Create a dedicated emergency fund goal of ₹1 lakh for better financial security
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="loans" className="space-y-6 mt-6">
                {/* Enhanced Eligibility Banner */}
                <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-green-800 mb-1">Pre-Qualified Offers Available</h3>
                        <p className="text-sm text-green-600">
                          Based on your score of 720, you're eligible for these exclusive loans
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Loan Options */}
                <div className="space-y-6">
                  {[
                    {
                      id: '1',
                      name: 'PaySense',
                      type: 'Fintech' as const,
                      maxAmount: 500000,
                      interestRate: '16-36%',
                      processingTime: '24 hours',
                      eligibilityScore: 85,
                      features: ['No Collateral', 'Instant Approval', 'Digital Process'],
                      websiteUrl: 'https://www.paysense.co.in'
                    },
                    {
                      id: '2',
                      name: 'HDFC Personal Loan',
                      type: 'Bank' as const,
                      maxAmount: 4000000,
                      interestRate: '10.5-21%',
                      processingTime: '3-7 days',
                      eligibilityScore: 65,
                      features: ['Low Interest', 'Long Tenure', 'Trusted Bank'],
                      websiteUrl: 'https://www.hdfcbank.com'
                    },
                    {
                      id: '3',
                      name: 'Bajaj Finance',
                      type: 'NBFC' as const,
                      maxAmount: 2500000,
                      interestRate: '13-30%',
                      processingTime: '2-4 hours',
                      eligibilityScore: 78,
                      features: ['Quick Approval', 'Flexible EMI', 'Pre-approved'],
                      websiteUrl: 'https://www.bajajfinserv.in'
                    }
                  ].map((provider) => (
                    <Card key={provider.id} className="relative hover:shadow-lg transition-all duration-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                              <Building className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{provider.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{provider.type}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className={
                            provider.eligibilityScore >= 80 ? 'bg-green-100 text-green-800 border-green-200' :
                            provider.eligibilityScore >= 70 ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                            'bg-red-100 text-red-800 border-red-200'
                          }>
                            {provider.eligibilityScore}% Match
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Max Amount</p>
                              <p className="font-bold text-lg">₹{(provider.maxAmount / 100000).toFixed(1)}L</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Interest Rate</p>
                              <p className="font-bold text-lg">{provider.interestRate}</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Processing Time</p>
                              <p className="font-bold">{provider.processingTime}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">Eligibility</p>
                              <Progress value={provider.eligibilityScore} className="h-3" />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {provider.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => {
                              setSelectedLoan(provider);
                              setShowLoanModal(true);
                            }}
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                      {provider.eligibilityScore >= 80 && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Recommended
                          </Badge>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

                {/* Enhanced Loan Calculator CTA */}
                <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">EMI Calculator</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calculate your monthly payments and plan your finances before applying
                    </p>
                    <Button variant="outline" className="bg-white">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Open Calculator
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        );
      case 'settings':
        return <SettingsComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-black to-primary/5">
      {/* Header with GSAP sticky */}
      <header 
        ref={headerRef} 
        className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-xl w-full"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-md mx-auto p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="LenDen Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-wide">LenDen</h1>
              <p className="text-primary-foreground/80 text-xs sm:text-sm">Smart Financial Partner</p>
            </div>
          </div>
          <div className="sticky top-4 z-50">
            <img
              src="/pfp.png"
              alt="User Profile"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full p-4 sm:p-6 pb-24">
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-4 sm:p-6">
          {renderContent()}
        </div>
      </main>

      {/* Loan Details Modal */}
      {showLoanModal && selectedLoan && (
        <Dialog open={showLoanModal} onOpenChange={setShowLoanModal}>
          <DialogContent className="max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span>{selectedLoan.name}</span>
                  <div className="text-sm text-muted-foreground font-normal">{selectedLoan.type}</div>
                </div>
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Loan Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Maximum Amount</p>
                    <p className="font-bold text-xl text-primary">₹{(selectedLoan.maxAmount / 100000).toFixed(1)}L</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="font-bold text-lg">{selectedLoan.interestRate}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Processing Time</p>
                    <p className="font-bold">{selectedLoan.processingTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Your Eligibility</p>
                    <div className="space-y-2">
                      <Progress value={selectedLoan.eligibilityScore} className="h-3" />
                      <p className="text-sm font-medium text-primary">{selectedLoan.eligibilityScore}% Match</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {selectedLoan.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Eligibility Notice */}
              <div className={`p-4 rounded-xl border ${
                selectedLoan.eligibilityScore >= 80 ? 'bg-green-50 border-green-200' :
                selectedLoan.eligibilityScore >= 70 ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    selectedLoan.eligibilityScore >= 80 ? 'bg-green-100' :
                    selectedLoan.eligibilityScore >= 70 ? 'bg-yellow-100' :
                    'bg-red-100'
                  }`}>
                    <Shield className={`w-4 h-4 ${
                      selectedLoan.eligibilityScore >= 80 ? 'text-green-600' :
                      selectedLoan.eligibilityScore >= 70 ? 'text-yellow-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${
                      selectedLoan.eligibilityScore >= 80 ? 'text-green-800' :
                      selectedLoan.eligibilityScore >= 70 ? 'text-yellow-800' :
                      'text-red-800'
                    }`}>
                      {selectedLoan.eligibilityScore >= 80 ? 'High Approval Chance' :
                       selectedLoan.eligibilityScore >= 70 ? 'Good Approval Chance' :
                       'Lower Approval Chance'}
                    </p>
                    <p className={`text-xs ${
                      selectedLoan.eligibilityScore >= 80 ? 'text-green-600' :
                      selectedLoan.eligibilityScore >= 70 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      Based on your financial score
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Apply Button */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-3"
                  onClick={() => window.open(selectedLoan.websiteUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply on {selectedLoan.name} Website
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  You'll be redirected to the official {selectedLoan.name} website to complete your application
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
