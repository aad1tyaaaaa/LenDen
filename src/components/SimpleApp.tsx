import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Home, PiggyBank, MessageCircle, Settings, Mic, Crown, TrendingUp } from 'lucide-react';

export function SimpleApp() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-primary/5">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-xl">
        <div className="max-w-md mx-auto p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-wide">LeinDen</h1>
              <p className="text-primary-foreground/80 text-sm">Smart Financial Partner</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-accent text-white">
                <Crown className="w-3 h-3 mr-1" />
                Free
              </Badge>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto w-full p-6 pb-24">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
          {/* Welcome Section */}
          <div className="text-center space-y-4 mb-8">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-1">Good Morning, Rahul!</h2>
              <p className="text-muted-foreground">Let's manage your finances smartly today</p>
            </div>
          </div>

          {/* Balance Card */}
          <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="pb-2 relative">
              <CardTitle className="flex items-center justify-between">
                <span>Total Balance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-4xl font-bold mb-3">₹25,000</div>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-90">SBI ••••3421</div>
                <Badge className="bg-white/20 text-white border-white/30">Active</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-medium">Income</p>
                    <p className="text-xl font-bold text-green-800">₹15,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-medium">Expenses</p>
                    <p className="text-xl font-bold text-red-800">₹8,240</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simple Feature Cards */}
          <div className="space-y-4">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold">Udhaari & Gullack</h3>
                    <p className="text-sm text-muted-foreground">Manage lending and savings</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Advice</h3>
                    <p className="text-sm text-muted-foreground">Get financial guidance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Voice Button */}
      <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50">
        <Button className="w-20 h-20 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-200" size="icon">
          <Mic className="w-10 h-10" />
        </Button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-white/50">
        <div className="max-w-md mx-auto flex">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'udhaari', label: 'Udhaari', icon: PiggyBank },
            { id: 'salah', label: 'Salah', icon: MessageCircle },
            { id: 'premium', label: 'Premium', icon: Crown },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex-1 p-4 text-center transition-all duration-200 ${
                  isActive
                    ? 'text-primary bg-primary/5 border-t-2 border-primary'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <item.icon className={`w-6 h-6 mx-auto mb-1 ${isActive ? 'scale-110' : ''} transition-transform duration-200`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}