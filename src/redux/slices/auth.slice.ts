import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string;
    isAdmin: boolean;
    role: string;
    userId: string;
    enterpriseId: string;
    user: any;
    enterprise: any;
}

const initialState: AuthState = {
    accessToken: '',
    isAdmin: false,
    role: '',
    userId: '',
    enterpriseId: '',
    user: null,
    enterprise: null
}

export const authSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        authSuccess: (state, action: PayloadAction<AuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.isAdmin = action.payload.isAdmin;
            state.role = action.payload.role;
            state.userId = action.payload.userId;
            state.enterpriseId = action.payload.enterpriseId;
            state.user = action.payload.user;
            state.enterprise = action.payload.enterprise;
        }
    }
});

export const { } = authSlice.actions;