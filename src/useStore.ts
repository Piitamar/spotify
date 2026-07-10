import { create } from 'zustand';

interface UIState {
  mainView: string;         
  rightPanelContent: string;  
  setMainView: (view: string) => void;
  setRightPanel: (content: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  mainView: 'home',
  rightPanelContent: 'none',
  
  setMainView: (view) => set({ mainView: view }),
  setRightPanel: (content) => set({ rightPanelContent: content }),
}));