import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Email/Password Sign In
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast({
        title: "✅ Successfully Signed In",
        description: "Welcome back!",
        duration: 3000,
      });

      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error: any) {
      toast({
        title: "❌ Error",
        description: error.message,
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      toast({
        title: "🔗 Google Sign-In",
        description: "Welcome back!",
      });

      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error: any) {
      toast({
        title: "❌ Google Sign-In Failed",
        description: error.message,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">
        
        {/* Back to home */}
        <div className="mb-4">
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Career Path
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 text-center mt-2">
          Sign In
        </h3>
        <p className="text-gray-600 text-center mt-2">
          Access your personalized career dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Sign In */}
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          size="lg"
        >
          <FcGoogle className="w-5 h-5" />
          Sign in with Google
        </Button>

        {/* Footer */}
        <p className="mt-6 text-gray-600 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
