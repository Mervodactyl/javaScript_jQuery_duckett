var hotel = {
  name: "Hotel Madagascar",
  rooms: 40,
  booked: 27,
  chackAvailability: function() {
    return this.rooms - this.booked;
  }
};

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailability();
