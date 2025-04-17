import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings, deleteBooking } from '../../../actions/booking';
import '../../../styles/AdminBookings.scss';

const AdminBookings = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  const allBookings = useSelector((state) => state.existing);
  const filteredBookings = allBookings.filter(booking => 
    booking.email.toLowerCase().includes(filter.toLowerCase()) ||
    booking.confirmation.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      dispatch(deleteBooking({ id }));
    }
  };

  return (
    <div className="AdminBookings">
      <div className="header">
        <h1 className="alt-font">Admin Booking Management</h1>
        <input
          type="text"
          placeholder="Search by email or confirmation code"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="bookings-table">
        <table>
          <thead>
            <tr>
              <th>Confirmation</th>
              <th>Guest Name</th>
              <th>Email</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Room</th>
              <th>Guests</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.confirmation}>
                  <td>{booking.confirmation}</td>
                  <td>{booking.firstName} {booking.lastName}</td>
                  <td>{booking.email}</td>
                  <td>{booking.dates && booking.dates[0] ? new Date(booking.dates[0]).toLocaleDateString() : 'N/A'}</td>
                  <td>{booking.dates && booking.dates[1] ? new Date(booking.dates[1]).toLocaleDateString() : 'N/A'}</td>
                  <td>{booking.room}</td>
                  <td>{booking.adults + (booking.children || 0)}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(booking.confirmation)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-bookings">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;