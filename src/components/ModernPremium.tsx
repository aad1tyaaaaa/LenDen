import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Crown, Star, Zap, Shield, TrendingUp, Users, MessageCircle, Gift } from 'lucide-react';


export function ModernPremium() {
  const freFeatures = [
    'Basic transaction tracking',
    'Voice input (10 transactions/day)',
    'Simple budgeting tools',
    'Basic debt tracking',
    'Community support',
  ];

  const premiumFeatures = [
    'Unlimited voice transactions',
    'AI-powered financial insights',
    'Priority expert consultation',
    'Advanced analytics & reports',
    'Custom savings goals',
    'Multi-language voice support',
    'Bill reminders & automation',
    'Investment recommendations',
    'Debt optimization strategies',
    'Premium customer support',
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'LeinDen Premium helped me save ₹15,000 in just 3 months with smart AI suggestions!',
      image: 'PS'
    },
    {
      name: 'Rahul Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'The expert advice feature is amazing. Cleared all my debts systematically.',
      image: 'RK'
    },
    {
      name: 'Anjali Patel',
      location: 'Pune',
      rating: 5,
      comment: 'Voice input in Gujarati made managing finances so easy for my mother.',
      image: 'AP'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1695503117452-22dfcc72e6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdXBncmFkZSUyMGNyb3duJTIwZ29sZHxlbnwxfHx8fDE3NTkzOTA3MjN8MA&ixlib=rb-4.1.0&q=80&w=250"
            alt="Premium Crown"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <Crown className="w-6 h-6 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LeinDen Premium
          </h2>
          <p className="text-muted-foreground text-lg">Unlock the full power of smart financial management</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6">
        {/* Free Plan */}
        <Card className="border-2 border-muted/50 relative">
          <CardHeader className="text-center pb-4">
            <Badge variant="outline" className="w-fit mx-auto mb-2">
              Current Plan
            </Badge>
            <CardTitle className="text-xl">Free</CardTitle>
            <div className="text-3xl font-bold">₹0</div>
            <p className="text-muted-foreground">Forever</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {freFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full" disabled>
              Current Plan
            </Button>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="border-2 border-gradient-to-r from-primary to-accent bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-accent to-primary text-white">
              <Star className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          </div>
          <CardHeader className="text-center pb-4 relative">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Premium</CardTitle>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-4xl font-bold text-primary">₹99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">7-day free trial • Cancel anytime</p>
          </CardHeader>
          <CardContent className="space-y-6 relative">
            <div className="space-y-3">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/50 rounded-xl border border-white/50">
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs text-muted-foreground">10x Faster</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Smart AI</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-xs text-muted-foreground">Priority Support</p>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-3 text-lg">
              <Crown className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Value Proposition */}
      <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-green-800 text-xl">Save More with Premium</h3>
            <p className="text-green-700">
              Premium users save an average of <span className="font-bold">₹3,500 per month</span> with AI-powered insights
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="text-center">
                <div className="font-bold text-green-800">₹99</div>
                <div className="text-green-600">Monthly cost</div>
              </div>
              <div className="text-2xl text-green-600">→</div>
              <div className="text-center">
                <div className="font-bold text-green-800">₹3,500</div>
                <div className="text-green-600">Average savings</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Showcase */}
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-accent to-accent/80 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-accent mb-1">AI Financial Coach</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized advice and smart suggestions to optimize your finances automatically
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Priority Expert Access</h3>
                <p className="text-sm text-muted-foreground">
                  Skip the queue and get instant access to financial experts and chartered accountants
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center space-x-2">
            <Star className="w-6 h-6 text-yellow-400" />
            <span>What Premium Users Say</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-muted/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.image}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <span className="text-sm text-muted-foreground">• {testimonial.location}</span>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.comment}"</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trust Elements */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-800 text-sm">Bank-Level Security</h4>
              <p className="text-xs text-blue-600">256-bit encryption</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Gift className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-800 text-sm">Money-Back Guarantee</h4>
              <p className="text-xs text-blue-600">30-day guarantee</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-800 text-sm">50K+ Users</h4>
              <p className="text-xs text-blue-600">Trust LeinDen</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-primary via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <CardContent className="p-8 text-center relative">
          <Crown className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-2">Ready to take control of your finances?</h2>
          <p className="text-white/80 mb-6">Start your 7-day free trial today. No commitment, cancel anytime.</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8">
            <Crown className="w-5 h-5 mr-2" />
            Start Free Trial
          </Button>
          <p className="text-xs text-white/70 mt-4">
            ✨ No credit card required • Instant activation • Full access
          </p>
        </CardContent>
      </Card>
    </div>
  );
}