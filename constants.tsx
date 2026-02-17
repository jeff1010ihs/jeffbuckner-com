
import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  LayoutDashboard, 
  Compass, 
  Mic2, 
  HeartHandshake 
} from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Christian Life Coaching for Men",
    tagline: "One-on-One and Group Coaching. Scholarships Available",
    icon: <Users className="w-6 h-6" />,
    description: "Experience the joy, peace, and purpose of living a biblically based Christ-centered life. It begins with grounding one in God's plan of salvation. Focus areas include daily disciplines and obedient living; identity in Christ and freedom from strongholds; spiritual maturity and theological grounding; and sharing the gospel and discipling men.",
    scripture: "Him we proclaim, warning everyone and teaching everyone with all wisdom, that we may present everyone mature in Christ.",
    reference: "Colossians 1:28 (ESV)"
  },
  {
    id: 2,
    title: "Leadership Development",
    tagline: "Character-driven leadership for home and work.",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Leadership formation rooted in character, humility, and conviction. Learn to exercise authority responsibly and live with integrity under pressure in your home, workplace, and church.",
    scripture: "But whoever would be great among you must be your servant, and whoever would be first among you must be slave of all.",
    reference: "Mark 10:43–44 (ESV)"
  },
  {
    id: 3,
    title: "Ministry Consulting",
    tagline: "Moving men from participation to ownership.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    description: "Advising churches on building men's ministries that actually form men. Clarifying vision and creating pathways that move men toward depth, sustainability, and long-term impact.",
    scripture: "To equip the saints for the work of ministry, for building up the body of Christ.",
    reference: "Ephesians 4:12 (ESV)"
  },
  {
    id: 4,
    title: "Workshops & Retreats",
    tagline: "Thoughtfully planned gatherings for critical transitions.",
    icon: <Compass className="w-6 h-6" />,
    description: "Designing and facilitating events that challenge and strengthen men. Professional execution combined with meaningful, transformative content for groups of all sizes.",
    scripture: "But all things should be done decently and in order.",
    reference: "1 Corinthians 14:40 (ESV)"
  },
  {
    id: 5,
    title: "Public Speaking",
    tagline: "Direct truth calling men to responsibility.",
    icon: <Mic2 className="w-6 h-6" />,
    description: "Direct and motivational teaching that emphasizes truth and personal accountability. I avoid hype or emotional manipulation in favor of clear, biblical conviction.",
    scripture: "Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.",
    reference: "Colossians 4:6 (ESV)"
  },
  {
    id: 6,
    title: "Corporate Chaplaincy",
    tagline: "Support and ethical clarity for organizations.",
    icon: <HeartHandshake className="w-6 h-6" />,
    description: "Confidential pastoral care for teams within secular organizations. Providing support and moral clarity during seasons of stress, transition, or ethical strain.",
    scripture: "Who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction.",
    reference: "2 Corinthians 1:4 (ESV)"
  }
];
