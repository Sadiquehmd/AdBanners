import React from "react";
import Image from "next/image";
import UploadForm from "./UploadForm";
import { MdEdit } from "react-icons/md";

interface AdBannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  template: number;
  onUpdate: (newData: any) => void;
}

const AdBanner: React.FC<AdBannerProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  template,
  onUpdate,
}) => {
  const [showEdit, setShowEdit] = React.useState(false);

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleSave = (newData: any) => {
    console.log(`Save changes for banner ${id}`);
    onUpdate(newData);
  };

  const handleClose = () => {
    setShowEdit(false);
  };
  return (
    <div
      className={`relative rounded-lg shadow-lg  template-${template} ad-banner`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <div className="photoContainer">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="ad-image"
      /></div>
      <div className="p-4 text-wrapper">
        <h2 className="text-xl font-bold text-gray-900 mb-2 ad-title">
          {title}
        </h2>
        <p className="text-gray-700 text-sm mb-4 ad-description">
          {description}
        </p>
        <a target="_blank" className="btn">
          {cta}
        </a>
      </div>
      <button
        className="icon"
        onClick={handleEdit}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <MdEdit />
      </button>
      {showEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative h-80">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleClose}
            >
              &times;
            </button>
            <UploadForm
              id={id}
              title={title}
              description={description}
              cta={cta}
              image={image}
              background={background}
              template={template}
              onClose={handleClose}
              onSave={handleSave}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
