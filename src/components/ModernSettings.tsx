import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  User, 
  CreditCard, 
  Globe, 
  Shield, 
  Bell, 
  HelpCircle, 
  Info, 
  ChevronRight, 
  Crown,
  Mic,
  Smartphone,
  Lock,
  Eye,
  Download,
  LogOut
} from 'lucide-react';

export function ModernSettings() {
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

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">Settings</h2>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>
      </div>

      {/* Enhanced Profile Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span>Profile Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">RK</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Rahul Kumar</h3>
              <p className="text-sm text-muted-foreground">rahul.kumar@gmail.com</p>
              <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              <Badge className="bg-primary/10 text-primary border-primary/20 mt-1">
                Verified
              </Badge>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Linked Accounts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <span>Linked Accounts</span>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {linkedAccounts.filter(a => a.connected).length} Connected
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {linkedAccounts.map((account, index) => (
            <div key={account.id}>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-muted/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-xl">
                    {account.logo}
                  </div>
                  <div>
                    <p className="font-bold">{account.name}</p>
                    <p className="text-sm text-muted-foreground">{account.number}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={account.type === 'Primary' ? 'default' : 'secondary'} className="text-xs">
                        {account.type}
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${
                        account.connected ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                      <span className="text-xs text-muted-foreground">
                        {account.connected ? 'Connected' : 'Disconnected'}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {account.connected ? 'Manage' : 'Connect'}
                </Button>
              </div>
              {index < linkedAccounts.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
          <Button variant="outline" className="w-full bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:from-primary/10 hover:to-accent/10">
            <CreditCard className="w-4 h-4 mr-2" />
            Add New Account
          </Button>
        </CardContent>
      </Card>

      {/* Enhanced Language Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span>Language & Voice</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-bold flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>App Language</span>
            </h4>
            <div className="grid gap-3">
              {languages.map((lang) => (
                <div key={lang.code} className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border border-muted/50">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  <Switch checked={lang.active} />
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <h4 className="font-bold flex items-center space-x-2">
              <Mic className="w-4 h-4" />
              <span>Voice Settings</span>
            </h4>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">Voice Recognition</p>
                  <p className="text-sm text-muted-foreground">Train your voice for better accuracy</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-accent/10 border-accent/20 text-accent">
                Train Voice
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span>Security & Privacy</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Extra security for your account</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-800 border-green-200">Enabled</Badge>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
          </div>
          
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Voice Biometrics</p>
                  <p className="text-sm text-muted-foreground">Secure voice authentication</p>
                </div>
              </div>
              <Switch checked={true} />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">App Lock</p>
                  <p className="text-sm text-muted-foreground">PIN or biometric lock</p>
                </div>
              </div>
              <Switch checked={true} />
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-between hover:bg-muted/50">
              <span>Privacy Policy</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" className="w-full justify-between hover:bg-muted/50">
              <span>Data & Permissions</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            <span>Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg">
              <div>
                <p className="font-medium">Transaction Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified of all transactions</p>
              </div>
              <Switch checked={true} />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg">
              <div>
                <p className="font-medium">Payment Reminders</p>
                <p className="text-sm text-muted-foreground">Bills and debt reminders</p>
              </div>
              <Switch checked={true} />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg">
              <div>
                <p className="font-medium">Savings Goals Updates</p>
                <p className="text-sm text-muted-foreground">Progress notifications</p>
              </div>
              <Switch checked={false} />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg">
              <div>
                <p className="font-medium">Expert Advice Tips</p>
                <p className="text-sm text-muted-foreground">Weekly financial tips</p>
              </div>
              <Switch checked={true} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Premium Upgrade */}
      <Card className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-accent/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-12 translate-x-12"></div>
        <CardHeader className="relative">
          <CardTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <span>LeinDen Premium</span>
            <Badge className="bg-gradient-to-r from-accent to-primary text-white">Upgrade</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <p className="text-sm text-muted-foreground mb-4">
            Unlock advanced features: AI financial insights, priority expert support, and unlimited voice transactions
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-lg">₹99/month</p>
              <p className="text-sm text-muted-foreground">7-day free trial</p>
            </div>
            <Button className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90">
              <Crown className="w-4 h-4 mr-2" />
              Start Trial
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Support & Info */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <Button variant="ghost" className="w-full justify-between hover:bg-muted/50">
            <div className="flex items-center space-x-3">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span>Help & Support</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" className="w-full justify-between hover:bg-muted/50">
            <div className="flex items-center space-x-3">
              <Download className="w-5 h-5 text-primary" />
              <span>Export Data</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" className="w-full justify-between hover:bg-muted/50">
            <div className="flex items-center space-x-3">
              <Info className="w-5 h-5 text-primary" />
              <span>About LeinDen</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <Separator />
          
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Sign Out</span>
          </Button>
          
          <div className="text-center pt-4 space-y-1">
            <p className="text-sm text-muted-foreground">LeinDen v1.2.0</p>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ for Indian families
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}