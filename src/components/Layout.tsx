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
      {/* Header - Hidden on larger screens */}
      <header className="bg-primary text-primary-foreground p-4 shadow-lg lg:hidden">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">LenDen</h1>
          <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-primary text-sm">U</span>
          </div>
        </div>
      </header>

      {/* Sidebar for larger screens */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:bg-gradient-to-r lg:from-primary lg:to-primary/90 lg:text-primary-foreground lg:shadow-2xl lg:z-40">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">LenDen</h1>
          <p className="text-primary-foreground/80 text-sm">Smart Financial Partner</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                currentPage === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-primary-foreground/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-bold">R</span>
            </div>
            <div>
              <p className="font-medium">Rahul Kumar</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full pb-24 lg:pb-8 lg:ml-64 max-w-md lg:max-w-4xl xl:max-w-6xl mx-auto p-4 lg:p-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-4 lg:p-6">
          {currentPage === 'community' ? <CommunityTab /> : children}
        </div>
      </main>

      {/* Voice Input Button - Floating */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 lg:bottom-8 lg:left-64 lg:translate-x-0">
        <Button
          onClick={onVoiceInput}
          className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 shadow-lg border-4 border-white"
          size="icon"
        >
          <Mic className="w-8 h-8" />
        </Button>
      </div>

      {/* Bottom Navigation - Hidden on larger screens */}
      <nav className="bg-black shadow-lg border-t sticky bottom-0 z-50 lg:hidden">
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
