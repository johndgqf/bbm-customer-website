import { create } from 'zustand';

import { Map } from '@/types';

interface PreviewModalMap {
  isOpen: boolean;
  data?: Map;
  onOpen: (data: Map) => void;
  onClose: () => void;
}

const usePreviewModalMap = create<PreviewModalMap>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Map) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModalMap;
