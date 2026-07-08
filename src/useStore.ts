import { create } from 'zustand';

interface UIState {
  activeView: string;         // Pane ở giữa đang hiển thị gì?
  rightPanelContent: string;  // Pane bên phải đang hiển thị gì?
  setActiveView: (view: string) => void;
  setRightPanel: (content: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeView: 'home',
  rightPanelContent: 'none',
  
  // Các action để thay đổi trạng thái
  setActiveView: (view) => set({ activeView: view }),
  setRightPanel: (content) => set({ rightPanelContent: content }),
}));