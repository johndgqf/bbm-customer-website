"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import { Map } from "@/types";
import usePreviewModalMap from "@/hooks/use-preview-modal-map";

interface MapCard {
  data: Map;
}

const MapCard: React.FC<MapCard> = ({ data }) => {
  const previewModal = usePreviewModalMap();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image and actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.imageUrl}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Map description */}
      <div>
        <p className="font-semibold text-lg">{data.title}</p>
      </div>
    </div>
  );
};

export default MapCard;
