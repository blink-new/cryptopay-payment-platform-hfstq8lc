import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ThemeToggle } from '../components/ThemeToggle'
import { 
  Bitcoin, 
  TrendingUp, 
 
  ArrowUpRight, 
  ArrowDownLeft,
  Eye,
  EyeOff,
  Menu,
  Home,
  Send,
  Receipt,
  Settings,
  LogOut
} from 'lucide-react'

const Dashboard = () => {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock data
  const transactions = [
    {
      id: '1',
      type: 'received',
      amount: 0.00234,
      usdAmount: 98.50,
      from: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      timestamp: '2024-01-15T10:30:00Z',
      status: 'confirmed'
    },
    {
      id: '2',
      type: 'sent',
      amount: 0.00156,
      usdAmount: 67.20,
      to: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
      timestamp: '2024-01-14T15:45:00Z',
      status: 'confirmed'
    },
    {
      id: '3',
      type: 'received',
      amount: 0.00089,
      usdAmount: 38.45,
      from: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      timestamp: '2024-01-13T09:15:00Z',
      status: 'pending'
    }
  ]

  const sidebarItems = [
    { icon: <Home className="h-5 w-5" />, label: 'Dashboard', active: true },
    { icon: <Send className="h-5 w-5" />, label: 'Send Payment' },
    { icon: <Receipt className="h-5 w-5" />, label: 'Transactions' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Bitcoin className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CryptoPay
            </span>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start space-x-3 ${
                  item.active 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <Button variant="ghost" className="w-full justify-start space-x-3 text-muted-foreground">
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, John Doe</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">BTC/USD</p>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">$43,250.00</span>
                  <TrendingUp className="h-4 w-4 text-secondary" />
                  <span className="text-xs text-secondary">+2.4%</span>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Balance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Bitcoin Balance</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setBalanceVisible(!balanceVisible)}
                      className="h-8 w-8 p-0"
                    >
                      {balanceVisible ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">
                      {balanceVisible ? '0.00479 BTC' : '••••••••'}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {balanceVisible ? '$207.15 USD' : '••••••••'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Today's Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    <div>
                      <div className="text-2xl font-bold text-secondary">+$4.98</div>
                      <div className="text-sm text-muted-foreground">+2.4% today</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <ArrowUpRight className="h-6 w-6 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">5</div>
                      <div className="text-sm text-muted-foreground">Transactions this week</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your cryptocurrency transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="h-16 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <div className="flex flex-col items-center space-y-1">
                      <Send className="h-5 w-5" />
                      <span className="text-sm">Send Payment</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="flex flex-col items-center space-y-1">
                      <Receipt className="h-5 w-5" />
                      <span className="text-sm">Request Payment</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="flex flex-col items-center space-y-1">
                      <Bitcoin className="h-5 w-5" />
                      <span className="text-sm">Buy Bitcoin</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="flex flex-col items-center space-y-1">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-sm">View Analytics</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest cryptocurrency transactions</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          transaction.type === 'received' 
                            ? 'bg-secondary/10 text-secondary' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {transaction.type === 'received' ? (
                            <ArrowDownLeft className="h-4 w-4" />
                          ) : (
                            <ArrowUpRight className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {transaction.type === 'received' ? 'Received' : 'Sent'}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(transaction.timestamp).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${
                          transaction.type === 'received' ? 'text-secondary' : 'text-foreground'
                        }`}>
                          {transaction.type === 'received' ? '+' : '-'}{transaction.amount} BTC
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ${transaction.usdAmount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard