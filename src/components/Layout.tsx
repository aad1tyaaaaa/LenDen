import { ReactNode } from 'react';
import { Card } from './ui/card';
import { Home, PiggyBank, MessageCircle, Settings, Mic, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import CommunityTab from './CommunityTab';

interface LayoutProps {
  children: ReactNode;
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onVoiceInput?: () => void;
}
 
export function Layout({ children, currentPage = 'home', onNavigate, onVoiceInput }: LayoutProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'udhaari', label: 'Udhaari', icon: PiggyBank },
    { id: 'salah', label: 'Salah', icon: MessageCircle },
    { id: 'community', label: 'Community', icon: Lightbulb },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">LeinDen</h1>
          <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-primary text-sm">U</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-md mx-auto w-full p-4">
        {currentPage === 'community' ? <CommunityTab /> : children}
      </main>

      {/* Voice Input Button - Floating */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={onVoiceInput}
          className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 shadow-lg border-4 border-white"
          size="icon"
        >
          <Mic className="w-8 h-8" />
        </Button>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-black shadow-lg border-t sticky bottom-0 z-50">
        <div className="max-w-md mx-auto flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`flex-1 p-3 text-center ${
                currentPage === item.id
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <item.icon className="w-6 h-6 mx-auto mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
