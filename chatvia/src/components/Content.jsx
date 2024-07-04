import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../Context/ChatProvider";

import "swiper/css/bundle";

export default function Content() {
  const { user } = ChatState();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  if (user === null) {
    navigate("/");
  }

  const handleSignOut = () => {
    logout();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/user");
        setUsers(response.data);
        console.log(users.username, " users hello");
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch users", err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const firstLetter = users.map((user) => user.username.split("").slice(0, 1));

  if (loading) {
    return <div>Loading users...</div>;
  }

  // users un chat
  //loading false i guess
  // selectedUser in state set to false

  // useffect || async await
  // loding to true
  // fetch users from api, alaready did that
  // we've done this

  //handleClickUser function with user as an argument

  // attach onclick handleClick to each mapped user
  // if selectedUser is not null, render Conversation component with selected user as prop

  // Conversation component
  // selectedUser as props
  // Conversation with user.username
  //  Disply messges

  return (
    <main className="min-h-screen col-span-5 w-full bg-customLightGrey justify-between items">
      <div className=" flex flex-col w-full gap-2 items-start  mx-auto">
        <h1 className="w-4/5 mx-auto text-purple-400">Chats</h1>
      </div>
      <h2>Welcome, {user?.username}</h2>
      <button>Logout</button>

      <ul className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{
            "--swiper-navigation-color": "#171717",
            "--swiper-pagination-color": "#171717",
          }}
        >
          {users &&
            users?.map((user) => {
              const firstLetter = user.username
                .toUpperCase()
                .split("")
                .slice(0, 1);
              return (
                <SwiperSlide>
                  <li
                    className="rounded-full bg-customPurple text-white text-xl aspect-square flex items-center justify-center hover:bg-fuchsia-300"
                    key={user._id}
                  >
                    {firstLetter}
                  </li>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </ul>
    </main>
  );
}
