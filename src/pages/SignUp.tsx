import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, ArrowLeft, Mail, Lock, User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-smooth">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">EduPath AI</h1>
              <p className="text-sm text-muted-foreground">Smart Career Guidance</p>
            </div>
          </div>
        </div>

        {/* Sign Up Card */}
        <Card className="shadow-medium border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Join thousands of students finding their perfect career path
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="firstName" 
                      placeholder="First name"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Last name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a password"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State/Region</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground z-10" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Current Education Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th">10th Grade</SelectItem>
                    <SelectItem value="12th">12th Grade</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-muted-foreground">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                Create My Account
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" size="sm">
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
    Google
  </Button>
  <Button variant="outline" size="sm">
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
      <path fill="#F25022" d="M1 1h10v10H1z"/>
      <path fill="#00A4EF" d="M13 1h10v10H13z"/>
      <path fill="#7FBA00" d="M1 13h10v10H1z"/>
      <path fill="#FFB900" d="M13 13h10v10H13z"/>
    </svg>
    Microsoft
  </Button>
  <Button variant="outline" size="sm">
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="#1DA1F2">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
    Twitter
  </Button>
  <Button variant="outline" size="sm">
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
    Facebook
  </Button>
            </div>
            
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/sign-in" className="text-primary font-medium hover:underline">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
<div className="text-center space-y-2">
  <p className="text-sm font-medium">What you'll get:</p>
  <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-primary rounded-full"></div>
      <span>Free Career Quiz</span>
    </div>
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-secondary rounded-full"></div>
      <span>College Finder</span>
    </div>
    {/* You can add more items and they’ll wrap automatically */}
    {/* 
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-accent rounded-full"></div>
      <span>Scholarship Alerts</span>
    </div> 
    */}
  </div>
</div>

      </div>
    </div>
  );
};

export default SignUp;