import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const navigate = useNavigate();

  // Success handler function
  const handleSignupSuccess = (userInfo) => {
    console.log("🎉 Signup successful, showing success message");
    
    // Show immediate success toast
    toast({
      title: "🎉 Account Created Successfully!",
      description: `Welcome aboard, ${userInfo.name}!`,
      duration: 3000,
    });

    // Wait 2 seconds to show success message, then redirect
    setTimeout(() => {
      toast({
        title: "✅ Redirecting...",
        description: "Taking you to your dashboard",
        duration: 2000,
      });

      // Redirect after 1 more second
      setTimeout(() => {
        console.log("🔄 Redirecting to dashboard with:", userInfo);
        navigate("/dashboard", {
          state: { userInfo }
        });
      }, 1000);
    }, 2000);
  };

  // Email/Password SignUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!educationLevel) {
      toast({ 
        title: "⚠️ Please select your education level first",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    console.log("🚀 Starting signup process...");
    
    try {
      console.log("📧 Email:", email);
      console.log("🎓 Education Level:", educationLevel);
      console.log("📌 Step 1: Creating user in Firebase Auth...");
      
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ Step 1 SUCCESS - Auth created:", cred.user.uid);
      console.log("👤 User object:", cred.user);

      const extractedName = email.split("@")[0];
      console.log("📝 Extracted name:", extractedName);
      
      console.log("📌 Step 2: Saving user to Firestore...");
      const userDoc = {
        email,
        educationLevel,
        name: extractedName,
        createdAt: new Date(),
      };
      console.log("📄 Document to save:", userDoc);
      
      await setDoc(doc(db, "users", cred.user.uid), userDoc);
      console.log("✅ Step 2 SUCCESS - User data saved to Firestore");

      const userInfo = {
        name: extractedName,
        educationLevel,
        email,
        isNewUser: true
      };

      console.log("✅ ALL STEPS COMPLETED - Stopping loading and showing success");
      setLoading(false);
      
      toast({
        title: "🎉 SUCCESS!",
        description: `Account created for ${extractedName}!`,
        duration: 5000,
      });

      // Immediate redirect for testing
      setTimeout(() => {
        console.log("🔄 Redirecting NOW to dashboard with:", userInfo);
        navigate("/dashboard", {
          state: { userInfo }
        });
      }, 2000);
      
    } catch (err) {
      console.error("🔥🔥🔥 SIGNUP ERROR:", err);
      console.error("Error code:", err.code);
      console.error("Error message:", err.message);
      console.error("Full error object:", err);
      
      setLoading(false);
      toast({ 
        title: "❌ Registration Failed", 
        description: `${err.code}: ${err.message}`,
        variant: "destructive",
        duration: 7000,
      });
    }
  };

  // Google SignUp
  const handleGoogleSignUp = async () => {
    if (!educationLevel) {
      toast({ 
        title: "⚠️ Please select your education level first",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      console.log("📌 Starting Google signup...");
      const cred = await signInWithPopup(auth, googleProvider);
      console.log("✅ Google Auth successful:", cred.user.uid);

      const displayName = cred.user.displayName || cred.user.email?.split("@")[0] || "User";
      
      await setDoc(doc(db, "users", cred.user.uid), {
        email: cred.user.email,
        name: displayName,
        educationLevel,
        photoURL: cred.user.photoURL,
        createdAt: new Date(),
      });
      console.log("✅ Google user data saved to Firestore");

      const userInfo = {
        name: displayName,
        educationLevel,
        email: cred.user.email,
        photoURL: cred.user.photoURL,
        isNewUser: true
      };

      setLoading(false);
      handleSignupSuccess(userInfo);
      
    } catch (err) {
      console.error("🔥 Google Signup Error:", err);
      setLoading(false);
      toast({ 
        title: "❌ Google Sign-up Failed", 
        description: err.message,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-600 mt-2">Join us to start your learning journey</p>
          {loading && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                Currently creating account... Check console for details.
              </p>
              <Button
                onClick={() => {
                  console.log("🛑 MANUALLY STOPPING LOADING");
                  setLoading(false);
                }}
                variant="outline"
                size="sm"
                className="mt-2 text-xs"
              >
                🛑 Force Stop Loading (Debug)
              </Button>
            </div>
          )}
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={loading}
              className="h-12 px-4"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password (min 6 characters)"
              minLength={6}
              disabled={loading}
              className="h-12 px-4"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="education" className="text-sm font-medium">Education Level</Label>
            <Select onValueChange={(val) => setEducationLevel(val)} disabled={loading}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10th Class">10th Grade</SelectItem>
                <SelectItem value="12th Class">12th Grade</SelectItem>
                <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                <SelectItem value="Graduate">Graduate</SelectItem>
                <SelectItem value="Postgraduate">Postgraduate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 font-medium text-base"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Creating Account...
              </span>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-gray-500 font-medium">OR</span>
          </div>
        </div>

        {/* Google SignUp */}
        <Button
          onClick={handleGoogleSignUp}
          disabled={loading}
          variant="outline"
          className="w-full h-12 flex items-center justify-center gap-3 disabled:opacity-50 font-medium hover:bg-gray-50"
        >
          <FcGoogle className="w-6 h-6" /> 
          {loading ? "Signing up..." : "Continue with Google"}
        </Button>
        
        <div className="text-center pt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/login")} 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;