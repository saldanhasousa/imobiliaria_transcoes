import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

function ImageGallery({image, titulo}) {
  return (
    <div className="relative h-90 sm:h-125 rounded-xl overflow-hidden bg-black">
      <img
        src={image}
        alt={titulo}
        className="w-full h-full object-cover"
      />

      <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
        <HiArrowSmLeft />
      </button>

      <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
        <HiArrowSmRight />
      </button>
    </div>
  );
}
export default ImageGallery