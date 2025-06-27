import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form'
import { ThemeToggle } from '../components/ThemeToggle'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import { Bitcoin, Eye, EyeOff, ArrowLeft, User, Building2, CheckCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  accountType: z.enum(['personal', 'merchant'], {
    required_error: 'Please select an account type',
  }),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type SignupFormData = z.infer<typeof signupSchema>

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: 'personal',
      agreeToTerms: false,
    },
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    try {
      // Simulated registration - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success(`${data.accountType === 'personal' ? 'Personal' : 'Merchant'} account created successfully!`)
      navigate('/dashboard')
    } catch {
      toast.error('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => {
    const fieldsToValidate = step === 1 
      ? ['firstName', 'lastName', 'email'] as const
      : ['password', 'confirmPassword', 'accountType'] as const
    
    form.trigger(fieldsToValidate).then((isValid) => {
      if (isValid) {
        setStep(step + 1)
      }
    })
  }

  const accountTypes = [
    {
      value: 'personal',
      icon: <User className="h-6 w-6" />,
      title: 'Personal Account',
      description: 'For individuals who want to send and receive cryptocurrency payments',
      features: ['Send & receive payments', 'QR code scanning', 'Transaction history', 'Wallet management']
    },
    {
      value: 'merchant',
      icon: <Building2 className="h-6 w-6" />,
      title: 'Merchant Account',
      description: 'For businesses that want to accept cryptocurrency payments',
      features: ['Accept payments', 'Create invoices', 'Analytics dashboard', 'Settlement options']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to home</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {step} of 3</span>
            <span className="text-sm text-muted-foreground">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Signup Card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 shadow-xl backdrop-blur-sm bg-card/80">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-2xl">
                  <Bitcoin className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">
                  {step === 1 && 'Create Your Account'}
                  {step === 2 && 'Secure Your Account'}
                  {step === 3 && 'Choose Account Type'}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {step === 1 && 'Let\'s start with your basic information'}
                  {step === 2 && 'Set up a secure password for your account'}
                  {step === 3 && 'Select the account type that best fits your needs'}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">First Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John"
                                  className="h-12 bg-background border-2 focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Last Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  className="h-12 bg-background border-2 focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                type="email"
                                className="h-12 bg-background border-2 focus:border-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="button"
                        onClick={nextStep}
                        className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      >
                        Continue
                      </Button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="Create a strong password"
                                  type={showPassword ? "text" : "password"}
                                  className="h-12 bg-background border-2 focus:border-primary pr-12"
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="absolute right-2 top-2 h-8 w-8 px-0"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Confirm Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="Confirm your password"
                                  type={showConfirmPassword ? "text" : "password"}
                                  className="h-12 bg-background border-2 focus:border-primary pr-12"
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="absolute right-2 top-2 h-8 w-8 px-0"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                  {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(step - 1)}
                          className="flex-1 h-12 text-base font-medium"
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 h-12 text-base font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          Continue
                        </Button>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <FormField
                        control={form.control}
                        name="accountType"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-4"
                              >
                                {accountTypes.map((type) => (
                                  <div key={type.value} className="relative">
                                    <RadioGroupItem
                                      value={type.value}
                                      id={type.value}
                                      className="absolute top-4 left-4 z-10"
                                    />
                                    <label
                                      htmlFor={type.value}
                                      className="flex cursor-pointer rounded-lg border-2 p-4 hover:border-primary/50 transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary/5"
                                    >
                                      <div className="flex-1 pl-8">
                                        <div className="flex items-center space-x-3 mb-2">
                                          <div className="text-primary">{type.icon}</div>
                                          <h3 className="font-semibold text-lg">{type.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-3">
                                          {type.description}
                                        </p>
                                        <div className="space-y-1">
                                          {type.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-2 text-sm">
                                              <CheckCircle className="h-3 w-3 text-secondary" />
                                              <span>{feature}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-start space-x-3">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  checked={field.value}
                                  onChange={field.onChange}
                                  className="w-4 h-4 mt-1 text-primary bg-background border-2 border-border rounded focus:ring-primary focus:ring-2"
                                />
                              </FormControl>
                              <div className="text-sm leading-5">
                                I agree to the{' '}
                                <Link to="/terms" className="text-primary hover:text-primary/80 transition-colors">
                                  Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                                  Privacy Policy
                                </Link>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(step - 1)}
                          className="flex-1 h-12 text-base font-medium"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 h-12 text-base font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Creating...</span>
                            </div>
                          ) : (
                            'Create Account'
                          )}
                        </Button>
                      </div>
                    </>
                  )}
                </form>
              </Form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Your data is protected with end-to-end encryption
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SignupPage