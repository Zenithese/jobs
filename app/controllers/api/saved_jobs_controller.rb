class Api::SavedJobsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @savedjobs = SavedJob.all
        render "api/saved_jobs/index"
    end

    def create
        
        @savedjob = SavedJob.new(job_id: params[:job][:id], user_id: current_user.id)
        @savedjob.save
        render "api/saved_jobs/show"
    end

    def destroy
        @savedjob = SavedJob.all.find_by(job_id: params[:id])
        @savedjob.destroy
        render "api/saved_jobs/show"
    end
end