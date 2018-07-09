import { StackNavigator } from 'react-navigation';
import ComplaintForm from 'Screens/ComplaintForm/ComplaintForm'
import ListOfComplaints from 'Screens/ListOfComplaints/ListOfComplaints';

const StackRouter = StackNavigator({
        List: { screen: ListOfComplaints, header: null},
        Submit: { screen: ComplaintForm, header: null },
    },
    { headerMode: 'none' },
)


export default StackRouter;
