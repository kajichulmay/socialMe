import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../../context/userContext";
import ProfilePicUi from "../ui/ProfilePicUi";

function DropdownSearchusers({ alluser, search, setSearch }) {
    const findUser = [...alluser]
        .filter(item => item.firstName.toLowerCase().includes(search.toLowerCase()))
        .splice(0, 8);
    const { setUserTrigged } = useContext(userContext);
    const history = useHistory();
    return (
        <div className="w-96 shadow-md fixed top-16 right-0 rounded-2xl bg-white z-50 lg:left-16">
            {findUser.map(item => (
                <div
                    className="flex items-center p-2 border-b-2 cursor-pointer"
                    onClick={() => history.push(`/myprofile/${item.id}`, setSearch(""))}
                >
                    {item.profilePicture ? (
                        <ProfilePicUi beforeSize="16" afterSize="16" url={item.profilePicture} />
                    ) : (
                        <ProfilePicUi
                            beforeSize="16"
                            afterSize="16"
                            url="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
                        />
                    )}
                    <p className="ml-3 text-lg">{item.firstName}</p>
                    <p className="ml-3 text-lg">{item.lastName}</p>
                </div>
            ))}
        </div>
    );
}

export default DropdownSearchusers;
