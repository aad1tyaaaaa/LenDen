import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { ArrowUpRight, ArrowDownRight, PiggyBank, Users, Target, TrendingUp, Crown } from 'lucide-react';

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

export function UdhaariGullack() {
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
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">Udhaari & Gullack</h2>
        <p className="text-muted-foreground">Manage your lending and savings smartly</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="udhaari" className="flex items-center space-x-2 justify-center">
            <Users className="w-4 h-4" />
            <span>Udhaari</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center space-x-2 justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-4 h-4">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a7 7 0 0 0-7 7c0 3.866 3 6 3 6h8s3-2.134 3-6a7 7 0 0 0-7-7z" />
            </svg>
            <span>Community</span>
          </TabsTrigger>
          <TabsTrigger value="gullack" className="flex items-center space-x-2 justify-center">
            <PiggyBank className="w-4 h-4" />
            <span>Gullack</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="udhaari" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <ArrowDownRight className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-green-600">You'll Get</p>
                    <p className="font-bold text-green-800">₹{lendAmount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm text-red-600">You Owe</p>
                    <p className="font-bold text-red-800">₹{borrowAmount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Suggestion */}
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-accent">AI Suggestion</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Clear your ₹800 debt with Local Kirana first - it's due soon and affects your local credit!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Debt List */}
          <Card>
            <CardHeader>
              <CardTitle>Active Udhaari</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {debts.map((debt) => (
                <div key={debt.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>{debt.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{debt.name}</p>
                      <p className="text-sm text-muted-foreground">Due: {debt.dueDate}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className={`font-medium ${
                      debt.type === 'lend' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {debt.type === 'lend' ? '+' : '-'}₹{debt.amount}
                    </p>
                    <Badge variant="outline" className={getPriorityColor(debt.priority)}>
                      {debt.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Gamification Progress */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🚶‍♂️</div>
                <div className="flex-1">
                  <h3 className="font-medium">Debt Clearing Journey</h3>
                  <p className="text-sm text-muted-foreground">Clear debts to move forward!</p>
                  <Progress value={40} className="mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Tab</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Welcome to the Community tab! This is where community-related content will be displayed.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gullack" className="space-y-6">
          {/* Total Savings */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PiggyBank className="w-6 h-6" />
                <span>Total Savings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">₹30,700</div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <TrendingUp className="w-4 h-4" />
                <span>+₹2,500 this month</span>
              </div>
            </CardContent>
          </Card>

          {/* AI Saving Tip */}
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-accent">Smart Saving Tip</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Buy a monthly bus pass for ₹800 instead of daily tickets. You'll save ₹400/month!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Savings Goals */}
          <div className="space-y-4">
            <h3 className="font-medium">Savings Goals</h3>
            {savingsGoals.map((goal) => {
              const progress = (goal.current / goal.target) * 100;
              return (
                <Card key={goal.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{goal.name}</h4>
                        <p className="text-sm text-muted-foreground">{goal.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{goal.current} / ₹{goal.target}</p>
                        <p className="text-sm text-muted-foreground">{goal.deadline}</p>
                      </div>
                    </div>
                    <Progress value={progress} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {progress.toFixed(1)}% complete • ₹{goal.target - goal.current} remaining
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Gullack Animation */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🐷</div>
                <div className="flex-1">
                  <h3 className="font-medium">Your Gullack is Growing!</h3>
                  <p className="text-sm text-muted-foreground">Keep saving to see it fill up!</p>
                  <div className="mt-2 flex space-x-1">
                    {[1,2,3,4,5,6,7,8].map((coin, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full ${
                          i < 5 ? 'bg-yellow-400' : 'bg-gray-200'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}