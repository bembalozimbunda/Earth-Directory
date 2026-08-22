export interface SupportResource {
  id: string;
  name: string;
  category: 'crisis_hotline' | 'hospital_psychiatry' | 'emergency_services' | 'clinic_support';
  tollFreeNumbers?: string[];
  directLines?: string[];
  location?: string;
  availability: string;
  description: string;
  networksSupported?: string;
  directActionLabel?: string;
}

export interface GroundingStep {
  id: string;
  title: string;
  action: string;
  detail: string;
  iconName: 'moon' | 'droplet' | 'users' | 'heart' | 'shield';
}

export const ZAMBIA_HEALTH_SUPPORT_DATA = {
  title: 'Real-World Health & Counseling Support Resources in Zambia',
  headline: 'Support, confidential counseling, and medical guidance are always within reach.',
  subtext: 'If you or someone you know needs support, confidential counseling, or medical guidance, these local services are available:',
  
  resources: [
    {
      id: 'lifeline-childline-zambia',
      name: 'Lifeline / Childline Zambia',
      category: 'crisis_hotline',
      tollFreeNumbers: ['116', '933'],
      networksSupported: 'Airtel, MTN, and Zamtel (100% Toll-Free)',
      availability: '24 Hours / 7 Days a Week',
      description: 'Provides free, confidential mental health counseling, emotional support, and crisis assistance across Zambia on all major mobile networks.',
      location: 'Lusaka & Nationwide Toll-Free Network',
      directActionLabel: 'Call Toll-Free 116 / 933'
    },
    {
      id: 'uth-psychiatry',
      name: 'University Teaching Hospital (UTH) – Department of Psychiatry & Mental Health',
      category: 'hospital_psychiatry',
      location: 'Nationalist Road, Lusaka, Zambia',
      directLines: ['+260 211 254116', '+260 211 251451'],
      availability: 'Outpatient Clinic & Emergency Consultation Daily',
      description: 'Zambia\'s premier referral hospital offering direct outpatient consultations, clinical psychiatric care, psychological therapy, and medical assessments.',
      directActionLabel: 'Visit UTH Nationalist Rd, Lusaka'
    },
    {
      id: 'chainama-hills-hospital',
      name: 'Chainama Hills Hospital / Mental Health Services',
      category: 'hospital_psychiatry',
      location: 'Great East Road, Lusaka, Zambia',
      directLines: ['+260 211 281655', '+260 211 282433'],
      availability: '24/7 Inpatient & Outpatient Mental Health Services',
      description: 'National specialized psychiatric and psychological institution providing professional mental health consultations, rehabilitation, counseling, and crisis stabilization.',
      directActionLabel: 'Visit Chainama Hills, Great East Rd'
    },
    {
      id: 'zambia-national-emergency',
      name: 'National Emergency Medical Services',
      category: 'emergency_services',
      tollFreeNumbers: ['992', '999'],
      networksSupported: 'All Cellular & Landline Providers',
      availability: '24/7 Immediate Emergency Dispatch',
      description: 'National emergency response for immediate acute medical attention and emergency ambulance transport in Zambia.',
      location: 'Nationwide Zambia',
      directActionLabel: 'Dial Emergency 992 / 999'
    }
  ] as SupportResource[],

  groundingSteps: [
    {
      id: 'step-1',
      title: 'Rest your body',
      action: 'Give your eyes and mind a break from the screen and device.',
      detail: 'Step away from all monitors, phones, and digital interfaces. Allow your nervous system to decelerate in a quiet, calm space.',
      iconName: 'moon'
    },
    {
      id: 'step-2',
      title: 'Ground yourself in the physical moment',
      action: 'Drink a glass of water, eat a nourishing meal, take slow, deep breaths, and feel the solid ground beneath your feet.',
      detail: 'Re-engage your physical senses: focus on the temperature of the water, the feeling of your feet firmly on the floor, and the natural rhythm of your breath.',
      iconName: 'droplet'
    },
    {
      id: 'step-3',
      title: 'Talk to someone you trust',
      action: 'Reach out to a family member, a close friend, or visit a nearby clinic or health post to speak with a healthcare provider in person.',
      detail: 'Sharing how you feel with another human in person breaks isolation and provides immediate, tangible real-world care.',
      iconName: 'users'
    }
  ] as GroundingStep[],

  footerMessage: 'Your health, peace of mind, and physical well-being are what matter most. Please consider reaching out to one of the resources above or a trusted person in your community today.'
};
