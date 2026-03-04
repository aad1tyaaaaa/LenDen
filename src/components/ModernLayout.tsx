import { ReactNode } from 'react';
import { Home, PiggyBank, MessageCircle, Settings, Mic, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ModernLayoutProps {
  children: ReactNode;
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onVoiceInput?: () => void;
}

export function ModernLayout({ children, currentPage = 'home', onNavigate, onVoiceInput }: ModernLayoutProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'udhaari', label: 'Udhaari', icon: PiggyBank },
    { id: 'salah', label: 'Salah', icon: MessageCircle },
    { id: 'premium', label: 'Premium', icon: Crown },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-primary/5">
      {/* Modern Header - Hidden on larger screens */}
      <header className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-xl lg:hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-md mx-auto p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-wide">LenDen</h1>
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

      {/* Sidebar for larger screens */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:bg-gradient-to-r lg:from-primary lg:to-primary/90 lg:text-primary-foreground lg:shadow-2xl lg:z-40">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-wide">LenDen</h1>
              <p className="text-primary-foreground/80 text-sm">Smart Financial Partner</p>
            </div>
            <Badge className="bg-accent text-white">
              <Crown className="w-3 h-3 mr-1" />
              Free
            </Badge>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white/20 text-white border-l-4 border-accent'
                    : 'text-primary-foreground/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform duration-200`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-bold">R</span>
            </div>
            <div>
              <p className="font-medium">Rahul Kumar</p>
              <p className="text-xs text-primary-foreground/70">View Profile</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content with Enhanced Styling */}
      <main className="flex-1 w-full pb-24 lg:pb-8 lg:ml-64 max-w-md lg:max-w-4xl xl:max-w-6xl mx-auto p-4 lg:p-6">
        <div className="bg-white/70 lg:bg-white/70 lg:backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-4 lg:p-6">
          {children}
        </div>
      </main>

      {/* Floating Voice Button - More Prominent */}
      <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50 lg:bottom-8 lg:left-64 lg:translate-x-0">
        <Button
          onClick={onVoiceInput}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-200"
          size="icon"
        >
          <Mic className="w-10 h-10" />
        </Button>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
          <p className="text-xs text-muted-foreground bg-white/80 px-2 py-1 rounded-full shadow">
            Tap to speak
          </p>
        </div>
      </div>

      {/* Modern Bottom Navigation - Hidden on larger screens */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-white/50 lg:hidden">
        <div className="max-w-md mx-auto flex">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
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
