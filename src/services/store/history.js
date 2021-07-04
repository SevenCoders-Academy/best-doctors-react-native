import create from 'zustand';

export const useHistoryStore = create(set => ({
  appointment: null,
  setAppointment: appointment => set({ appointment }),
}));
