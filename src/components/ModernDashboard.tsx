import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Eye, EyeOff, ArrowUpRight, ArrowDownRight, Plus, Minus, TrendingUp, Zap, Target } from 'lucide-react';
import { useState } from 'react';


interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  amount: number;
  date: string;
  category: string;
}

interface ModernDashboardProps {
  balance?: number;
  transactions?: Transaction[];
}

export function ModernDashboard({ balance = 25000, transactions = [] }: ModernDashboardProps) {
  const [showBalance, setShowBalance] = useState(true);

  const mockTransactions: Transaction[] = transactions.length > 0 ? transactions : [
    { id: '1', type: 'expense', description: 'Grocery Shopping', amount: 850, date: '2025-10-01', category: 'Food' },
    { id: '2', type: 'income', description: 'Salary Credit', amount: 15000, date: '2025-09-30', category: 'Salary' },
    { id: '3', type: 'expense', description: 'Auto Rickshaw', amount: 45, date: '2025-09-30', category: 'Transport' },
    { id: '4', type: 'expense', description: 'Mobile Recharge', amount: 299, date: '2025-09-29', category: 'Bills' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section with Visual */}
      <div className="text-center space-y-4">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwaG9tZSUyMHBhZ2UlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU5NDAxMTEyfDA&ixlib=rb-4.1.0&q=80&w=400"
            alt="Financial Home Page Illustration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-1">Good Morning, Rahul!</h2>
          <p className="text-muted-foreground">Let's manage your finances smartly today</p>
        </div>
      </div>

      {/* Enhanced Balance Card */}
      <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <CardHeader className="pb-2 relative">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <span>Total Balance</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBalance(!showBalance)}
              className="text-primary-foreground hover:bg-white/20"
            >
              {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-4xl font-bold mb-3">
            {showBalance ? `₹${balance.toLocaleString('en-IN')}` : '₹••••••'}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm opacity-90">
              SBI ••••3421
            </div>
            <Badge className="bg-white/20 text-white border-white/30">
              <Zap className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Quick Stats */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-200/30 rounded-full -translate-y-8 translate-x-8"></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <ArrowDownRight className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-600 font-medium">Income</p>
                <p className="text-xl font-bold text-green-800">₹15,000</p>
                <p className="text-xs text-green-600">This month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-200/30 rounded-full -translate-y-8 translate-x-8"></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-red-600 font-medium">Expenses</p>
                <p className="text-xl font-bold text-red-800">₹8,240</p>
                <p className="text-xs text-red-600">This month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Budget Progress */}
      <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-accent/20 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-accent" />
            </div>
            <span>Monthly Budget Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Spent: ₹8,240</span>
              <span className="text-muted-foreground">Budget: ₹12,000</span>
            </div>
            <div className="relative">
              <Progress value={68.7} className="h-3" />
              <div className="absolute top-0 left-0 h-3 w-2/3 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-accent">₹3,760 remaining</p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                On Track 🎯
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recent Transactions</span>
            <Button variant="outline" size="sm">View All</Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockTransactions.map((transaction, index) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-muted/50 hover:shadow-md transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${
                  transaction.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.type === 'income' ? 
                    <Plus className="w-5 h-5" /> : 
                    <Minus className="w-5 h-5" />
                  }
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-muted-foreground">{transaction.category}</p>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-lg ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-auto p-4 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:from-accent/10 hover:to-accent/20">
          <div className="text-center">
            <Plus className="w-6 h-6 mx-auto mb-2 text-accent" />
            <p className="font-medium">Add Transaction</p>
          </div>
        </Button>
        
        <Button variant="outline" className="h-auto p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:from-primary/10 hover:to-primary/20">
          <div className="text-center">
            <Target className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="font-medium">Set Goal</p>
          </div>
        </Button>
      </div>
    </div>
  );
}