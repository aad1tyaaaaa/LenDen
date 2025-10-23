import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Eye, EyeOff, ArrowUpRight, ArrowDownRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  amount: number;
  date: string;
  category: string;
}

interface DashboardProps {
  balance?: number;
  transactions?: Transaction[];
}

export function Dashboard({ balance = 25000, transactions = [] }: DashboardProps) {
  const [showBalance, setShowBalance] = useState(true);

  const mockTransactions: Transaction[] = transactions.length > 0 ? transactions : [
    { id: '1', type: 'expense', description: 'Grocery Shopping', amount: 850, date: '2025-10-01', category: 'Food' },
    { id: '2', type: 'income', description: 'Salary Credit', amount: 15000, date: '2025-09-30', category: 'Salary' },
    { id: '3', type: 'expense', description: 'Auto Rickshaw', amount: 45, date: '2025-09-30', category: 'Transport' },
    { id: '4', type: 'expense', description: 'Mobile Recharge', amount: 299, date: '2025-09-29', category: 'Bills' },
  ];

  return (
    <div className="space-y-6">
      {/* Account Balance Card */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between">
            <span>Total Balance</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBalance(!showBalance)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold mb-2">
            {showBalance ? `₹${balance.toLocaleString('en-IN')}` : '₹••••••'}
          </div>
          <div className="text-sm opacity-80">
            Linked to SBI ••••3421
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <ArrowDownRight className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-green-600">This Month Income</p>
                <p className="font-bold text-green-800">₹15,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <ArrowUpRight className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm text-red-600">This Month Expense</p>
                <p className="font-bold text-red-800">₹8,240</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Progress */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Monthly Budget Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Spent: ₹8,240</span>
              <span>Budget: ₹12,000</span>
            </div>
            <Progress value={68.7} className="h-2" />
            <p className="text-sm text-muted-foreground">₹3,760 remaining this month</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'income' ? 
                    <Plus className="w-4 h-4 text-green-600" /> : 
                    <Minus className="w-4 h-4 text-red-600" />
                  }
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
                </p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}