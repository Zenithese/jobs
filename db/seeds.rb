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

SavedJob.destroy_all

SavedJob.create!(user_id: 6, job_id: 1)