# class UnionMailer < ApplicationMailer
#     default from: 'unionbasejobs@gmail.com'

#     def signup_email(user) 
#         @user = user
#         # @url = 'unionjobs.herokuapp.com'
#         email_with_name = %("#{@user.username}" <#{@user.email}>)
#         @specialtext = 'Welcome ' + @user.username + ', thank you for signing up with UnionBase::Jobs. We certainly hope you find a fair, respectful and democratic workplace. Solidarity!'
#         mail(to: email_with_name, subject: 'Solidarity! Welcome to UnionBase::Jobs')
#     end
# end