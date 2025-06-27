import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ThemeToggle } from '../components/ThemeToggle'
import { 
  Bitcoin, 
  Shield, 
  Zap, 
  Globe, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Smartphone,
  BarChart3
} from 'lucide-react'

const LandingPage = () => {
  const stats = [
    { value: "1M+", label: "Wallets Created" },
    { value: "50K+", label: "Merchants" },
    { value: "$2B+", label: "Processed" },
    { value: "180+", label: "Countries" }
  ]

  const features = [
    {
      icon: <Bitcoin className="h-6 w-6 text-primary-500" />,
      title: "Multi-Currency Support",
      description: "Accept Bitcoin, Ethereum, and other major cryptocurrencies"
    },
    {
      icon: <Shield className="h-6 w-6 text-success" />,
      title: "Bank-Level Security",
      description: "Advanced encryption and multi-signature protection"
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Instant Settlements",
      description: "Real-time processing with instant confirmations"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary-500" />,
      title: "Global Coverage",
      description: "Process payments worldwide with 24/7 support"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-success" />,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices and tablets"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-accent-500" />,
      title: "Advanced Analytics",
      description: "Detailed insights and real-time transaction tracking"
    }
  ]

  const benefits = [
    "Lower fees than traditional payment processors",
    "No chargebacks or payment reversals",
    "Borderless payments without currency conversion",
    "Real-time settlement and instant notifications",
    "Advanced fraud detection and security",
    "24/7 customer support"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Bitcoin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                cryptopay
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#support" className="text-gray-600 hover:text-gray-900 font-medium">Support</a>
              <ThemeToggle />
            </nav>
            
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white px-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span className="text-gray-600">OVER 1 MILLION WALLETS CREATED</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Take back control of
                <span className="text-primary-500 block">your crypto.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Buy, store, swap, sell, and spend your assets. All from one powerful crypto app. 
                No centralized exchange, no excessive markups, just true control across the top chains.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg">
                    Get the App
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-gray-300">
                  Learn More
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
                {/* Mock App Interface */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">M</span>
                      </div>
                      <span className="font-medium text-gray-900">My Financial</span>
                    </div>
                    <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      Auto Loan
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Portfolio Balance</span>
                      <span className="text-2xl font-bold text-gray-900">$98,140.12</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">24h Change</span>
                      <span className="text-success font-semibold">+2.7%</span>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2 mt-6">
                      <Button size="sm" className="bg-primary-500 text-white">Buy</Button>
                      <Button size="sm" variant="outline">Sell</Button>
                      <Button size="sm" variant="outline">Swap</Button>
                      <Button size="sm" variant="outline">Send</Button>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Bitcoin</span>
                        <span className="text-sm text-gray-600">0.00320 BTC</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">$2,139.04</span>
                        <span className="text-sm text-success">+2.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're an individual looking to manage your crypto or a business ready to accept digital payments, 
              we have the tools you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-white border-gray-200">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why businesses choose CryptoPay
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of businesses that trust CryptoPay for secure, 
                fast, and cost-effective cryptocurrency payments.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Transaction Overview</h3>
                  <div className="flex items-center space-x-2 text-success">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Live</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Today's Volume</span>
                    <span className="text-2xl font-bold text-gray-900">$1,247,830</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Transactions</span>
                    <span className="text-lg font-semibold text-gray-900">2,847</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="text-lg font-semibold text-success">99.8%</span>
                  </div>
                  
                  <div className="mt-6 p-3 bg-white rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Average Settlement</span>
                      <span className="text-sm text-gray-600">2.3 seconds</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create your account today and start accepting cryptocurrency payments in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 text-lg"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Bitcoin className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">cryptopay</span>
              </div>
              <p className="text-gray-400">
                The most trusted cryptocurrency payment platform.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Features</a>
                <a href="#" className="block text-gray-400 hover:text-white">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white">API</a>
                <a href="#" className="block text-gray-400 hover:text-white">Documentation</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">About</a>
                <a href="#" className="block text-gray-400 hover:text-white">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-white">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-white">Security</a>
                <a href="#" className="block text-gray-400 hover:text-white">Status</a>
                <a href="#" className="block text-gray-400 hover:text-white">Privacy</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 CryptoPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage