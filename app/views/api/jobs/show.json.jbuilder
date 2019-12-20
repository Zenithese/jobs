json.job do
  json.extract! job, :id, :title, :description, :tags, :duties, :qualifications
#   json.photoUrl url_for(job.photo)
end