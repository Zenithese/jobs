class Api::JobsController < ApplicationController
    def index
        if params[:data]
            @jobs = Job.tagged(params[:data])
        else
            @jobs = Job.all
        end
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