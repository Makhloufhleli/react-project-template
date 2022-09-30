import React from 'react';
import CustomTable from './components/CustomTable/CustomTable';
import { Constants } from './config/Constants';
const {
  values: { EMPTY_DATA, EMPTY_STRING },
} = Constants;

interface Props {}

class Calory {
  name: string = EMPTY_STRING;
  calories: number = EMPTY_DATA;
  fat: number = EMPTY_DATA;
  carbs: number = EMPTY_DATA;
}

class User {
  firstName: string = EMPTY_STRING;
  lastName: string = EMPTY_STRING;
  age: number = EMPTY_DATA;
}

function App(props: Props) {
  const {} = props;
  const rowsCalory: Array<Calory> = new Array();
  for (let i = 0; i < 4; i++) {
    const calory = new Calory();
    calory.name = `Cupcake ${i}`;
    calory.calories = 305*(i+1);
    calory.fat = 3.7*(i+1);
    calory.carbs = 67*(i+1);
    rowsCalory.push(calory);
  }
//   const rowsUser: Array<User> = new Array();
//   for (let i = 0; i < 4; i++) {
//     const user = new User();
//     user.firstName = `John ${i+1}`;
//     user.lastName = `Doe ${i+1}`;
//     user.age = 3*(i+1);

//     rowsUser.push(user);
//   }

  return (
    <>
      <CustomTable dataTypeObject={new Calory()} data={rowsCalory} actions={['delete']} />
      {/* <CustomTable dataTypeObject={new User()} data={rowsUser} actions={['view']} /> */}
    </>
  );
}

export default App;
