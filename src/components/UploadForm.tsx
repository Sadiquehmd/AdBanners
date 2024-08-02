"use client";
import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./UploadForm.module.css";
const poppins=Poppins({weight:["400"],subsets:['latin']})
interface UploadFormProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  template:number
  onClose: () => void;
  onSave: (newData: any) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  template,
  onClose,
  onSave,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCta, setNewCta] = useState(cta);
  const [newImage, setNewImage] = useState(image);
  const [images, setImages] = useState<string[]>(["/images/eye.avif","/images/s.avif","/images/together.avif"]);

  const handleSave = () => {
    const newData = {
      id: id,
      title: newTitle,
      description: newDescription,
      cta: newCta,
      image: newImage,
      background: background,
      template: template,
    };
    onSave(newData);
    onClose();
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files).map((file) => {
        return URL.createObjectURL(file);
      });
      setImages([...images, ...newImages]);
      if (newImages.length > 0) {
        setNewImage(newImages[0]);
      }
    }
  };
  return (
    <div>
      <h2 className={`text-2xl  mb-4 text-start fw ${poppins.className}`}>Edit Banner</h2>
      <div className="height">
      <div
        className={`relative rounded-lg shadow-lg mx-auto  template-${template} ad-banner`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="photoContainer">
          <Image
            src={newImage}
            alt={title}
            width={500}
            height={500}
            className="ad-image"
          />
        </div>
        <div className="p-4 text-wrapper">
          <h2 className="text-xl font-bold text-gray-900 mb-2 ad-title">
            {newTitle}
          </h2>
          <p className="text-gray-700 text-sm mb-4 ad-description">
            {newDescription}
          </p>
          <a target="_blank" className="btn">
            {newCta}
          </a>
        </div>
      </div>
      <form>
        
          <h4 className={`${styles.title} fw`}>Images</h4>
          <div className={styles.uploadContainer}>
            <label htmlFor="imageUpload" className={styles.uploadLabel}>
              <UploadOutlined className={styles.uploadIcon} />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className={styles.hiddenInput}
              onChange={handleImageUpload}
            />
            <div className={styles.imagePreview}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Uploaded image"
                  width={100}
                  height={100}
                  className={styles.image}
                  onClick={() => setNewImage(image)}
                />
              ))}
            </div>
       
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg fw text-start">Title:</label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg fw text-start">Description:</label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg fw text-start">CTA:</label>
          <input
            type="text"
            value={newCta}
            onChange={(e) => setNewCta(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
       </form>
</div>
        <div className="flex justify-center flex-col">
          <button type="button" className={styles.button} onClick={handleSave}>
            Done
          </button>
          <button type="button" className={styles.buttonD} onClick={onClose}>
            Download
          </button>
        </div>
      
      
    </div>
  );
};

export default UploadForm;
