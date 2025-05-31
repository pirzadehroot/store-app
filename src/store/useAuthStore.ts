import { UserDto } from '@/Dto/user.dto';
import { getCurrentUserService } from '@/services/auth/authServices';
import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: null | UserDto;
  isAuthenticated: boolean;
  setUser: (user: AuthState['user']) => void;
  logout: () => void;
  loadUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => set({ user: null, isAuthenticated: false }),
      loadUser: async () => {
        try {
          const user = await getCurrentUserService();
          set({ user, isAuthenticated: true });
        } catch (error) {
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
