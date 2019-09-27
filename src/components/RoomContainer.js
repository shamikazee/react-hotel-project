import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer, withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading></Loading>;
        }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}

export default withRoomConsumer(RoomContainer);
