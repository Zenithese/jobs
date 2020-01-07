json.job do
  json.extract! job, :id, :email, :title, :description, :tags, :duties, :qualifications
#   json.photoUrl url_for(job.photo)
end