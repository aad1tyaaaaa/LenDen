import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mic, MicOff, Volume2, RefreshCw, Zap, Check, X } from 'lucide-react';


interface ModernVoiceInputProps {
  isVisible: boolean;
  onClose: () => void;
  onTransactionAdd?: (transaction: any) => void;
}

export function ModernVoiceInput({ isVisible, onClose, onTransactionAdd }: ModernVoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStage, setProcessingStage] = useState('');

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
      onClose();
    }, 2000);
  };

  if (!isVisible) return null;

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
                  <Button variant="ghost" onClick={onClose} className="hover:bg-muted/50">
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
                  {suggestions.slice(0, 3).map((suggestion, index) => (
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
}