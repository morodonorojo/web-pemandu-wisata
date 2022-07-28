import Image from "next/image";
import WhatsAppIcon from "../../../assets/icon-whatsapp.svg";

const TIOCard = ({
  photoProfile,
  officerName,
  officerNumber,
  className,
  ...props
}) => {
  return (
    <div className={`bg-black w-48 min-h-60 rounded-2xl p-3 ${className}`}>
      <div className="photo-profile relative aspect-square w-full bg-gray-300 rounded-lg overflow-hidden">
        <Image
          src={photoProfile.url}
          alt={`${photoProfile.alt} ${photoProfile.officerName}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="nama-tio text-white font-bold my-2 mb-6">{officerName}</p>
      <a
        href={`https://wa.me/${officerNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="whatsapp-cta w-full bg-green-custom p-2 text-center text-white font-bold rounded-lg flex flex-row justify-center items-center">
          <WhatsAppIcon />
          <p className="ml-1">Hubungi</p>
        </div>
      </a>
    </div>
  );
};

export default TIOCard;
