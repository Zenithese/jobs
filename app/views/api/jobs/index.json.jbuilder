@jobs.each do |job|
    json.set! job.id do
        json.extract! job, :id, :email, :title, :description, :tags, :duties, :qualifications
        # json.photoUrl url_for(job.photo)
    end
end