import { React, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
function Profile() {
    const [userDetails, setUserDetails] = useState(null);


    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                localStorage.setItem('myKey', JSON.stringify(docSnap.data()))
            } else {
                console.log("User is not logged in");
            }
        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await signOut(auth);
            localStorage.removeItem('myKey');
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }
    return (
        <div>
            {userDetails ? (
                <>
                    <div style={{ display: "flex", justifyContent: "center" }}>

                    </div>
                    <h3>Welcome {userDetails.firstname} 🙏🙏</h3>
                    <div>
                        <p>Email: {userDetails.email}</p>
                        <p>First Name: {userDetails.firstname}</p>
                        <p>Last Name: {userDetails.lastname}</p>
                    </div>
                    <button className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default Profile;