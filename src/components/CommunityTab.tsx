import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from './ui/modal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Users, Zap, FileText, TrendingUp, Clock, Shield } from 'lucide-react';
import { Slider } from './ui/slider';
import { motion, AnimatePresence } from 'framer-motion';

const chitFundSchemes = [
  {
    id: '6m',
    duration: '6 Months',
    monthlyContribution: 5000,
    totalAmount: 30000,
    description: 'Join our 6-month Chit Fund scheme to save systematically and access lump sum funds.',
    benefits: [
      'Low monthly contributions',
      'Guaranteed returns',
      'Community support and networking',
      'Quick access to funds through bidding'
    ],
    rules: [
      'Regular monthly payments required',
      'Bidding process for fund allocation',
      'Penalties for late payments (₹100 per day)',
      'Minimum 5 members required to start'
    ]
  },
  {
    id: '9m',
    duration: '9 Months',
    monthlyContribution: 4000,
    totalAmount: 36000,
    description: 'Our 9-month scheme offers flexibility with moderate contributions.',
    benefits: [
      'Higher total amount accumulation',
      'Interest-free borrowing option',
      'Emergency fund access',
      'Flexible bidding opportunities'
    ],
    rules: [
      'Minimum 80% attendance required',
      'Transparent bidding process',
      'Dispute resolution mechanism in place',
      'Monthly meetings mandatory'
    ]
  },
  {
    id: '12m',
    duration: '12 Months',
    monthlyContribution: 3000,
    totalAmount: 36000,
    description: 'The popular 12-month scheme for long-term savings.',
    benefits: [
      'Maximum flexibility in bidding',
      'Potential for higher bids',
      'Comprehensive insurance coverage',
      'Annual bonus distribution'
    ],
    rules: [
      'Full payment history mandatory',
      'Annual general meetings required',
      'Profit sharing as per bylaws',
      'Exit clauses with 30 days notice'
    ]
  },
  {
    id: '18m',
    duration: '18 Months',
    monthlyContribution: 2500,
    totalAmount: 45000,
    description: 'Extended 18-month scheme for substantial savings.',
    benefits: [
      'Largest fund pool available',
      'Investment opportunities',
      'Retirement planning support',
      'Higher return potential'
    ],
    rules: [
      'Advanced booking required',
      'Flexible payment options available',
      'Audited financial statements',
      'Performance reviews every 6 months'
    ]
  },
  {
    id: '24m',
    duration: '24 Months',
    monthlyContribution: 2000,
    totalAmount: 48000,
    description: 'Long-term 24-month scheme for major financial goals.',
    benefits: [
      'Tax benefits under Section 80C',
      'Wealth creation over time',
      'Community networking opportunities',
      'Long-term financial security'
    ],
    rules: [
      'Multi-year commitment required',
      'Performance reviews annually',
      'Exit clauses available with conditions',
      'Minimum lock-in period of 12 months'
    ]
  },
];

const quickUdhaariCards = [
  { id: 'card1', title: 'Quick Udhaari 1', repaymentPeriod: 3 },
  { id: 'card2', title: 'Quick Udhaari 2', repaymentPeriod: 6 },
  { id: 'card3', title: 'Quick Udhaari 3', repaymentPeriod: 9 },
  { id: 'card4', title: 'Quick Udhaari 4', repaymentPeriod: 12 },
];

export default function CommunityTab() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState<typeof chitFundSchemes[0] | null>(null);
  const [amounts, setAmounts] = useState({ card1: 1000, card2: 1000, card3: 1000, card4: 1000 });

  const openModal = (scheme: typeof chitFundSchemes[0]) => {
    setSelectedScheme(scheme);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedScheme(null);
  };

  const handleAmountChange = (cardId: string, value: number[]) => {
    setAmounts(prev => ({
      ...prev,
      [cardId]: value[0]
    }));
  };

  const calculateInterestRate = (amt: number) => {
    if (amt <= 5000) return 0.05;
    if (amt <= 10000) return 0.08;
    return 0.12;
  };

  const calculateTotalInterest = (amt: number, rate: number, period: number) => {
    return amt * rate * (period / 12);
  };

  const calculateTotalAmount = (amt: number, interest: number) => {
    return amt + interest;
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Community Financial Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our Chit Fund schemes for systematic savings and Quick Udhaari options for instant financial support.
          Build your financial future with our community-driven solutions.
        </p>
      </div>
      <Tabs defaultValue="chit-fund" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-1 shadow-lg">
          <TabsTrigger
            value="chit-fund"
            className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <Users className="w-5 h-5" />
            <span>Chit Fund</span>
          </TabsTrigger>
          <TabsTrigger
            value="quick-udhaari"
            className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            <span>Quick Udhaari</span>
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="chit-fund" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chitFundSchemes.map((scheme) => (
                  <Card key={scheme.id} className="flex flex-col justify-between bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 p-4">
                    <CardHeader className="flex items-center space-x-2 pb-2">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <CardTitle className="text-lg">{scheme.duration}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Monthly Contribution:</span>
                        <span className="font-semibold">₹{scheme.monthlyContribution.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Amount:</span>
                        <span className="font-semibold text-green-600">₹{scheme.totalAmount.toLocaleString()}</span>
                      </div>
                      <Button onClick={() => openModal(scheme)} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 mt-4">
                        <FileText className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="quick-udhaari" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickUdhaariCards.map((card) => {
                  const amt = amounts[card.id as keyof typeof amounts];
                  const rate = calculateInterestRate(amt);
                  const totalInterest = calculateTotalInterest(amt, rate, card.repaymentPeriod);
                  const totalAmount = calculateTotalAmount(amt, totalInterest);
                  return (
                    <Card key={card.id} className="flex flex-col space-y-4 p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-6 h-6 text-yellow-500" />
                        <h3 className="font-semibold text-lg">{card.title}</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor={`amount-slider-${card.id}`} className="block mb-2 font-medium">
                            Select Amount: ₹{amt.toLocaleString()}
                          </label>
                          <Slider
                            id={`amount-slider-${card.id}`}
                            min={1000}
                            max={20000}
                            step={500}
                            value={[amt]}
                            onValueChange={(value: number[]) => handleAmountChange(card.id, value)}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>Repayment: {card.repaymentPeriod} months</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span>Rate: {(rate * 100).toFixed(1)}%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Principal:</span>
                            <span>₹{amt.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Interest:</span>
                            <span>₹{totalInterest.toFixed(0)}</span>
                          </div>
                          <div className="flex justify-between font-semibold border-t pt-2">
                            <span>Total Amount:</span>
                            <span className="text-green-600">₹{totalAmount.toFixed(0)}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>

      {/* Modal for Chit Fund Details */}
      <Modal isOpen={modalOpen} onClose={closeModal}>
      <ModalContent className="bg-white/90 backdrop-blur-md border border-white/20 max-w-2xl" aria-describedby="modal-description">
        <ModalHeader className="text-xl font-bold text-center">{selectedScheme?.duration} Scheme Details</ModalHeader>
        <ModalBody className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p id="modal-description" className="text-gray-700">{selectedScheme?.description}</p>
          </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-600">Benefits</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {selectedScheme?.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Rules & Regulations</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {selectedScheme?.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Financial Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-600">Monthly Contribution:</span>
                  <p className="font-semibold">₹{selectedScheme?.monthlyContribution.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Total Amount:</span>
                  <p className="font-semibold text-green-600">₹{selectedScheme?.totalAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Eligibility Criteria</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Age 18 years and above</li>
                <li>Resident of the community area</li>
                <li>Valid ID proof (Aadhaar, PAN, or Voter ID)</li>
                <li>Minimum monthly income of ₹10,000</li>
                <li>No outstanding debts from previous schemes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-orange-600">Application Process</h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Fill out the online application form</li>
                <li>Submit required documents (ID proof, income certificate)</li>
                <li>Pay the initial registration fee of ₹500</li>
                <li>Attend the mandatory orientation session</li>
                <li>Receive confirmation and join the scheme</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> support@leindencommunity.com</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Address:</strong> LeinDen Community Center, 123 Main Street, City, State - 123456</p>
                <p><strong>Office Hours:</strong> Monday to Friday, 9 AM to 6 PM</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}