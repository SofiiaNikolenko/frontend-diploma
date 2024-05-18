import AddTripForm from '../../components/UserSections/AddTripForm/AddTripForm';
import AllUserTrips from '../../components/UserSections/AllUserTrips/AllUserTrips';
import UpdateTrip from '../../components/UserSections/UpdateTrip/UpdateTrip';

const User = () => {
  return (
    <>
      <h1>User</h1>
      <AddTripForm></AddTripForm>
      <br />
      <AllUserTrips></AllUserTrips>
      <br />
      <UpdateTrip></UpdateTrip>
    </>
  );
};

export default User;
