import Link from "next/link"

export default function ForgotPasswordPage() {
  
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-white">
            PayBridge
          </Link>
          <h1 className="text-2xl font-semibold text-white mt-6 mb-2">Reset Password</h1>
          <p className="text-white/70">Enter your email to receive a password reset link</p>
        </div>

        <div className="bg-card/10 backdrop-blur-sm p-8 rounded-lg border border-border/20">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70">
              Remember your password?{" "}
              <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-white/50">
            Check your spam folder if you don't receive the email within a few minutes
          </p>
        </div>
      </div>
    </div>
  )
}
