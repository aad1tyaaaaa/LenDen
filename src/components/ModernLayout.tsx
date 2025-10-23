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
      {/* Modern Header */}
      <header className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-md mx-auto p-6">
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

      {/* Main Content with Enhanced Styling */}
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
          {children}
        </div>
      </main>

      {/* Floating Voice Button - More Prominent */}
      <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={onVoiceInput}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-200"
          size="icon"
        >
          <Mic className="w-10 h-10" />
        </Button>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-muted-foreground bg-white/80 px-2 py-1 rounded-full shadow">
            Tap to speak
          </p>
        </div>
      </div>

      {/* Modern Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-white/50">
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