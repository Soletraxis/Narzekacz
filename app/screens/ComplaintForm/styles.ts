import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        alignSelf: 'center',
        padding: 10
    },
    container: {
        flex: 1
    },
    contentContainer: {
        borderTopColor: 'forestgreen',
        borderTopWidth: 2
    },
    button: {
        paddingTop: 10,
        width: '40%',
        alignSelf: 'center'
    },
    questionary: {
        borderBottomColor: 'forestgreen',
        borderBottomWidth: 2,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 2
    },
    question: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
})
