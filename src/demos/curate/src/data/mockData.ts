import { Resume, Template } from '../types';

export const TEMPLATES: Template[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=600',
    description: 'A clean, minimalist layout perfect for tech and creative roles.'
  },
  {
    id: 'executive',
    name: 'Executive Serif',
    thumbnail: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400&h=600',
    description: 'A sophisticated, traditional design for leadership positions.'
  },
  {
    id: 'minimal',
    name: 'Creative Portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=400&h=600',
    description: 'A bold, visual design that highlights your creative projects.'
  }
];

export const MOCK_RESUMES: Resume[] = [
  {
    id: '1',
    title: 'Senior Product Designer 2024',
    updatedAt: '2024-03-15T10:30:00Z',
    templateId: 'modern',
    personalInfo: {
      fullName: 'Alex Rivera',
      email: 'alex.rivera@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'alexrivera.design',
      linkedin: 'linkedin.com/in/alexrivera',
      jobTitle: 'Senior Product Designer',
      summary: 'Product Designer with 8+ years of experience building scalable design systems and user-centric interfaces for high-growth SaaS companies.'
    },
    experience: [
      {
        id: 'exp1',
        company: 'TechFlow Systems',
        position: 'Senior Product Designer',
        location: 'Remote',
        startDate: '2021-06',
        endDate: '',
        current: true,
        description: 'Leading the design of the core analytics dashboard, resulting in a 25% increase in user engagement.'
      }
    ],
    education: [
      {
        id: 'edu1',
        school: 'Design Institute of Technology',
        degree: 'BFA',
        field: 'Interaction Design',
        location: 'Seattle, WA',
        startDate: '2012',
        endDate: '2016',
        current: false,
        description: 'Focused on human-computer interaction and visual systems.'
      }
    ],
    skills: [
      { id: 's1', name: 'Figma', level: 'Expert' },
      { id: 's2', name: 'React', level: 'Advanced' },
      { id: 's3', name: 'Design Systems', level: 'Expert' }
    ],
    certifications: [],
    projects: []
  }
];
