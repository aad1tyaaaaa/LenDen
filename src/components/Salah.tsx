import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MessageCircle, Phone, Star, Shield, TrendingUp, Building, Crown } from 'lucide-react';

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

export function Salah() {
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

  const userFinancialScore = 720; // Mock credit score

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">Salah (Advice)</h2>
        <p className="text-muted-foreground">Get expert financial guidance and opportunities</p>
      </div>

      {/* Financial Health Score */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Crown className="w-6 h-6 text-accent" />
            <span>Your Financial Health Score</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl font-bold text-primary">{userFinancialScore}</div>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
              Good
            </Badge>
          </div>
          <Progress value={(userFinancialScore / 850) * 100} className="h-3 mb-2" />
          <p className="text-sm text-muted-foreground">
            Your score is improving! Keep managing debts well to reach 750+
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="advice" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="advice" className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Get Advice</span>
          </TabsTrigger>
          <TabsTrigger value="loans" className="flex items-center space-x-2">
            <Building className="w-4 h-4" />
            <span>Loan Options</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="advice" className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-medium">Chat with Expert</p>
                <p className="text-xs text-muted-foreground">Start ₹20/min</p>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-medium">Call an Advisor</p>
                <p className="text-xs text-muted-foreground">Start ₹25/min</p>
              </div>
            </Button>
          </div>

          {/* AI Recommendations */}
          <Card className="bg-accent/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-accent" />
                <span>AI Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-white rounded-lg border">
                <h4 className="font-medium text-sm">💡 Immediate Action</h4>
                <p className="text-sm text-muted-foreground">
                  Clear your high-priority debt of ₹800 with Local Kirana to improve local credit
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <h4 className="font-medium text-sm">📈 Investment Tip</h4>
                <p className="text-sm text-muted-foreground">
                  Start a SIP of ₹500/month in ELSS funds for tax savings and growth
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <h4 className="font-medium text-sm">🎯 Goal Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Create a dedicated emergency fund goal of ₹1 lakh for better financial security
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Available Advisors */}
          <Card>
            <CardHeader>
              <CardTitle>Expert Advisors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {advisors.map((advisor) => (
                <div key={advisor.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">
                        {advisor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">{advisor.name}</h4>
                      <p className="text-sm text-muted-foreground">{advisor.type} • {advisor.experience}</p>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-1" />
                          <span>{advisor.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{advisor.speciality}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">₹{advisor.pricePerMinute}/min</p>
                    <Button 
                      size="sm" 
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

        <TabsContent value="loans" className="space-y-6">
          {/* Eligibility Banner */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-medium text-green-800">Pre-Qualified Offers</h3>
                  <p className="text-sm text-green-600">
                    Based on your score of {userFinancialScore}, you're eligible for these loans
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loan Options */}
          <div className="space-y-4">
            {loanProviders.map((provider) => (
              <Card key={provider.id} className="relative">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{provider.name}</CardTitle>
                    <Badge variant="outline" className={
                      provider.eligibilityScore >= 80 ? 'bg-green-100 text-green-800 border-green-200' :
                      provider.eligibilityScore >= 70 ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                      'bg-red-100 text-red-800 border-red-200'
                    }>
                      {provider.eligibilityScore}% Match
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{provider.type}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Max Amount</p>
                      <p className="font-medium">₹{(provider.maxAmount / 100000).toFixed(1)}L</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Interest Rate</p>
                      <p className="font-medium">{provider.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Processing Time</p>
                      <p className="font-medium">{provider.processingTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Eligibility</p>
                      <Progress value={provider.eligibilityScore} className="h-2 mt-1" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {provider.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary"
                      disabled={provider.eligibilityScore < 60}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
                {provider.eligibilityScore >= 80 && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-accent text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Recommended
                    </Badge>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Loan Calculator CTA */}
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-medium">EMI Calculator</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Calculate your monthly payments before applying
              </p>
              <Button variant="outline" size="sm">
                Open Calculator
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}