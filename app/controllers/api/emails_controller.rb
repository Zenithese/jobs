class Api::EmailsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        ComradeMailer.email_union(params[:email], params[:unionEmail], params[:message]).deliver_now
    end
end