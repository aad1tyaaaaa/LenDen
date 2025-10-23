import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MessageCircle, Phone, Star, Shield, TrendingUp, Building, Crown, Zap, Users, Award } from 'lucide-react';


interface Advisor {
  id: string;
  name: string;
  type: 'CA' | 'Financial Advisor' | 'Expert';
  rating: number;
  experience: string;
  speciality: string;
  available: boolean;
  pricePerMinute: number;
}

interface LoanProvider {
  id: string;
  name: string;
  type: 'Bank' | 'NBFC' | 'Fintech';
  maxAmount: number;
  interestRate: string;
  processingTime: string;
  eligibilityScore: number;
  features: string[];
}

export function ModernSalah() {
  const advisors: Advisor[] = [
    {
      id: '1',
      name: 'CA Rajesh Kumar',
      type: 'CA',
      rating: 4.8,
      experience: '8 years',
      speciality: 'Tax Planning',
      available: true,
      pricePerMinute: 25
    },
    {
      id: '2',
      name: 'Priya Mehta',
      type: 'Financial Advisor',
      rating: 4.6,
      experience: '5 years',
      speciality: 'Investment Planning',
      available: false,
      pricePerMinute: 20
    },
    {
      id: '3',
      name: 'Dr. Amit Sharma',
      type: 'Expert',
      rating: 4.9,
      experience: '12 years',
      speciality: 'Debt Management',
      available: true,
      pricePerMinute: 30
    }
  ];

  const loanProviders: LoanProvider[] = [
    {
      id: '1',
      name: 'PaySense',
      type: 'Fintech',
      maxAmount: 500000,
      interestRate: '16-36%',
      processingTime: '24 hours',
      eligibilityScore: 85,
      features: ['No Collateral', 'Instant Approval', 'Digital Process']
    },
    {
      id: '2',
      name: 'HDFC Personal Loan',
      type: 'Bank',
      maxAmount: 4000000,
      interestRate: '10.5-21%',
      processingTime: '3-7 days',
      eligibilityScore: 65,
      features: ['Low Interest', 'Long Tenure', 'Trusted Bank']
    },
    {
      id: '3',
      name: 'Bajaj Finance',
      type: 'NBFC',
      maxAmount: 2500000,
      interestRate: '13-30%',
      processingTime: '2-4 hours',
      eligibilityScore: 78,
      features: ['Quick Approval', 'Flexible EMI', 'Pre-approved']
    }
  ];

  const userFinancialScore = 720;

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
            <div className="text-4xl font-bold text-primary">{userFinancialScore}</div>
            <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
              <Award className="w-4 h-4 mr-1" />
              Good
            </Badge>
          </div>
          <Progress value={(userFinancialScore / 850) * 100} className="h-4 mb-3" />
          <p className="text-sm text-muted-foreground">
            Your score is improving! Keep managing debts well to reach 750+ for better loan rates
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="advice" className="w-full">
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
                <p className="text-sm text-muted-foreground mb-3">Get instant advice via chat</p>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  From ₹20/min
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Call an Advisor</h3>
                <p className="text-sm text-muted-foreground mb-3">Direct phone consultation</p>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  From ₹25/min
                </Badge>
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

          {/* Enhanced Available Advisors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Expert Advisors</span>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {advisors.filter(a => a.available).length} Available
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {advisors.map((advisor) => (
                <div key={advisor.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-muted/50 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {advisor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold">{advisor.name}</h4>
                      <p className="text-sm text-muted-foreground">{advisor.type} • {advisor.experience}</p>
                      <div className="flex items-center space-x-3 text-sm mt-1">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-1" />
                          <span className="font-medium">{advisor.rating}</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{advisor.speciality}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-sm font-bold">₹{advisor.pricePerMinute}/min</p>
                    <Button 
                      size="sm" 
                      className={advisor.available ? "bg-accent hover:bg-accent/90" : ""}
                      variant={advisor.available ? "default" : "secondary"}
                      disabled={!advisor.available}
                    >
                      {advisor.available ? 'Connect' : 'Busy'}
                    </Button>
                  </div>
                </div>
              ))}
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
                    Based on your score of {userFinancialScore}, you're eligible for these exclusive loans
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Loan Options */}
          <div className="space-y-6">
            {loanProviders.map((provider) => (
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
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={provider.eligibilityScore < 60}
                    >
                      Apply Now
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
}