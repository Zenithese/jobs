# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# id: 1,
#  title: "Developer",
#  description: "Design and code web applications with social and economic justice as core principles.",
#  tags:
#   ["React",
#    "React Native",
#    "PostgreSQL",
#    "Rails",
#    "Union",
#    "Web Developement",
#    "Programmer",
#    "Coding",
#    "Social",
#    "Economic",
#    "Justice",
#    "Solidarity"],
#  duties:
#   ["Full stack web development",
#    "Maintain and monitor database",
#    "Update legacy systems",
#    "Maintian Labor Movement awareness",
#    "Create, test and deploy mobile apps",
#    "Assist clients with their user experience and technical understanding",
#    "Report to CTO and CEO on a regular basis"],
#  qualifications:
#   ["Proficient in React, React Native, Ruby on Rails, Redux, JQuery, CSS, HTML, Python",
#    "Willingness to learn new and expand upon known programming languages, librarys, and paradigms",
#    "Commitment to social and economic justice",
#    "Ability to perform within a dynamic and evolving workspace"],

require 'open-uri'

Job.destroy_all
SavedJob.destroy_all

job1 = Job.create!(
    title: "Developer", 
    description: "Design and code web applications with social and economic justice as core principles.",  
    tags: ["React",
   "React Native",
   "PostgreSQL",
   "Rails",
   "Union",
   "Web Developement",
   "Programmer",
   "Coding",
   "Social",
   "Economic",
   "Justice",
   "Solidarity"],
   duties: ["Full stack web development",
   "Maintain and monitor database",
   "Update legacy systems",
   "Maintian Labor Movement awareness",
   "Create, test and deploy mobile apps",
   "Assist clients with their user experience and technical understanding",
   "Report to CTO and CEO on a regular basis"], 
   qualifications: ["Proficient in React, React Native, Ruby on Rails, Redux, JQuery, CSS, HTML, Python",
   "Willingness to learn new and expand upon known programming languages, librarys, and paradigms",
   "Commitment to social and economic justice",
   "Ability to perform within a dynamic and evolving workspace"])

job2 = Job.create!(
    title: "Organizer", 
    description: "We are seeking energetic and passionate individuals interested in starting social justice careers in labor organizing.
                    For 100 years, SEIU has been helping workers stand up for their rights, fighting for dignity, respect and better conditions in workplaces and communities. With a membership 2.1 million strong, SEIU is the fastest-growing union in the United States and our diverse leaders and staff support workers as they speak out for good jobs and better lives for themselves and their families.
                    The SEIU Organizer-in-Training (OIT) Program is a 12-month training program. As an Organizer-in-Training with the SEIU, you will be assigned to organizing campaigns, trained on the fundamentals of union organizing and will have the opportunity to learn the skills needed to help workers build power in the workplace. The OIT program trains labor organizers to assist and empower non-union workers to join unions and is different from other training programs that focus on developing political/electoral or community organizing skills.",  
    tags: [
        "oragnizing",
        "organizer",
        "democracy",
        "social",
        "economic",
        "justice",
        "labor",
        "equality"
    ],
    duties: [
        "Conducting broad and intensive outreach efforts to non-union workers.",
        "Building one-on-one relationships with workers.",
        "Identifying, recruiting and developing worker leaders.",
        "Conducting individual and group meetings with workers to move organizing campaigns forward.",
        "Engaging, motivating and mobilizing workers to take action.",
        "Planning and carrying out actions and events to support worker organizing efforts."
    ], 
    qualifications: [
        "Demonstrated commitment to social and economic justice.",
        "Ability and willingness to work long and irregular hours, including nights and weekends.",
        "Excellent listening, oral and written communication skills.",
        "Basic computer literacy and ability to learn the organization's technology tools.",
        "Ability to work independently as well as with a team.",
        "Willingness to conduct work site and home visits.",
        "Strong planning, time-management and problem-solving skills.",
        "Willingness to work with people from diverse cultures and backgrounds.",
        "Possession of a valid U.S. driver's license, proof of auto insurance, and an automobile for business use.",
        "Ability and willingness to travel on a frequent basis and for extended periods of time."
    ])

job3 = Job.create!(
    title: "Barista", 
    description: "Come work at Brewing Market Coffee & Tea and Espresso Vino by Brewing Market. We're a local Boulder County coffee and tea company in business for over 40 years! We're now hiring employees to help us keep growing in both our Lafayette and Longmont locations. If you're a passionate self-starter, Brewing Market and Espresso Vino by Brewing Market are an ideal place to get ahead. You'll be glad you applied to Brewing Market Coffee & Tea Company!",  
    tags: [
        "barista",
        "coffee",
        "interpersonal",
        "social",
        "union"
    ],
    duties: [
        "Prepare and serve coffee and tea drinks that meet quality company standards",
        "Not afraid to engage with guests outside of counter space",
        "Properly handle and maintain all equipment",
        "Respond to orders, questions, concerns, and complaints in a polite and efficient manner",
        "Serve customers quickly and efficiently",
        "Food handling and prep (specifically for Espresso Vino location)",
        "Demonstrate a thorough understanding of all the menu offerings",
        "Observe relevant health and safety standards"
    ], 
    qualifications: [
        "A high school diploma or general education degree (GED)",
        "Willingness to learn all aspects of coffee, tea and merchandise (and beer and wine at Espresso Vino location)",
        "Retail, hospitality, and/or customer service experience preferred",
        "TIPS certified (for Espresso Vino location) or acquired within 30 days of employment",
        "Strong ability to multi-task",
        "Basic mathematical skills",
        "Ability to problem solve quickly",
        "Strong customer service and communication skills",
        "Ability to follow directions",
        "Available for closing/evening shifts at Espresso Vino; open and close shifts at other locations."
    ])


SavedJob.create!(user_id: 6, job_id: job1.id)