import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "@/firebase"; // ✅ merged import
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const navigate = useNavigate();

  // Email/Password SignUp
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!educationLevel) {
      toast({ title: "⚠️ Select education level first" });
      return;
    }

    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", cred.user.uid), {
        email,
        educationLevel,
      });

      toast({ title: "✅ Account created" });
      navigate("/dashboard", {
        state: { userInfo: { name: email.split("@")[0], educationLevel } },
      });
    } catch (err: any) {
      toast({ title: "❌ Error", description: err.message });
    } finally {
      setLoading(false);
    }
  };

  // Google SignUp
  const handleGoogleSignUp = async () => {
    if (!educationLevel) {
      toast({ title: "⚠️ Select education level first" });
      return;
    }

    try {
      const cred = await signInWithPopup(auth, googleProvider);

      await setDoc(doc(db, "users", cred.user.uid), {
        email: cred.user.email,
        name: cred.user.displayName || cred.user.email?.split("@")[0],
        educationLevel,
      });

      toast({ title: "✅ Google Sign-Up successful" });
      navigate("/dashboard", {
        state: {
          userInfo: {
            name: cred.user.displayName || cred.user.email?.split("@")[0],
            educationLevel,
          },
        },
      });
    } catch (err: any) {
      toast({ title: "❌ Error", description: err.message });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        {/* Email/Password Form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
            />
          </div>

          <div>
            <Label>Education Level</Label>
            <Select onValueChange={(val) => setEducationLevel(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select education level" />
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

          <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        {/* Google SignUp */}
        <Button
          onClick={handleGoogleSignUp}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <FcGoogle className="w-5 h-5" /> Sign up with Google
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
