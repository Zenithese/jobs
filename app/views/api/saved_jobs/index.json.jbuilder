@savedjobs.each do |job|
    json.set! job.id do
        json.extract! job, :id, :user_id, :job_id
    end
end