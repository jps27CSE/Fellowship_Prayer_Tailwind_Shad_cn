import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    User,
} from "firebase/auth";
import { createContext, useEffect, useState, ReactNode } from "react";
import auth from "../Firebase/FirebaseConfig"; // Import your FirebaseConfig correctly

interface AuthContextProps {
    user: User | null;
    loading: boolean;
    registerUser: (email: string, password: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    googleLogin: () => Promise<void>;
    logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error registering user:", error);
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error logging in user:", error);
        } finally {
            setLoading(false);
        }
    };

    const googleLogin = async (): Promise<void> => {
        setLoading(true);
        try {
            await signInWithPopup(auth, GoogleProvider);
        } catch (error) {
            console.error("Error with Google login:", error);
        } finally {
            setLoading(false);
        }
    };

    const logOut = async (): Promise<void> => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out user:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth state changed:", currentUser); // Debug log
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authValue: AuthContextProps = {
        registerUser,
        user,
        loginUser,
        logOut,
        loading,
        googleLogin,
    };

    return (
        <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
