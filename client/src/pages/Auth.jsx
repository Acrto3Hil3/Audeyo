import { useState } from "react";
import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { Cloud } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { isSignedIn } = useUser();

    // Redirect to home if already signed in
    if (isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                {/* Logo */}
                <div className="text-center space-y-4">
                    <Link to="/" className="inline-flex items-center gap-2">
                        <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                            <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-foreground">Audeyo</span>
                    </Link>
                </div>

                {/* Clerk Auth Components */}
                <div className="flex flex-col items-center">
                    {isLogin ? (
                        <SignIn
                            routing="path"
                            path="/auth"
                            signUpUrl="/auth"
                            afterSignInUrl="/"
                            appearance={{
                                elements: {
                                    rootBox: "w-full",
                                    card: "w-full shadow-lg",
                                }
                            }}
                        />
                    ) : (
                        <SignUp
                            routing="path"
                            path="/auth"
                            signInUrl="/auth"
                            afterSignUpUrl="/"
                            appearance={{
                                elements: {
                                    rootBox: "w-full",
                                    card: "w-full shadow-lg",
                                }
                            }}
                        />
                    )}

                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        {isLogin ? (
                            <>
                                Don't have an account?{" "}
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className="text-primary hover:underline"
                                >
                                    Sign up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className="text-primary hover:underline"
                                >
                                    Sign in
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-muted-foreground">
                    By continuing, you agree to our{" "}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Auth;