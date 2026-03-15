import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { ArrowUpRight, ArrowDownRight, PiggyBank, Users, Target, TrendingUp, Crown, Star, Gift } from 'lucide-react';


interface DebtItem {
  id: string;
  name: string;
  amount: number;
  type: 'lend' | 'borrow';
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

interface SavingsGoal {
  id: string;
  name: string;
  target: number;
  current: number;
  category: string;
  deadline: string;
}

export function ModernUdhaariGullack() {
  const [activeTab, setActiveTab] = useState('udhaari');

  const debts: DebtItem[] = [
    { id: '1', name: 'Rahul Singh', amount: 500, type: 'lend', dueDate: '2025-10-05', priority: 'high' },
    { id: '2', name: 'Priya Sharma', amount: 1200, type: 'borrow', dueDate: '2025-10-10', priority: 'medium' },
    { id: '3', name: 'Vikash Kumar', amount: 300, type: 'lend', dueDate: '2025-10-15', priority: 'low' },
    { id: '4', name: 'Local Kirana', amount: 800, type: 'borrow', dueDate: '2025-10-08', priority: 'high' },
  ];

  const savingsGoals: SavingsGoal[] = [
    { id: '1', name: 'Emergency Fund', target: 50000, current: 15000, category: 'Safety', deadline: '2025-12-31' },
    { id: '2', name: 'New Phone', target: 25000, current: 8500, category: 'Electronics', deadline: '2025-11-30' },
    { id: '3', name: 'Festival Shopping', target: 10000, current: 7200, category: 'Festival', deadline: '2025-10-20' },
  ];

  const lendAmount = debts.filter(d => d.type === 'lend').reduce((sum, d) => sum + d.amount, 0);
  const borrowAmount = debts.filter(d => d.type === 'borrow').reduce((sum, d) => sum + d.amount, 0);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="relative w-28 h-28 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1603738115219-d2d66074819d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJ0JTIwbGVuZGluZyUyMG1vbmV5JTIwZXhjaGFuZ2V8ZW58MXx8fHwxNzU5MzkwNzE0fDA&ixlib=rb-4.1.0&q=80&w=200"
            alt="Money Exchange"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">Udhaari & Gullack</h2>
          <p className="text-muted-foreground">Manage lending and savings smartly</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-muted/30 rounded-xl p-1">
          <TabsTrigger value="udhaari" className="flex items-center space-x-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Users className="w-4 h-4" />
            <span>Udhaari</span>
          </TabsTrigger>
          <TabsTrigger value="gullack" className="flex items-center space-x-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <PiggyBank className="w-4 h-4" />
            <span>Gullack</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="udhaari" className="space-y-6 mt-6">
          {/* Enhanced Summary Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full -translate-y-10 translate-x-10"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <ArrowDownRight className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-medium">You'll Get</p>
                    <p className="text-2xl font-bold text-green-800">₹{lendAmount}</p>
                    <p className="text-xs text-green-600">From friends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-200/30 rounded-full -translate-y-10 translate-x-10"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-medium">You Owe</p>
                    <p className="text-2xl font-bold text-red-800">₹{borrowAmount}</p>
                    <p className="text-xs text-red-600">To others</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced AI Suggestion */}
          <Card className="bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-6 relative">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-accent mb-2">AI Smart Suggestion</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Clear your ₹800 debt with Local Kirana first - it's due soon and affects your local credit score!
                  </p>
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Take Action
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Debt List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Active Udhaari</span>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {debts.length} Active
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {debts.map((debt) => (
                <div key={debt.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-muted/50 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {debt.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{debt.name}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-muted-foreground">Due: {debt.dueDate}</p>
                        <Badge variant="outline" className={getPriorityColor(debt.priority)}>
                          {debt.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className={`font-bold text-lg ${
                      debt.type === 'lend' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {debt.type === 'lend' ? '+' : '-'}₹{debt.amount}
                    </p>
                    <Button size="sm" variant="outline">
                      {debt.type === 'lend' ? 'Remind' : 'Pay'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Gamification Progress */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">🚶‍♂️</div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-2">Debt Clearing Journey</h3>
                  <p className="text-sm text-muted-foreground mb-3">Clear debts to reach your financial freedom!</p>
                  <Progress value={40} className="h-3 mb-2" />
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">40% Complete</p>
                    <Badge className="bg-primary/20 text-primary">
                      <Star className="w-3 h-3 mr-1" />
                      Level 2
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gullack" className="space-y-6 mt-6">
          {/* Enhanced Total Savings */}
          <Card className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <div>
                  <span>Total Savings</span>
                  <div className="text-sm opacity-80">Your Gullack Balance</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-4xl font-bold mb-3">₹30,700</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm opacity-90">
                  <TrendingUp className="w-4 h-4" />
                  <span>+₹2,500 this month</span>
                </div>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Gift className="w-3 h-3 mr-1" />
                  Growing
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced AI Saving Tip */}
          <Card className="bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1580508174046-170816f65662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb25leSUyMHNhdmluZ3MlMjBwaWdneSUyMGJhbmt8ZW58MXx8fHwxNzU5MzMxMTgyfDA&ixlib=rb-4.1.0&q=80&w=150"
                alt="Savings"
                className="w-full h-full object-cover rounded-xl opacity-20"
              />
            </div>
            <CardContent className="p-6 relative">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-accent mb-2">Smart Saving Tip</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Buy a monthly bus pass for ₹800 instead of daily tickets. You'll save ₹400/month!
                  </p>
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Apply Tip
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Savings Goals */}
          <div className="space-y-4">
            <h3 className="font-bold text-primary flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Savings Goals</span>
            </h3>
            {savingsGoals.map((goal) => {
              const progress = (goal.current / goal.target) * 100;
              return (
                <Card key={goal.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold">{goal.name}</h4>
                          <p className="text-sm text-muted-foreground">{goal.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">₹{goal.current.toLocaleString()} / ₹{goal.target.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{goal.deadline}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Progress value={progress} className="h-3" />
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-primary">
                          {progress.toFixed(1)}% complete
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ₹{(goal.target - goal.current).toLocaleString()} remaining
                        </p>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Add Money
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Gullack Animation */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">🐷</div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-2">Your Gullack is Growing!</h3>
                  <p className="text-sm text-muted-foreground mb-3">Keep saving to see it fill up with coins!</p>
                  <div className="flex space-x-1 mb-3">
                    {[1,2,3,4,5,6,7,8,9,10].map((coin, i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          i < 6 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm' : 'bg-gray-200'
                        }`} 
                      />
                    ))}
                  </div>
                  <Badge className="bg-primary/20 text-primary">
                    <Star className="w-3 h-3 mr-1" />
                    60% Full
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}