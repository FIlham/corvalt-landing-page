import { Mail, FolderOpen, MessageSquare, Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: 'Smart Email Management',
    description: 'Automatically categorize, prioritize, and respond to emails with AI-powered insights.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: FolderOpen,
    title: 'Intelligent Drive Organization',
    description: 'Keep your files organized with smart tagging and instant search across all your documents.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: MessageSquare,
    title: 'Unified Chat Interface',
    description: 'Manage conversations across multiple platforms in one seamless, AI-enhanced interface.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Get actionable insights and suggestions to optimize your workflow and productivity.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with bank-level encryption and industry-leading security protocols.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Experience instant responses and seamless integration with all your favorite tools.',
    color: 'from-cyan-400 to-blue-400',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> Succeed</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Corvalt brings powerful AI capabilities to streamline your entire workspace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-cyan-200"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
