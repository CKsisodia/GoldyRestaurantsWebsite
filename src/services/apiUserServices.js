class ApiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  static getInstance() {
    return new ApiUserService();
  }

  signUp = async (credentials) => {
    const response = await fetch(
      this.BASE_URL + "signUp?key=AIzaSyDlZ2kuJ2xqKXRzBLAS8Wvz7wLDzDDIdgU",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Authentication-Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        alert(errorMessage);
      }
    }
  };

  logIn = async (credentials) => {
    console.log(credentials,3)
    const response = await fetch(
      this.BASE_URL +
        "signInWithPassword?key=AIzaSyDlZ2kuJ2xqKXRzBLAS8Wvz7wLDzDDIdgU",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(4,data)
      return data;
    } else {
      let errorMessage = "Log in failed";
      const data = await response.json();
      console.log(data);
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        alert(errorMessage);
      }
    }
  };

  forgotPassword = async (credentials) => {
    const response = await fetch(
      this.BASE_URL + "sendOobCode?key=AIzaSyDlZ2kuJ2xqKXRzBLAS8Wvz7wLDzDDIdgU",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: credentials.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("4", data);
      return data;
    }
  };

  getUserData = async () => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL + "lookup?key=AIzaSyDlZ2kuJ2xqKXRzBLAS8Wvz7wLDzDDIdgU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("4", data);
      return data;
    }
  };


  updateUserProfile = async (credentials) => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL + "update?key=AIzaSyDlZ2kuJ2xqKXRzBLAS8Wvz7wLDzDDIdgU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken:idToken,
          displayName: credentials.userName,
          photoUrl: credentials.photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } 
  };

}

export const apiUserService = ApiUserService.getInstance();
