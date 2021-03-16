import UserForm from './UserForm';

const App = ( {initialCount = 0} ) => {
  return (
    <div>
      <h1>Challenge Form</h1>
      <UserForm />
    </div>
  );
};

export default App;