import AddTripForm from '../../components/UserSections/AddTripForm/AddTripForm';
import AllUserTrips from '../../components/UserSections/AllUserTrips/AllUserTrips'

const User = () => {
  return (
    <>
      <h1>User</h1>
      <AddTripForm></AddTripForm>
      <br />
      <AllUserTrips></AllUserTrips>
    </>
  );
};

export default User;
