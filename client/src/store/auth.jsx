import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => { 
    // ram
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([])
    const authorizationToken = `Bearer ${token}`

    const baseURL = import.meta.env.VITE_APP_BASE_URL

    console.log("baseURL from env:", baseURL);

    const isLoggedIn = !!token;
    console.log("isLOGGEDIN:- ", isLoggedIn);


    const saveTokenInLocalStora = (token) => {
      setToken(token)
      return localStorage.setItem("token", token);
    };

    const LogoutUser = () => {
        setToken('');
        return localStorage.removeItem("token");
    };

    // JWT AUTHENTICATION - to get currently loggedIN user data

    const userAuthentication = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseURL}/api/auth/user`, {
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': authorizationToken   // here maybe remove ('')
          }
        });

        console.log('userAuthentication response url:', response.url, 'status:', response.status);
        const contentType = response.headers.get('content-type') || '';
        console.log('userAuthentication content-type:', contentType);

        if (!contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Expected JSON but got:', text.slice(0, 200));
          setIsLoading(false);
          return;
        }

        if (response.ok) {
          const data = await response.json();
          console.log("User Data:- ", data.userData);
          // our main goal is to get the user data 👇
          setUser(data.userData);
          setIsLoading(false);
        } else {
          console.error("Error fetching user data");
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        console.error("Error fetching user data:", error);
      }
    };

    // to fetch the services data from the database
    const getServices = async () => {
      try {
        const response = await fetch(`${baseURL}/api/data/service`, {
          method: "GET"
        });

        console.log('getServices response url:', response.url, 'status:', response.status);
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Expected JSON for services but got:', text.slice(0,200));
          return;
        }

        if (response.ok) {
          const data = await response.json();
          // console.log(data.message);
          setServices(data.message)
        }
        
      } catch (error) {
        console.log("services frontend error:- ", error);
        
      }
    }

    useEffect(() => {
      getServices()
      userAuthentication();
    }, []);

      


  return (
    <AuthContext.Provider value={{ saveTokenInLocalStora, LogoutUser, isLoggedIn, user, services, authorizationToken, isLoading, baseURL }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextVlaue = useContext(AuthContext);

  if (!authContextVlaue) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return authContextVlaue;
};

