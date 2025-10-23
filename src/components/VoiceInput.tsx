import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mic, MicOff, Volume2, RefreshCw } from 'lucide-react';

interface VoiceInputProps {
  isVisible: boolean;
  onClose: () => void;
  onTransactionAdd?: (transaction: any) => void;
}

export function VoiceInput({ isVisible, onClose, onTransactionAdd }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const suggestions = [
    'मैंने चाय पर 20 रुपये खर्च किए',
    'I spent 50 rupees on auto rickshaw',
    'ऑटो में 45 रुपये दिए',
    'Add 500 rupees grocery expense',
    'राहुल को 200 रुपये उधार दिए',
    'Received 15000 salary'
  ];

  const handleStartListening = () => {
    setIsListening(true);
    // Mock voice recognition - in real app, this would use Web Speech API
    setTimeout(() => {
      setTranscript('मैंने आज ऑटो में 45 रुपये खर्च किए');
      setIsListening(false);
      setIsProcessing(true);
      
      setTimeout(() => {
        setIsProcessing(false);
        // Mock transaction processing
        if (onTransactionAdd) {
          onTransactionAdd({
            id: Date.now().toString(),
            type: 'expense',
            description: 'Auto Rickshaw (Voice)',
            amount: 45,
            date: new Date().toISOString().split('T')[0],
            category: 'Transport'
          });
        }
        
        setTimeout(() => {
          onClose();
        }, 1500);
      }, 2000);
    }, 3000);
  };

  const handleStopListening = () => {
    setIsListening(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTranscript(suggestion);
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white">
        <CardContent className="p-6">
          <div className="text-center space-y-6">
            {/* Voice Status */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Voice Input</h3>
              <p className="text-sm text-muted-foreground">
                Say your transaction in Hindi or English
              </p>
            </div>

            {/* Voice Animation */}
            <div className="relative">
              <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-all duration-300 ${
                isListening ? 'bg-red-100 animate-pulse' : 
                isProcessing ? 'bg-accent/20' : 'bg-primary/10'
              }`}>
                {isProcessing ? (
                  <RefreshCw className="w-12 h-12 text-accent animate-spin" />
                ) : isListening ? (
                  <Mic className="w-12 h-12 text-red-600" />
                ) : (
                  <MicOff className="w-12 h-12 text-primary" />
                )}
              </div>
              
              {isListening && (
                <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-red-300 animate-ping mx-auto" />
              )}
            </div>

            {/* Status Text */}
            <div className="space-y-2">
              {isListening && (
                <Badge className="bg-red-100 text-red-800">
                  🎤 Listening...
                </Badge>
              )}
              
              {isProcessing && (
                <Badge className="bg-accent/20 text-accent">
                  🤖 Processing...
                </Badge>
              )}
              
              {transcript && !isListening && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">You said:</p>
                  <p className="text-sm text-muted-foreground">"{transcript}"</p>
                </div>
              )}
            </div>

            {/* Controls */}
            {!isProcessing && (
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  {!isListening ? (
                    <Button
                      onClick={handleStartListening}
                      className="bg-red-600 hover:bg-red-700 text-white"
                      size="lg"
                    >
                      <Mic className="w-5 h-5 mr-2" />
                      Start Speaking
                    </Button>
                  ) : (
                    <Button
                      onClick={handleStopListening}
                      variant="outline"
                      size="lg"
                    >
                      <MicOff className="w-5 h-5 mr-2" />
                      Stop
                    </Button>
                  )}
                </div>

                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            )}

            {/* Suggestions */}
            {!isListening && !isProcessing && !transcript && (
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Try saying:</p>
                </div>
                
                <div className="space-y-2">
                  {suggestions.slice(0, 3).map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-xs h-auto p-2"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      "{suggestion}"
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Processing Success */}
            {isProcessing && transcript && (
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-sm text-accent">✨ Understanding your transaction...</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    🎯 Detected: Auto Rickshaw expense of ₹45
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}