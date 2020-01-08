class ComradeMailer < ApplicationMailer
    default from: 'unionbasejobs@gmail.com'

    def email_union(email, unionEmail, message)
        
        @message = message
        mail(to: unionEmail, reply_to: email, subject: 'New candidate')
    end
end