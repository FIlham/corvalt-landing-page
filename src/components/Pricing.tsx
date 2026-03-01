import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'forever',
    description: 'Perfect for trying out Corvalt',
    features: [
      'Up to 100 emails per month',
      '5 GB Drive storage',
      'Basic chat management',
      'Email support',
      'Core AI features',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '29',
    period: 'per month',
    description: 'For growing entrepreneurs',
    features: [
      'Unlimited emails',
      '100 GB Drive storage',
      'Advanced chat management',
      'Priority support',
      'Full AI capabilities',
      'Custom integrations',
      'Advanced analytics',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    period: 'per month',
    description: 'For large teams and businesses',
    features: [
      'Everything in Professional',
      'Unlimited Drive storage',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom AI training',
      'SSO & advanced security',
      'SLA guarantee',
      'API access',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Simple, Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> Pricing</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white text-slate-800 hover:shadow-xl border border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-slate-800 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-cyan-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-cyan-100' : 'text-slate-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-cyan-600 hover:bg-cyan-50'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-cyan-100' : 'text-cyan-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
