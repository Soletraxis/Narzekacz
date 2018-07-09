import { StackNavigator } from 'react-navigation';
import ComplaintForm from 'Screens/ComplaintForm/ComplaintForm'
import ListOfComplaints from 'Screens/ListOfComplaints/ListOfComplaints';
import MenuScreen from 'Screens/Menu/Menu';

const StackRouter = StackNavigator({
        Menu: { screen: MenuScreen },
        List: { screen: ListOfComplaints, header: null},
        Submit: { screen: ComplaintForm, header: null },
    },
    { headerMode: 'none' },
)


export default StackRouter;
