class Job < ApplicationRecord
    # has_one_attached :photo

    # private

    # def ensure_default_photo
    #     unless self.photo.attached?
    #         file = EzDownload.open('https://seedie.s3.amazonaws.com/ATC.jpg')
    #         self.photo.attach(io: file, filename: 'comp_vii.jpg')
    #     end
    # end
end