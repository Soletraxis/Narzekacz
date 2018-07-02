import { StackNavigator } from 'react-navigation';
import SubmitComplaint from 'Screens/SubmitComplaint'

const StackRouter = StackNavigator({
        Submit: { screen: SubmitComplaint, header: null },
    },
    { headerMode: 'none' },
)


export default StackRouter;
