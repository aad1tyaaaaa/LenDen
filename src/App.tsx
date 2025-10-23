import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { Separator } from './components/ui/separator';
import { Switch } from './components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';
import { Settings as SettingsComponent } from './components/Settings';
import { 
  // ... (imports)
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
  ChevronRight,
  Bell,
  User,
  CreditCard,
  Globe,
  Lock,
  Smartphone,
  Download,
  LogOut,
  Info,
  HelpCircle,
  ExternalLink,
  Lightbulb
} from 'lucide-react';

type Page = 'home' | 'udhaari' | 'salah' | 'settings';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  amount: number;
  date: string;
  category: string;
}

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

import CommunityTab from './components/CommunityTab';

interface Advisor {
  id: string;
  name: string;
  type: 'CA' | 'Financial Advisor' | 'Expert';
  rating: number;
  experience: string;
  speciality: string;
  available: boolean;
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
  websiteUrl: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showBalance, setShowBalance] = useState(true);
  const [showVoiceInput, setShowVoiceInput] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [activeUdhaariTab, setActiveUdhaariTab] = useState('udhaari');
  const [activeSalahTab, setActiveSalahTab] = useState('advice');

  // Voice Input States
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStage, setProcessingStage] = useState('');

  // Loan Modal States
  const [showLoanModal, setShowLoanModal] = useState(false); // This state is now unused as CommunityTab has its own modal logic
  const [selectedLoan, setSelectedLoan] = useState<LoanProvider | null>(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'udhaari', label: 'Udhaari', icon: PiggyBank },
    { id: 'salah', label: 'Salah', icon: MessageCircle },
    { id: 'community', label: 'Community', icon: Lightbulb },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Dummy Data
  const mockTransactions: Transaction[] = [
    { id: '1', type: 'expense', description: 'Grocery Shopping', amount: 850, date: '2025-10-01', category: 'Food' },
    { id: '2', type: 'income', description: 'Salary Credit', amount: 15000, date: '2025-09-30', category: 'Salary' },
    { id: '3', type: 'expense', description: 'Auto Rickshaw', amount: 45, date: '2025-09-30', category: 'Transport' },
    { id: '4', type: 'expense', description: 'Mobile Recharge', amount: 299, date: '2025-09-29', category: 'Bills' },
    { id: '5', type: 'expense', description: 'Tea with friends', amount: 20, date: '2025-09-29', category: 'Food' },
    { id: '6', type: 'income', description: 'Freelance Work', amount: 2500, date: '2025-09-28', category: 'Work' },
  ];

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

  const advisors: Advisor[] = [
    {
      id: '1',
      name: 'CA Rajesh Kumar',
      type: 'CA',
      rating: 4.8,
      experience: '8 years',
      speciality: 'Tax Planning',
      available: true
    },
    {
      id: '2',
      name: 'Priya Mehta',
      type: 'Financial Advisor',
      rating: 4.6,
      experience: '5 years',
      speciality: 'Investment Planning',
      available: false
    },
    {
      id: '3',
      name: 'Dr. Amit Sharma',
      type: 'Expert',
      rating: 4.9,
      experience: '12 years',
      speciality: 'Debt Management',
      available: true
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
      features: ['No Collateral', 'Instant Approval', 'Digital Process'],
      websiteUrl: 'https://www.paysense.co.in'
    },
    {
      id: '2',
      name: 'HDFC Personal Loan',
      type: 'Bank',
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
      type: 'NBFC',
      maxAmount: 2500000,
      interestRate: '13-30%',
      processingTime: '2-4 hours',
      eligibilityScore: 78,
      features: ['Quick Approval', 'Flexible EMI', 'Pre-approved'],
      websiteUrl: 'https://www.bajajfinserv.in'
    }
  ];

  const linkedAccounts = [
    { id: '1', name: 'SBI Bank', number: '••••3421', type: 'Primary', connected: true, logo: '🏦' },
    { id: '2', name: 'Google Pay', number: 'user@gmail.com', type: 'UPI', connected: true, logo: '💳' },
    { id: '3', name: 'Paytm', number: '+91 ••••••7890', type: 'Wallet', connected: false, logo: '💰' },
  ];

  const languages = [
    { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳', active: true },
    { code: 'en', name: 'English', flag: '🇬🇧', active: false },
    { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳', active: false },
    { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳', active: false },
  ];

  const voiceSuggestions = [
    'मैंने चाय पर 20 रुपये खर्च किए',
    'I spent 50 rupees on auto rickshaw',
    'ऑटो में 45 रुपये दिए',
    'Add 500 rupees grocery expense',
    'राहुल को 200 रुपये उधार दिए',
    'Received 15000 salary'
  ];



  // Helper Functions
  const lendAmount = debts.filter(d => d.type === 'lend').reduce((sum, d) => sum + d.amount, 0);
  const borrowAmount = debts.filter(d => d.type === 'borrow').reduce((sum, d) => sum + d.amount, 0);
  const userFinancialScore = 720;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Voice Input Functions
  const handleStartListening = () => {
    setIsListening(true);
    setTranscript('');
    
    // Mock voice recognition with realistic timing
    setTimeout(() => {
      setTranscript('मैंने आज ऑटो में 45 रुपये खर्च किए');
      setIsListening(false);
      setIsProcessing(true);
      setProcessingStage('Understanding your words...');
      
      setTimeout(() => {
        setProcessingStage('Analyzing transaction...');
        
        setTimeout(() => {
          setProcessingStage('Adding to your account...');
          
          setTimeout(() => {
            setIsProcessing(false);
            // Add transaction
            const newTransaction: Transaction = {
              id: Date.now().toString(),
              type: 'expense',
              description: 'Auto Rickshaw (Voice)',
              amount: 45,
              date: new Date().toISOString().split('T')[0],
              category: 'Transport'
            };
            setTransactions(prev => [newTransaction, ...prev]);
            
            setTimeout(() => {
              setShowVoiceInput(false);
              setTranscript('');
            }, 2000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 3000);
  };

  const handleStopListening = () => {
    setIsListening(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTranscript(suggestion);
    setIsProcessing(true);
    setProcessingStage('Processing your request...');
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowVoiceInput(false);
      setTranscript('');
    }, 2000);
  };

  const displayTransactions = transactions.length > 0 ? transactions : mockTransactions;

  const renderHome = () => (
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
            {showBalance ? '₹25,000' : '₹••••••'}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm opacity-90">SBI ••••3421</div>
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
          {displayTransactions.slice(0, 4).map((transaction, index) => (
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
      </div>
    </div>
  );

  const renderUdhaari = () => (
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

      <Tabs value={activeUdhaariTab} onValueChange={setActiveUdhaariTab} className="w-full">
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

  const renderSalah = () => (
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

      <Tabs value={activeSalahTab} onValueChange={setActiveSalahTab} className="w-full">
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
                  <div className="text-right">
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



  const renderSettings = () => <SettingsComponent />;

  const renderLoanModal = () => {
    if (!showLoanModal || !selectedLoan) return null;

    return (
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
                    Based on your financial score of {userFinancialScore}
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
    );
  };

  const renderVoiceInput = () => {
    if (!showVoiceInput) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl border-0">
          <CardContent className="p-8">
            <div className="text-center space-y-8">
              {/* Header */}
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1614625322127-fd3d693b0992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMG1pY3JvcGhvbmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTM0NzQ3Nnww&ixlib=rb-4.1.0&q=80&w=150"
                    alt="Voice Technology"
                    className="w-full h-full object-cover rounded-2xl shadow-lg opacity-80"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary">Voice Input</h3>
                <p className="text-muted-foreground">
                  Say your transaction in Hindi or English
                </p>
              </div>

              {/* Enhanced Voice Animation */}
              <div className="relative">
                <div className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center transition-all duration-500 ${
                  isListening ? 'bg-gradient-to-r from-red-400 to-red-600 animate-pulse shadow-2xl' : 
                  isProcessing ? 'bg-gradient-to-r from-accent to-primary shadow-xl' : 
                  'bg-gradient-to-r from-primary/20 to-accent/20 shadow-lg'
                }`}>
                  {isProcessing ? (
                    <RefreshCw className="w-16 h-16 text-white animate-spin" />
                  ) : isListening ? (
                    <Mic className="w-16 h-16 text-white" />
                  ) : (
                    <MicOff className="w-16 h-16 text-primary" />
                  )}
                </div>
                
                {isListening && (
                  <>
                    <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-red-300 animate-ping mx-auto" />
                    <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-red-200 animate-pulse mx-auto" />
                  </>
                )}
                
                {isProcessing && (
                  <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-accent/30 animate-spin mx-auto" />
                )}
              </div>

              {/* Enhanced Status */}
              <div className="space-y-4">
                {isListening && (
                  <div className="space-y-2">
                    <Badge className="bg-red-100 text-red-800 border-red-200 px-4 py-2">
                      <Mic className="w-4 h-4 mr-2" />
                      Listening... Speak now
                    </Badge>
                    <div className="flex justify-center space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <div
                          key={i}
                          className="w-1 h-8 bg-red-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {isProcessing && (
                  <div className="space-y-3">
                    <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2">
                      <Zap className="w-4 h-4 mr-2" />
                      Processing...
                    </Badge>
                    <p className="text-sm text-muted-foreground">{processingStage}</p>
                  </div>
                )}
                
                {transcript && !isListening && !isProcessing && (
                  <div className="space-y-3">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <p className="font-medium text-green-800">Transaction Added Successfully!</p>
                      </div>
                      <p className="text-sm text-green-700">"{transcript}"</p>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-sm text-accent font-medium">
                        ✨ Detected: Auto Rickshaw expense of ₹45
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Controls */}
              {!isProcessing && (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    {!isListening ? (
                      <Button
                        onClick={handleStartListening}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg rounded-2xl shadow-lg"
                        size="lg"
                      >
                        <Mic className="w-6 h-6 mr-3" />
                        Start Speaking
                      </Button>
                    ) : (
                      <Button
                        onClick={handleStopListening}
                        variant="outline"
                        className="border-2 border-red-200 text-red-600 hover:bg-red-50 px-8 py-4 text-lg rounded-2xl"
                        size="lg"
                      >
                        <MicOff className="w-6 h-6 mr-3" />
                        Stop Listening
                      </Button>
                    )}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" onClick={() => setShowVoiceInput(false)} className="hover:bg-muted/50">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {/* Enhanced Suggestions */}
              {!isListening && !isProcessing && !transcript && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Volume2 className="w-5 h-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground font-medium">Quick examples to try:</p>
                  </div>
                  
                  <div className="space-y-3">
                    {voiceSuggestions.slice(0, 3).map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-left h-auto p-3 bg-gradient-to-r from-muted/30 to-muted/10 border-muted/50 hover:from-muted/50 hover:to-muted/30 text-xs"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <Volume2 className="w-3 h-3 mr-2 text-muted-foreground" />
                        "{suggestion}"
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Success State */}
              {transcript && !isListening && !isProcessing && (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    Transaction recorded successfully! Closing in a moment...
                  </p>
                </div>
              )}

              {/* Enhanced Language Support */}
              {!isListening && !isProcessing && !transcript && (
                <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <p className="text-xs text-muted-foreground mb-2">Supported Languages:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-xs">🇮🇳 हिंदी</Badge>
                    <Badge variant="outline" className="text-xs">🇬🇧 English</Badge>
                    <Badge variant="outline" className="text-xs">🇮🇳 తెలుగు</Badge>
                    <Badge variant="outline" className="text-xs">🇮🇳 தமிழ்</Badge>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderCommunity = () => <CommunityTab />;

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return renderHome();
      case 'udhaari': return renderUdhaari();
      case 'salah': return renderSalah();
      case 'community': return renderCommunity();
      case 'settings': return renderSettings();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-black to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-xl w-full">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-md mx-auto p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="LenDen Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
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

      {/* Main Content */}
      <main className="flex-1 max-w-md mx-auto w-full p-4 sm:p-6 pb-24">
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-4 sm:p-6">
          {renderContent()}
        </div>
      </main>

      {/* Voice Button - Only visible on Home page */}
      {currentPage === 'home' && (
        <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50">
          <Button
            onClick={() => setShowVoiceInput(true)}
            className="w-20 h-20 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-200"
            size="icon"
          >
            <Mic className="w-10 h-10" />
          </Button>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md shadow-2xl border-t border-orange/20">
        <div className="max-w-md mx-auto flex">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as Page)}
                className={`flex-1 p-3 sm:p-4 text-center transition-all duration-200 ${
                  isActive
                    ? 'text-orange bg-gray-900 border-t-2 border-orange/50'
                    : 'text-gray-400 hover:text-orange hover:bg-gray-800'
                }`}
              >
                <item.icon className={`w-5 sm:w-6 h-5 sm:h-6 mx-auto mb-1 ${isActive ? 'scale-110 text-orange' : 'text-gray-400'} transition-transform duration-200`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Voice Input Modal */}
      {renderVoiceInput()}
      
      {/* Loan Details Modal */}
      {renderLoanModal()}
    </div>
  );
}