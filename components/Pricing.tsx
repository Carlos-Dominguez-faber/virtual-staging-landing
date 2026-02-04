'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Gift, Rocket, Sparkles, Crown, ArrowRight } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  icon: React.ReactNode;
  tagline: string;
  price: string;
  priceDetail: string;
  billingNote: string;
  features: PlanFeature[];
  popular?: boolean;
  ctaColor: 'blue' | 'green';
}

const plans: Plan[] = [
  {
    name: 'Free',
    icon: <Gift className="w-5 h-5" />,
    tagline: 'Try out the platform',
    price: '$0',
    priceDetail: '',
    billingNote: 'No credit card required',
    features: [
      { text: '1 staged image per property', included: true },
      { text: '0 property tours (8s 1080p)', included: false },
      { text: 'Up to 3 regenerations', included: true },
      { text: 'Custom branding & logo', included: false },
      { text: 'Priority support', included: false },
      { text: 'White-label solution', included: false },
    ],
    ctaColor: 'blue',
  },
  {
    name: 'Starter',
    icon: <Rocket className="w-5 h-5" />,
    tagline: 'Perfect for single listings',
    price: '$19.99',
    priceDetail: '',
    billingNote: 'One-time payment',
    features: [
      { text: '3 staged images per property', included: true },
      { text: '1 property tour (8s 1080p)', included: true },
      { text: 'Unlimited regenerations', included: true },
      { text: 'Custom branding & logo', included: false },
      { text: 'Priority support', included: false },
      { text: 'White-label solution', included: false },
    ],
    ctaColor: 'blue',
  },
  {
    name: 'Professional',
    icon: <Sparkles className="w-5 h-5" />,
    tagline: 'For multi-room properties',
    price: '$29.99',
    priceDetail: '',
    billingNote: 'One-time payment',
    popular: true,
    features: [
      { text: '9 staged images per property', included: true },
      { text: '1 property tour (24s 1080p)', included: true },
      { text: 'Unlimited regenerations', included: true },
      { text: 'Custom branding & logo', included: true },
      { text: 'Priority support', included: false },
      { text: 'White-label solution', included: false },
    ],
    ctaColor: 'green',
  },
  {
    name: 'Enterprise',
    icon: <Crown className="w-5 h-5" />,
    tagline: 'Unlimited properties',
    price: '$75',
    priceDetail: '/mo',
    billingNote: 'Cancel anytime',
    features: [
      { text: '9 staged images per property', included: true },
      { text: '1 property tour (24s 4K)', included: true },
      { text: 'Unlimited regenerations', included: true },
      { text: 'Custom branding & logo', included: true },
      { text: 'Priority support', included: true },
      { text: 'White-label solution', included: true },
    ],
    ctaColor: 'blue',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
            Simple Pricing
          </span>
          <h2 className="text-slate-900 text-4xl md:text-5xl font-black tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Transform empty properties into stunning spaces. No subscriptions for most plans—pay once, use forever.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              <div
                className={`relative h-full rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-white/10'
                    : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/30 uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-xl ${
                    plan.popular
                      ? 'bg-white/10 text-white'
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  {plan.priceDetail && (
                    <span className={`text-lg ml-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.priceDetail}
                    </span>
                  )}
                </div>
                <p className={`text-xs mb-6 ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                  {plan.billingNote}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className={`p-0.5 rounded-full ${
                          plan.popular ? 'bg-emerald-500/20' : 'bg-emerald-100'
                        }`}>
                          <Check className={`w-4 h-4 ${
                            plan.popular ? 'text-emerald-400' : 'text-emerald-600'
                          }`} />
                        </div>
                      ) : (
                        <div className={`p-0.5 rounded-full ${
                          plan.popular ? 'bg-slate-700' : 'bg-slate-100'
                        }`}>
                          <X className={`w-4 h-4 ${
                            plan.popular ? 'text-slate-600' : 'text-slate-400'
                          }`} />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? plan.popular ? 'text-slate-300' : 'text-slate-700'
                            : plan.popular ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://virtual-staging.systemizemybiz.com/pricing"
                  className={`group/btn w-full py-3.5 px-6 rounded-xl font-bold text-center block transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg'
                      : plan.ctaColor === 'green'
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm">
            Trusted by <span className="text-slate-600 font-semibold">2,000+</span> real estate professionals worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
