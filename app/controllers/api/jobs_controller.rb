class Api::JobsController < ApplicationController
    def index
        @jobs = Job.all
        render "api/jobs/index"
    end

    def show
        @job = Job.find(params[:id])
        render "api/jobs/show"
    end

    private

    def job_params
        params.require(:job).permit(:title, :description, :tags, :duties, :qualifications)
    end
end