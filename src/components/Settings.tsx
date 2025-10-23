import { useState } from 'react';
import { useTranslation, getI18n } from 'react-i18next';
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
  Eye,
  Mic,
  Lock,
  LogOut,
  Smartphone,
  Settings as SettingsIcon,
  Moon,
  Sun,
  Download,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Wallet,
  TrendingUp,
  PieChart,
  Target,
  Award,
  Zap,
  Heart,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Camera
} from 'lucide-react';

// Add CSS styles for animated star buttons
const starButtonStyles = `
  .star-button {
    position: relative;
    overflow: hidden;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .star-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .star-button .star-1,
  .star-button .star-2,
  .star-button .star-3,
  .star-button .star-4,
  .star-button .star-5,
  .star-button .star-6 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }

  .star-button .star-1 {
    animation: star1 1.5s ease-out infinite;
  }

  .star-button .star-2 {
    animation: star2 1.5s ease-out 0.2s infinite;
  }

  .star-button .star-3 {
    animation: star3 1.5s ease-out 0.4s infinite;
  }

  .star-button .star-4 {
    animation: star4 1.5s ease-out 0.6s infinite;
  }

  .star-button .star-5 {
    animation: star5 1.5s ease-out 0.8s infinite;
  }

  .star-button .star-6 {
    animation: star6 1.5s ease-out 1s infinite;
  }

  .star-button:hover .star-1,
  .star-button:hover .star-2,
  .star-button:hover .star-3,
  .star-button:hover .star-4,
  .star-button:hover .star-5,
  .star-button:hover .star-6 {
    opacity: 1;
  }

  @keyframes star1 {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes star2 {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes star3 {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes star4 {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes star5 {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes star6 {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  .star-button .fil0 {
    fill: #ffffff;
    fill-rule: nonzero;
  }
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = starButtonStyles;
  document.head.appendChild(styleSheet);
}

export function Settings({ changeLanguage }: { changeLanguage: (lang: string) => void }) {
  const { t } = useTranslation();

  // State for toggles
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [paymentReminders, setPaymentReminders] = useState(true);
  const [savingsUpdates, setSavingsUpdates] = useState(false);
  const [expertTips, setExpertTips] = useState(true);
  const [voiceBiometrics, setVoiceBiometrics] = useState(true);
  const [appLock, setAppLock] = useState(true);

  const linkedAccounts = [
    { id: '1', name: 'SBI Bank', number: '••••3421', type: 'Primary', connected: true, logo: '🏦' },
    { id: '2', name: 'Google Pay', number: 'user@gmail.com', type: 'UPI', connected: true, logo: '💳' },
    { id: '3', name: 'Paytm', number: '+91 ••••••7890', type: 'Wallet', connected: false, logo: '💰' },
  ];

  const languages = [
    { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी (Marathi)', flag: '🇮🇳' },
    { code: 'sd', name: 'سنڌي (Sindhi)', flag: '🇮🇳' },
  ];

  // Button handlers
  const handleEditProfile = () => alert('Edit Profile functionality - Opens profile edit modal');
  const handleManageAccount = (account: any) => alert(`Manage ${account.name} account`);
  const handleConnectAccount = (account: any) => alert(`Connect ${account.name} account`);
  const handleAddAccount = () => alert('Add New Account functionality - Opens account linking flow');
  const handleTrainVoice = () => alert('Train Voice functionality - Opens voice training interface');
  const handleManage2FA = () => alert('Manage 2FA functionality - Opens 2FA settings');
  const handlePrivacyPolicy = () => alert('Privacy Policy - Opens in browser or modal');
  const handleDataPermissions = () => alert('Data & Permissions - Opens permissions settings');
  const handleHelpSupport = () => alert('Help & Support - Opens support chat or FAQ');
  const handleExportData = () => alert('Export Data functionality - Initiates data export');
  const handleAbout = () => alert('About LeinDen - Shows app info and version details');
  const handleSignOut = () => alert('Sign Out - Confirms and logs out user');

  // Make buttons functionable by wiring handlers to onClick events

  return (
    <div className="space-y-4 sm:space-y-6 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 min-h-screen max-w-5xl mx-auto py-4 sm:py-6">
      {/* Profile Information */}
      <section>
        <h2 className="text-xl font-bold flex items-center space-x-2 mb-4 text-yellow-900">
          <User className="w-6 h-6 text-yellow-900" />
          <span>Profile Information</span>
        </h2>
        <Card className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-yellow-400 hover:shadow-yellow-500 transition-shadow duration-300">
          <CardContent className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-4 sm:p-6 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl sm:rounded-2xl">
            <img
              src="/pfp.png"
              alt="User Profile"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover shadow-md sm:shadow-lg"
            />
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <p className="font-bold text-lg sm:text-xl truncate text-yellow-900">Rahul Kumar</p>
              <p className="text-xs sm:text-sm text-yellow-800 truncate">rahul.kumar@gmail.com</p>
              <p className="text-xs sm:text-sm text-yellow-800 truncate">+91 98765 43210</p>
              <Badge className="mt-2 bg-yellow-400 text-yellow-900 border-yellow-500 px-2 sm:px-3 py-1 rounded-full shadow-sm text-xs">Verified</Badge>
            </div>
            <button onClick={handleEditProfile} className="star-button flex items-center space-x-2 px-3 sm:px-4 py-2 font-medium text-sm">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Edit</span>
              <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </CardContent>
        </Card>
      </section>

      {/* Linked Accounts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center space-x-2 text-blue-900">
            <CreditCard className="w-6 h-6" />
            <span>Linked Accounts</span>
          </h2>
          <Badge className="bg-green-200 text-green-900 border-green-300 px-3 py-1 rounded-full text-xs shadow-sm">
            {linkedAccounts.filter(a => a.connected).length} Connected
          </Badge>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {linkedAccounts.map(account => (
            <Card
              key={account.id}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 p-3 sm:p-4"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg shadow-sm sm:shadow-md">
                  {account.logo}
                </div>
                <div className="flex flex-col justify-center flex-1 sm:flex-initial">
                  <p className="font-semibold text-base sm:text-lg text-blue-900">{account.name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="bg-yellow-200 text-blue-900 border-yellow-300 text-xs shadow-sm">
                      {account.type}
                    </Badge>
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${account.connected ? 'bg-green-600' : 'bg-red-600'}`} />
                  </div>
                </div>
              </div>
              {account.connected ? (
                <button
                  onClick={() => handleManageAccount(account)}
                  className="star-button w-full sm:w-auto mt-3 sm:mt-0 px-3 sm:px-4 py-2 font-medium text-sm"
                >
                  Manage
                  <div className="star-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => handleConnectAccount(account)}
                  className="star-button w-full sm:w-auto mt-3 sm:mt-0 px-3 sm:px-4 py-2 font-medium text-sm"
                >
                  Connect
                  <div className="star-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="star-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      version="1.1"
                      style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                      viewBox="0 0 784.11 815.53"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs></defs>
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </button>
              )}
            </Card>
          ))}
          <Button
            variant="outline"
            className="block mx-auto rounded-xl shadow-md mt-4 px-6 py-2 font-medium border-orange-400 text-blue-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300"
            onClick={handleAddAccount}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = 'linear-gradient(90deg, #3B3B98 0%, #F97F51 100%)')}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = 'white')}
          >
            + Add New Account
          </Button>
        </div>
      </section>

      {/* Language & Voice Settings */}
      <section>
        <h2 className="text-xl font-bold flex items-center space-x-2 mb-4 text-blue-900">
          <Globe className="w-6 h-6 text-blue-900" />
          <span>Language & Voice</span>
        </h2>
        <Card className="rounded-xl shadow-lg border border-blue-400 hover:shadow-blue-500 transition-shadow duration-300 p-6 space-y-6 bg-gradient-to-r from-blue-200 to-blue-100">
          <div>
            <h3 className="font-semibold flex items-center space-x-2 mb-4 text-blue-900 text-lg">
              <Globe className="w-5 h-5" />
              <span>App Language</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {languages.map((lang) => (
                <div key={lang.code} className="flex items-center justify-between p-3 sm:p-4 bg-blue-100 rounded-lg sm:rounded-xl border border-blue-300 shadow-sm">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-xl sm:text-2xl">{lang.flag}</span>
                    <span className="font-medium text-blue-900 text-xs sm:text-sm">{lang.name}</span>
                  </div>
                  <Switch
                    checked={lang.active}
                    onCheckedChange={() => {
                      setLanguages((prev) =>
                        prev.map((l) =>
                          l.code === lang.code
                            ? { ...l, active: true }
                            : { ...l, active: false }
                        )
                      );
                    }}
                    className="bg-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold flex items-center space-x-2 mb-4 text-blue-900 text-lg">
              <Mic className="w-5 h-5" />
              <span>Voice Settings</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center sm:justify-between p-3 sm:p-4 bg-blue-100 rounded-lg sm:rounded-xl border border-blue-300 shadow-sm space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
                <div className="text-center sm:text-left">
                  <p className="font-medium text-blue-900 text-sm sm:text-base">Voice Recognition</p>
                  <p className="text-xs sm:text-sm text-blue-800">Train your voice for better accuracy</p>
                </div>
              </div>
              <button onClick={handleTrainVoice} className="star-button w-full sm:w-auto px-3 sm:px-4 py-2 font-medium text-sm">
                Train Voice
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Card>
      </section>

      {/* Security & Privacy */}
      <section>
        <h2 className="text-xl font-bold flex items-center space-x-2 mb-4 text-red-700">
          <Shield className="w-6 h-6 text-red-600" />
          <span>Security & Privacy</span>
        </h2>
        <Card className="rounded-xl shadow-lg border border-red-400 hover:shadow-red-500 transition-shadow duration-300 p-6 space-y-6 bg-gradient-to-r from-red-50 to-red-100">
          <div className="flex items-center justify-between p-4 bg-green-100 rounded-xl border border-green-300 shadow-sm">
            <div className="flex items-center space-x-3">
              <Lock className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-medium text-green-800 text-base">Two-Factor Authentication</p>
                <p className="text-sm text-green-700">Extra security for your account</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-200 text-green-800 border-green-300 text-xs">Enabled</Badge>
              <button onClick={handleManage2FA} className="star-button px-3 py-1 font-medium">
                Manage
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd'}}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-800 text-sm">Voice Biometrics</p>
                  <p className="text-xs text-gray-600">Secure voice authentication</p>
                </div>
              </div>
              <Switch checked={voiceBiometrics} onCheckedChange={setVoiceBiometrics} />
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-800 text-sm">App Lock</p>
                  <p className="text-xs text-gray-600">PIN or biometric lock</p>
                </div>
              </div>
              <Switch checked={appLock} onCheckedChange={setAppLock} />
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-between hover:bg-gray-50 p-3 rounded-lg" onClick={handlePrivacyPolicy}>
              <span className="font-medium text-sm">Privacy Policy</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between hover:bg-gray-50 p-3 rounded-lg" onClick={handleDataPermissions}>
              <span className="font-medium text-sm">Data & Permissions</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Notifications */}
      <section>
        <h2 className="text-xl font-bold flex items-center space-x-2 mb-4 text-yellow-700">
          <Bell className="w-6 h-6 text-yellow-600" />
          <span>Notifications</span>
        </h2>
        <Card className="rounded-xl shadow-lg border border-yellow-400 hover:shadow-yellow-500 transition-shadow duration-300 p-6 space-y-4 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-sm">💰</span>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Transaction Alerts</p>
                <p className="text-xs text-gray-600">Get notified of all transactions</p>
              </div>
            </div>
            <Switch checked={transactionAlerts} onCheckedChange={setTransactionAlerts} />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm">🔔</span>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Payment Reminders</p>
                <p className="text-xs text-gray-600">Bills and debt reminders</p>
              </div>
            </div>
            <Switch checked={paymentReminders} onCheckedChange={setPaymentReminders} />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-sm">🎯</span>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Savings Goals Updates</p>
                <p className="text-xs text-gray-600">Progress notifications</p>
              </div>
            </div>
            <Switch checked={savingsUpdates} onCheckedChange={setSavingsUpdates} />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-sm">💡</span>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Expert Advice Tips</p>
                <p className="text-xs text-gray-600">Weekly financial tips</p>
              </div>
            </div>
            <Switch checked={expertTips} onCheckedChange={setExpertTips} />
          </div>
        </Card>
      </section>

      {/* Support & Info */}
      <section>
        <Card className="rounded-xl shadow-lg border border-purple-400 hover:shadow-purple-500 transition-shadow duration-300 p-6 space-y-4 bg-gradient-to-r from-purple-50 to-purple-100">
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between hover:bg-white/50 p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-1" onClick={handleHelpSupport}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-medium text-gray-800 text-sm">Help & Support</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between hover:bg-white/50 p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1" onClick={handleExportData}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-800 text-sm">Export Data</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between hover:bg-white/50 p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-1" onClick={handleAbout}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Info className="w-4 h-4 text-orange-600" />
                </div>
                <span className="font-medium text-gray-800 text-sm">About LeinDen</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <Separator />
          <button className="w-full flex items-center justify-start text-red-600 hover:bg-red-50 hover:text-red-700 p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-1" onClick={handleSignOut}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <LogOut className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-medium text-sm">Sign Out</span>
            </div>
          </button>
          <div className="text-center pt-4 space-y-2">
            <p className="text-base font-bold text-purple-800">LeinDen v1.2.0</p>
            <p className="text-xs text-purple-600">Made with ❤️ for Indian families</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
