import { ArrowRight, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-slate-50 to-blue-50 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 font-medium text-sm">
            <Bot className="w-4 h-4" />
            AI-Powered Workspace Management
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
            Manage Your Work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Effortlessly with AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Corvalt is your intelligent assistant that seamlessly manages email, Drive,
            and chat applications to help you focus on what matters most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold text-lg border-2 border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-200">
              Watch Demo
            </button>
          </div>

          <div className="pt-12 flex items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              No credit card required
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
            <div>14-day free trial</div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
            <div>Cancel anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
