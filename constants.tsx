
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
    tagline: "One-on-One and Group Coaching. Scholarships Available.",
    icon: <Users className="w-6 h-6" />,
    description: "Experience the joy, peace, and purpose of living a biblically based Christ-centered life. For some, it begins with God's plan of salvation. Others choose to focus on daily disciplines and obedient living; identity in Christ and freedom from strongholds; spiritual maturity and theological grounding; or sharing the gospel and discipling men. I provide accountability in all areas.",
    suitableFor: "individual men and small groups seeking Christ-centered growth",
    scripture: "Him we proclaim, warning everyone and teaching everyone with all wisdom, that we may present everyone mature in Christ.",
    reference: "Colossians 1:28 (ESV)"
  },
  {
    id: 2,
    title: "Leadership Development",
    tagline: "Servant based leadership development for home, work, and church.",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Leadership formation is rooted in values, humility, authenticity, and doing uncomfortable work. Learn to exercise authority responsibly and live with integrity under pressure. I focus on servant leadership, decision-making under uncertainty, and building trust with those you lead—whether in your home, workplace, or church.",
    suitableFor: "emerging and established leaders in the home, workplace, and church. We also offer values-based programs appropriate for businesses and publicly-held companies",
    scripture: "But whoever would be great among you must be your servant, and whoever would be first among you must be slave of all.",
    reference: "Mark 10:43–44 (ESV)"
  },
  {
    id: 3,
    title: "Men's Ministry Consulting",
    tagline: "Moving men from participation to ownership.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    description: "Advising churches on building men's ministries that actually form men. We help clarify vision, design clear pathways, and create sustainable structures. The goal is moving men from participation to depth—toward lasting spiritual growth and long-term impact in your congregation and community.",
    suitableFor: "churches and ministry leaders building or strengthening men's ministry",
    scripture: "To equip the saints for the work of ministry, for building up the body of Christ.",
    reference: "Ephesians 4:12 (ESV)"
  },
  {
    id: 4,
    title: "Workshops & Retreats",
    tagline: "Thoughtfully planned gatherings for critical transitions.",
    icon: <Compass className="w-6 h-6" />,
    description: "Designing, managing, and facilitating events that challenge and strengthen men. From one-day workshops to multi-day retreats, I leverage my Project Management Professional (PMP) certification with thirty years' experience leading complex initiatives to combine professional execution with meaningful, transformative content. Each gathering is tailored to your group's size, stage, and goals—whether for critical transitions or ongoing formation.",
    suitableFor: "churches, ministries, and organizations planning men's events",
    scripture: "But all things should be done decently and in order.",
    reference: "1 Corinthians 14:40 (ESV)"
  },
  {
    id: 5,
    title: "Public Speaking",
    tagline: "Direct truth calling men to responsibility.",
    icon: <Mic2 className="w-6 h-6" />,
    description: "Motivational and educational speaking engagements that emphasize truth, personal accountability, and values-based leadership. I avoid hype or emotional manipulation in favor of clear, biblical conviction. Content is tailored to your event—keynotes, men's gatherings, retreats, church services, and corporate gatherings—always calling men to personal responsibility and servant leadership.",
    suitableFor: "men's events, conferences, churches, and organizations",
    scripture: "Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.",
    reference: "Colossians 4:6 (ESV)"
  },
  {
    id: 6,
    title: "Corporate Chaplaincy",
    tagline: "Support and ethical clarity for organizations.",
    icon: <HeartHandshake className="w-6 h-6" />,
    description: "Confidential pastoral care for men within non-faith-based business and publicly held companies. I provide support and moral clarity during seasons of stress, transition, or ethical strain. The work is discreet, biblically grounded, and aimed at helping individuals and teams navigate difficult decisions while preserving dignity and trust.",
    suitableFor: "businesses and organizations seeking pastoral support for teams",
    scripture: "Who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction.",
    reference: "2 Corinthians 1:4 (ESV)"
  }
];
