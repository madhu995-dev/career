import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // 🔹 Get email from input
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const name = email.split("@")[0];
      localStorage.setItem("userName", name);

      toast({
        title: "✅ Successfully Signed In",
        description: "Welcome back! Redirecting to your dashboard...",
        duration: 3000,
      });

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    // 🔹 Replace with real Google OAuth later
    const fakeEmail = "madhu@gmail.com";
    const name = fakeEmail.split("@")[0];
    localStorage.setItem("userName", name);

    toast({
      title: "🔗 Google Sign-In",
      description: "Redirecting to Google authentication...",
    });

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
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
