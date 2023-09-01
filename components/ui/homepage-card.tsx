"use client";

import { HomepageFeature } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface HomepageCard{
    data: HomepageFeature;
}

const HomepageCard: React.FC<HomepageCard> = ({
    data
}) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation();

        // previewModal.onOpen(data);
    }
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation();

        // cart.addItem(data);
    }

    return (
        <div className="bg-white group rounded-xl border p-3 space-y-4">
            {/*Images and Actions*/}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    alt = "Image"
                    fill
                    src={data?.imageUrl}
                    className="aspect-square object-cover rounded-md"
                />
                {/* <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div> */}
            </div>
            {/* Description */}
            <div>
                <p className="font-bold text-xl">
                    {data.title}
                </p>
                <p className="text-lg text-gray-900 mt-6">
                    {data.content}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                {/* <Currency value={data?.price}/> */}
            </div>
        </div>
      );
}
 
export default HomepageCard;