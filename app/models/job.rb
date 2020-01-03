class Job < ApplicationRecord
    # belongs_to :city

    before_save { self.tags = tags.map { |tag| tag.downcase }}
    
    scope :tagged, -> (tags) {where('jobs.tags @> ARRAY[?]::varchar[]', [tags].flatten.compact)}
    # has_one_attached :photo

    # private

    # def ensure_default_photo
    #     unless self.photo.attached?
    #         file = EzDownload.open('https://seedie.s3.amazonaws.com/ATC.jpg')
    #         self.photo.attach(io: file, filename: 'comp_vii.jpg')
    #     end
    # end
end